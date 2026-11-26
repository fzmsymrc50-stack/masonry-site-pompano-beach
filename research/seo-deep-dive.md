# SEO deep-dive: masonry contractor Pompano Beach (2026-11-25)

Sources: raw HTML downloaded with curl (real title/meta/canonical/schema), and live Google results viewed in a browser (`gl=us`, location auto-detected as Pompano Beach). Google started a CAPTCHA after 4 searches; I stopped and did not bypass it. Everything not listed as VERIFIED is unverified.

## 1. VERIFIED raw-HTML tags

| Site / page | Title tag | Meta description | Canonical | Schema types | Imgs (no alt) | Forms / tel links |
|---|---|---|---|---|---|---|
| coastalmasonry.com `/` | Coastal Masonry - South Floridas Masonry Experts (apostrophe dropped) | 30-yr high-rise blurb, truncated | none | none | 12 (0) | 0 / 0 |
| fortlauderdalemasonry.com `/pompano-beach-masonry/` | Masonry Contractor in Pompano Beach FL \| Brickwork & Paving | "...Retaining Wall, Paver, Driveway. Expert craftsmanship... Call (954)710-9191 today!" | self | Service, BreadcrumbList, WebPage, Organization (no LocalBusiness, no FAQ, no rating) | 66 (0) | 1 / 5 |
| fortlauderdalemasonry.com `/` | Masonry Contractor in Fort Lauderdale, FL \| Stone & Brick | "...Licensed & Free Consultation" | self | LocalBusiness, FAQPage, AggregateRating (5.0, 8 reviews), GeoCoordinates, Service, OfferCatalog | 69 (1), 9 webp/avif | 1 / 8 |
| bishopsconstructionfl.com `/` | Home - Bishop's Construction | "est. 2023" (the entire description) | self | Organization, Person, Article, WebSite (no LocalBusiness) | 39 (37 missing alt) | 0 / 3 |
| ronkendallmasonry.com `/` | none | none | none | none | n/a | n/a |
| hollywoodmasonry.com `/masonry-contractor-near-pompano-beach-fl` | Expert Masonry Contractor Pompano Beach FL \| HWM Hollywood Masonry | "CBS homes near the coast and inland... Free estimates, licensed, 1-day response." | self | none | 3 (0) | 0 / 8 |

Raw-HTML takeaways
- FLM's Pompano page has **no LocalBusiness/FAQ/rating schema**; only the homepage does. We can beat them just by shipping complete schema on every page.
- Bishop's meta description is literally "est. 2023", and 37 of 39 images lack alt text. Weak on-page SEO.
- HWM has zero schema and no on-page form, yet wins Pompano-specific content signals.
- Coastal has no canonical, no schema, no tel links, no webp.

## 2. Ron Kendall Masonry: the 4th named competitor (VERIFIED)
- ronkendallmasonry.com does **not host a real website**. In a real browser it renders an empty body plus a third-party ad iframe (findresultsquick.com) and a consent-manager script. curl and the sitemap return 403/empty. The domain looks parked or hijacked.
- Yet Ron Kendall **ranks in Google's local pack** for "masonry contractor pompano beach" (listed 2nd, 4.4 stars, 5 reviews at the block-wall query, 10+ years, phone (954) 582-0170, 2641 Hammondville Rd) and shows MapQuest/directory listings.
- Conclusion: it ranks on Google Business Profile, directories and brand/age signals alone. The map pack is beatable with a better GBP and reviews.

## 3. LIVE SERP FINDINGS (Google, US, Pompano Beach location)

### "masonry contractor pompano beach"
- Google rewrote it to "masonry construction pompano beach" (query ambiguity).
- Local pack (3): American best Masonry & Chimney Repair Services (no reviews, 10+ yrs, 24h), Ron Kendall Masonry (no reviews shown), Fort Lauderdale Masonry (5.0, 8 reviews, 35+ yrs in business, Oakland Park).
- Organic (in order seen): hollywoodmasonryservice.com brickwork page (a different domain from hollywoodmasonry.com), iLocate directory, Thumbtack, MapQuest, BBB, MapQuest (Craftsman Masonry), Tooltaly, MapQuest (Murillo Paver). People Also Ask present. **Directories dominate; no strong local site on page 1.**
- Intent: commercial/local. Dominant format: Maps listing + directory listings.

