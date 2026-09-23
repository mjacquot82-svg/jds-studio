# Focused portfolio refinement — September 23, 2026

## Current presentation: public work versus in-development summaries

This latest UX/privacy correction supersedes the earlier development case studies described below.

- IPM and Tee & Co now use the same two-column vertical card layout, stacking on mobile. IPM retains its Flagship / Live now labels without a special width or horizontal composition.
- Wellington and Freezer Fitness appear in an In Development area as concise text-only cards. Their detailed case-study data, expanders, screenshots, image placeholders and all links have been removed from the public UI/data. The old hash targets no longer exist.
- Wellington's screenshot was moved out of `public/assets/projects/` into `artifacts/private-project-media/`; it is absent from `dist/`. This is local review material, not a deployed asset.
- Homecoming remains a static case study under completed work, labelled Completed event, explaining that the event took place and concluded.
- Three static case studies remain: IPM, Tee & Co and Homecoming. These are independent of any live app.
- IPM has a separate external link to the user-supplied `https://theipm.ca`, opening a new tab. Tee & Co's `liveUrl: null` is explicitly documented in `src/data/portfolio.js`; no external link will appear until Marc supplies the confirmed public production URL.

Validation: lint passes; 5/5 mocked contact tests pass; production build passes (37 modules; CSS 14.33 kB; JS 184.50 kB). Browser checks pass at 1440/768/390/320 px with equal primary-card dimensions on desktop, natural mobile stacking, no overflow, keyboard expanders, all three static deep links, no development card images/links/details, absent development hash targets and the removed screenshot no longer served as an image. The IPM external link was clicked in a browser and its exact new-tab destination verified using interception; no external network request was made. Zero unexpected console/page errors. Desktop/mobile screenshots visually reviewed. No real contact submissions.

Files changed in this correction: `src/data/portfolio.js`, `src/components/ProjectCard.jsx`, `src/components/FeaturedProject.jsx`, `src/components/Solutions.jsx`, `src/styles.css`, `scripts/verify-redesign.mjs`, `README.md`, this report, and removal of the Wellington image from public assets. Hero, About, process, colours/type choices, contact implementation, SEO and analytics are unchanged. Nothing pushed, merged or deployed.

## Latest correction: confirmed statuses and Wellington

Marc explicitly confirmed the current project statuses. These supersede any earlier uncertainty about deployment:

- IPM 2026 Event App: **LIVE NOW**, built and currently being used for the 2026 International Plowing Match & Rural Expo.
- Tee & Co: **LIVE**, a real client apparel ordering/business operations system currently in use. The portfolio screenshot still truthfully identifies its sample catalogue.
- Freezer Fitness: **IN DEVELOPMENT**, not launched.
- Wellington Apparel Co.: **IN DEVELOPMENT**, added under More work.
- Walkerton Homecoming: **COMPLETED**. The app was built and used; the event took place and concluded. This is not a failed or discontinued project.

Tasteful text badges appear on every card; each expanded case study explains its status. The three primary cards remain unchanged in order. Wellington and Homecoming each have a full static case study under More work. Wellington's direct link is `/#project-wellington-apparel`.

Wellington evidence was read from the existing local repository at HEAD `80e8a71cd6c5606ea41668479297ccc54a6b4d5b`: `README.md`, `docs/MILESTONE-2A-REVIEW.md`, and the newer `docs/MILESTONE-2B-REVIEW.md`. The current apparel-first flow supports garment/design selection, per-item colours/sizes/quantities/notes, multiple garments, saved drafts and review. No cloud ordering, payment or launch claims were added. Existing `artifacts/wellington-2b-apparel-1440.png` was visually checked and converted to `public/assets/projects/wellington-apparel-storefront.webp`; it shows clearly labelled test garments/prices and no customer data. The source repository was not modified.

Files changed in this correction: `src/data/portfolio.js`, `src/components/FeaturedProject.jsx`, new reusable `src/components/ProjectCard.jsx`, `src/components/Solutions.jsx`, `src/styles.css`, the new Wellington image, `scripts/verify-redesign.mjs`, `README.md`, and this report. Approved hero, personal photo placeholder, services/process/contact copy, backend, metadata and hosting configuration remain untouched.

Final validation for this correction: lint passes; 5/5 mocked contact tests pass; production build passes (37 modules, JS 186.41 kB, CSS 14.87 kB); browser checks cover all five case studies and statuses at 1440/768/390/320 px, including deep-link reloads, local images, keyboard navigation, expanded layouts and contact mocks. Visual review found an inherited disclosure selector rotating the More work label; it now targets only the case-study arrow, with a browser regression assertion. No live submissions, external application requests, unexpected console errors or production changes. No pushes, merges or deployments.

The remaining sections record the earlier refinement and its original validation figures.

The approved overall design is retained. Changes are limited to portfolio content/layout, local assets, browser verification and documentation. Hero/photo card, services, about copy, budget wording, process, contact component, SEO metadata, legal content, hosting and environment configuration were not changed in this pass.

## Portfolio and local case studies

1. **IPM 2026 Event App** — flagship; factual event application for the 2026 International Plowing Match & Rural Expo. Schedules, interactive site maps, saved itinerary and announcements are supported by existing local source.
2. **Tee & Co** — apparel ordering/business operations; customer catalogue, order requests and visibility, staff entry and production workflow. No private operational details or links to the running system.
3. **Freezer Fitness** — labelled **in development**. Existing documentation supports service browsing, appointment booking, packages, waitlists and owner booking/availability tools in the development version. No public-launch, live-payment or gym-membership claim.
4. **Walkerton Homecoming** — retained under the expandable More work section, using the existing supported description.

