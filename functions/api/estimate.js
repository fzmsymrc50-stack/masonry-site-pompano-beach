// Cloudflare Pages Function: POST /api/estimate
// Emails each estimate request (with photos attached) through Resend.
// Configure in Cloudflare Pages > Settings > Variables and secrets:
//   RESEND_API_KEY  (secret)  your Resend API key
//   TO_EMAIL                  where requests are delivered
//   FROM_EMAIL     (optional) defaults to estimates@masonrycontractorpompanobeach.com (domain must be verified in Resend)
//   TURNSTILE_SECRET_KEY (optional secret) enables Cloudflare Turnstile spam checks

const MAX_FILES = 5;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

const page = (title, msg, status) =>
  new Response(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>` +
      `<body style="font-family:system-ui,sans-serif;max-width:560px;margin:60px auto;padding:0 16px;line-height:1.6">` +
      `<h1>${title}</h1><p>${msg}</p><p><a href="/">Back to the website</a></p></body>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8' } },
  );

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);

function toBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

export async function onRequestPost({ request, env }) {
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  const fail = (msg, status = 400) =>
    wantsJson ? json({ ok: false, error: msg }, status) : page('Request not sent', esc(msg), status);

  let form;
  try {
    form = await request.formData();
  } catch {
    return fail('The form could not be read. Please try again.');
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success for bots.
  if (clean(form.get('company_website'), 200)) {
    return wantsJson ? json({ ok: true }) : Response.redirect(new URL('/thank-you/', request.url).toString(), 303);
  }

  const name = clean(form.get('name'), 100);
  const phone = clean(form.get('phone'), 40);
  const service = clean(form.get('service'), 80);
  const message = clean(form.get('message'), 4000);
  const city = clean(form.get('city'), 80);
  const source = clean(form.get('source'), 200);

  if (!name) return fail('Please enter your name.');
  if ((phone.match(/\d/g) || []).length < 7) return fail('Please enter a valid phone number.');
  if (!service) return fail('Please choose the type of masonry service.');

  if (env.TURNSTILE_SECRET_KEY) {
    const token = clean(form.get('cf-turnstile-response'), 4000);
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: request.headers.get('CF-Connecting-IP') || '' }),
    }).then((r) => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return fail('Spam check failed. Please reload the page and try again.');
  }

  const files = form.getAll('photos').filter((f) => f && typeof f === 'object' && f.size > 0);
  if (files.length > MAX_FILES) return fail(`Please attach no more than ${MAX_FILES} photos.`);
  let total = 0;
  const attachments = [];
  for (const f of files) {
    if (!String(f.type || '').startsWith('image/')) return fail('Only image files can be attached.');
    if (f.size > MAX_FILE_BYTES) return fail('Each photo must be under 5 MB.');
    total += f.size;
    if (total > MAX_TOTAL_BYTES) return fail('Photos must total under 10 MB.');
    attachments.push({ filename: clean(f.name || 'photo.jpg', 120), content: toBase64(await f.arrayBuffer()) });
  }

  if (!env.RESEND_API_KEY || !env.TO_EMAIL) {
    console.error('estimate: RESEND_API_KEY or TO_EMAIL is not configured');
    return fail('Online requests are not available right now. Please try again later.', 503);
  }

  const rows = [
    ['Name', name], ['Phone', phone], ['Service', service], ['City', city],
    ['Photos attached', String(attachments.length)], ['Sent from page', source],
  ].filter(([, v]) => v);
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nJob description:\n${message || '(none given)'}\n`;
  const html =
    `<h2 style="font-family:sans-serif">New estimate request</h2><table style="font-family:sans-serif;border-collapse:collapse">` +
    rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555">${esc(k)}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`).join('') +
    `</table><h3 style="font-family:sans-serif">Job description</h3><p style="font-family:sans-serif;white-space:pre-wrap">${esc(message || '(none given)')}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.FROM_EMAIL || 'Masonry Pompano Beach <estimates@masonrycontractorpompanobeach.com>',
      to: [env.TO_EMAIL],
      subject: `New estimate request: ${service} from ${name}`,
      text,
      html,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error('estimate: Resend error', res.status, await res.text().catch(() => ''));
    return fail('Your request could not be sent. Please try again in a moment.', 502);
  }

  return wantsJson ? json({ ok: true }) : Response.redirect(new URL('/thank-you/', request.url).toString(), 303);
}

export async function onRequest({ request }) {
  if (request.method === 'POST') return onRequestPost(...arguments);
  return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
}