### "masonry contractors near me"
- Location detection failed ("Can't determine location"), results were Louisiana/Texas. Not usable for Pompano. Near-me visibility depends on proximity and the GBP, not the website.

### "concrete block wall contractor pompano beach"
- Local pack: Pompano Beach Concrete Solutions (5.0, 5), Cabo Brick and Stone (5.0, 34, 15+ yrs), Ron Kendall (4.4, 5).
- Organic: Yelp, MapQuest listings (N Ricardo's Brick Pavers, K & J Design Brick Pavers), an Instagram reel (Larry's Construction), Yellow Pages, Yahoo Local, HomeAdvisor, MapQuest (Ron Kendall). Page 1 has **no dedicated block-wall service page from any contractor**. Big opening for `/concrete-block-walls/`.

### "brick repair pompano beach"
- Local pack: N Ricardo's Brick Pavers (4.8, 34), Kelly Restorations (5.0, 67 reviews, 24h, online estimates), American best Masonry (4.9, 9).
- Organic: MapQuest (Murillo Paver, South Fla Masonry, Pompano Masonry, Craftsman Masonry, Ron Kendall, Ble Brick Pavers), Facebook, hollywoodmasonryservice.com chimney page, Thumbtack. Again almost entirely directories.

### Not checked (CAPTCHA): retaining wall, stucco repair, commercial/residential, stone, brick mason, block mason, brick masonry, concrete block contractor, masonry company/services/contractors pompano beach fl. Earlier non-Google web searches suggest: retaining walls are won by Perfect Pavers, Boca Raton Retaining Walls, Pompano Beach Concrete Solutions; stucco repair by Stucco HQ and PS Stucco (these are UNVERIFIED as Google ranks).
- AI Overview: none appeared in the four SERPs I saw. Unverified for the rest.
- Search volume and keyword difficulty: **no data** (needs Ahrefs/Semrush/Keyword Planner).

## 4. What Google rewards here
1. **Local pack is won by review count + GBP completeness.** Winning profiles: Kelly Restorations (67 reviews), Cabo Brick and Stone (34), N Ricardo's (34). Fort Lauderdale Masonry has only 8 reviews, yet appears. 40-60+ real reviews would beat all of them.
2. **Organic page 1 is mostly directories and MapQuest/Yelp/Thumbtack**, with thin contractor pages. A real service page per intent is a clear gap.
3. Sister/duplicate domains show up (hollywoodmasonryservice.com with 'Get X in Pompano Beach' pages), so Google accepts location-service pages when they are specific.

## 5. Strategy that follows
1. **GBP first** (primary category Masonry contractor; secondary: Concrete contractor, Stucco contractor, Retaining wall supplier if true; service list, products, photos weekly, Q&A, "online estimates"). Get a review engine: aim for 50+ real reviews in 6 months, ask after every job with a direct link.
2. Pages to prioritize (open SERP gaps): `/concrete-block-walls/`, `/block-masonry/`, `/masonry-repair/` (brick repair), then `/retaining-walls/`.
3. Each page: unique local detail (HVHZ block reinforcement, Pompano permits, salt-air spalling), price range, process, project proof, FAQ schema, LocalBusiness schema, real photos with alt text.
4. Citations: NAP identical on Google, Bing, Apple, Yelp, BBB, Angi, HomeAdvisor, Thumbtack, Houzz, Procore (commercial), MapQuest, Yellow Pages, Manta, Chamber of Commerce.
5. Links: local chamber, supplier/manufacturer pages, GC and HOA partners, local news/sponsorships, project features. Competitors' backlink profiles are unverified; pull from Ahrefs/Semrush.
6. Technical: keep Astro static, Core Web Vitals green, schema on every page, sitemap with real lastmod, descriptive file names, no duplicate boilerplate across city pages.

## 6. What I still cannot give you
Backlinks, referring domains, anchors, keyword volumes/difficulty, the 8+ unchecked SERPs, GBP internals. Fastest fix: an Ahrefs/Semrush account export (or API key) and I'll complete it; or run the remaining searches yourself and paste results.