The Fridge project is removed from the rendered portfolio. Its existing image is preserved, unreferenced, as archival media.

Case studies remain within the single-page architecture. Each has situation/problem, build, capabilities, what it enables and imagery or an explicit placeholder. Direct links open the relevant native details element, including its parent when nested:

- `/#project-ipm-2026`
- `/#project-tee-co`
- `/#project-freezer-fitness`
- `/#project-walkerton-homecoming`

No new server routes, redirects, runtime dependencies or external demo links. All content and image links are served by JDS itself.

## Evidence and asset provenance

The JDS checkout had no assets for the three requested primary projects. Relevant neighboring repositories were inspected read-only; no applications, databases or external services were started or accessed.

| Project | Evidence | Media used |
| --- | --- | --- |
| IPM | Local `../ipm-event` Git HEAD `c78aca6b7a4e060b587eeb91439821b71b3cd33d`; `frontend/app/(tabs)/schedule.tsx`, `map.tsx`, `itinerary.tsx`, `announcements.tsx` | Exact existing `frontend/assets/images/ipm-2026-banner.png` copied from Git to `public/assets/projects/ipm-2026-banner.png`. Caption identifies it as a project banner, not an application screenshot. |
| Tee & Co | Local `../tee-co-portal-demo` source routes in `src/App.jsx`, customer portal/order pages and production workflow module; HEAD `d79699fb8bbd03080c344c5237381cd466a77fa5` | Existing `artifacts/storefront-image-priority/after/storefront-home-product-types.png`, visually checked for private data and converted to WebP at `public/assets/projects/tee-co-storefront.webp`. It shows the customer-facing interface with sample catalogue data, not customer/staff records. Preview is cropped with CSS; full static capture is linked. |
| Freezer Fitness | Local `../wellness-booking-saas/README.md` and `docs/FEATURE_CLASSIFICATION.md`; HEAD `862cfae85fc5a5054403d36ee7d41a1a56be9d20` | Intentional typographic placeholder. Existing photography is explicitly designated PRIVATE DEMO ONLY in `docs/TEMPORARY_WEBSITE_ASSETS.md`, so it was not imported. No invented software interface. |
| Walkerton Homecoming | Existing JDS content | Retained HTML/CSS overview illustration, clearly labelled as an illustration rather than an app screenshot. |

Remaining assets: Marc's real portrait; approved attendee screenshots for IPM; approved Freezer Fitness screenshots/imagery; an actual Homecoming screenshot. A polished Tee & Co capture with approved catalogue content can replace the clearly labelled sample-data capture. No additional personal photo or project interface was generated.

## Files changed in this refinement only

- `src/components/FeaturedProject.jsx`
- `src/components/Solutions.jsx`
- `src/data/portfolio.js` (new)
- `src/styles.css` (portfolio-specific additions only)
- `public/assets/projects/ipm-2026-banner.png` (new, existing real project asset)
- `public/assets/projects/tee-co-storefront.webp` (new, existing real interface capture)
- `scripts/verify-redesign.mjs`
- `README.md`
- `docs/redesign-review.md` (link to this newer report)
- `docs/portfolio-refinement.md` (new)
- Local screenshots/results in `artifacts/redesign/`, including desktop/mobile portfolio, expanded case studies and contact sections.

## Validation

- `npm run lint`: exit 0; no warnings/errors.
- `npm run build`: exit 0; 36 modules; HTML 2.93 kB, CSS 14.19 kB, JS 183.57 kB (gzip: 1.03 / 3.90 / 57.58 kB).
- `node --test tests/contact.test.mjs`: exit 0; **5 passed, 0 failed**. Entire email provider is mocked in an isolated environment.
- Initial sandbox build/test attempts hit Windows `spawn EPERM`; approved execution outside the sandbox completed successfully.
- `node scripts/verify-redesign.mjs <path-to-playwright-package> http://127.0.0.1:4173`: exit 0 against the final production bundle.
- Browser at 1440, 768, 390, 320 px: no horizontal overflow collapsed or expanded; images decode successfully; anchor targets exist; correct primary project order; Fridge absent; keyboard summaries work; no iframes.
- All four direct case-study URLs open after reload; local full-image links return 200 with image MIME types.
- Contact: required-field validation; compatible JSON payload; success clears fields; simulated failure preserves message. No real submissions. Existing frontend and Netlify function were not edited.
- Legal pages and canonicals pass; skip link works. **Zero external browser requests, zero page errors, zero unexpected console errors.** The simulated contact failure logs the existing expected error.
- Desktop/mobile portfolio and contact screenshots visually reviewed. Machine results: `artifacts/redesign/browser-results.json`.
- `git diff --check`: pass, apart from informational existing LF/CRLF conversion notices.
- SEO/analytics: no changes this pass; original SEO/social tags and crawl files remain. No source tracker was present or removed. Production/host-injected settings untouched.

## Local review and safety

Branch remains `redesign/personal-jds-brand-20260923`; main and HEAD remain `8575659b9bb9d1d205e730f5bc36215e87abc320`. No new commits. Nothing pushed, merged or deployed; no production changes.

From `the repository root`:

```powershell
npm run dev -- --host 127.0.0.1
```

Vite preview is frontend-only; it does not send contact email through Netlify. The already-running production preview is at `http://127.0.0.1:4173`.
