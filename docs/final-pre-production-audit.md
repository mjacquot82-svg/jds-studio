# Final pre-production audit — NO-GO FOR PRODUCTION

Historical audit snapshot, recorded before the final commit. Marc subsequently accepted this audit and authorized one final redesign commit. The uncommitted-tree finding below describes that earlier state; the final commit records the approved release files. Generated evidence/private review media remain local and are excluded by `/artifacts/` in `.gitignore`. Machine-specific tool paths have been replaced with portable placeholders. No publication is authorized by this record.

The approved local site passes the application checks below. No release-blocking application bug was found; no design, copy, source code, production configuration, environment variables or secrets were changed during this audit. Only generated audit evidence and this report were added/refreshed.

## Release blockers / unverified prerequisites

1. **No committed redesign release exists.** Branch `redesign/personal-jds-brand-20260923`; base main and current HEAD are both `8575659b9bb9d1d205e730f5bc36215e87abc320`. That SHA is the original site, not the tested redesign. Intended changes are a mixture of staged, unstaged and untracked files. Committing a reviewed release snapshot remains necessary before a reproducible Git-based release. This audit did not commit anything.
2. **Netlify dashboard settings were not accessible through the local checkout/tools.** Repository compatibility passes, but confirm the existing build command is `npm run build`, publish directory is `dist`, and existing contact/host-managed integrations remain configured before release. No settings or secrets were read or changed. Do not publish the repository root: local review artifacts intentionally contain development captures and are not production assets.

No further design assets or project URLs are required from Marc for the approved scope. Missing screenshots for projects not shown publicly are not blockers. A commit/release instruction and confirmation of the existing Netlify build/publish setup are the outstanding release steps.

## Quality gates — exact results

| Check | Result |
| --- | --- |
| `npm run lint` | Exit 0, no errors/warnings |
| `npm run build` | Exit 0, 37 modules; HTML 2.93 kB / gzip 1.03; CSS 14.53 kB / gzip 3.95; JS 185.00 kB / gzip 57.87 |
| `node --test tests/contact.test.mjs` | Exit 0; 5 tests passed, 0 failed |
| `node scripts/verify-redesign.mjs <path-to-playwright-package> http://127.0.0.1:4173` | Exit 0; 1440, 768, 390, 320 px checks passed |
| `node artifacts/redesign/final-browser-audit.cjs` | Exit 0; accessibility basics, metadata, photo caption, local images, both external link destinations passed |
| `git diff --check`, `git diff --cached --check` | Exit 0; informational Windows LF/CRLF notices only |
| Production artifact scan | 19 files; 0 scan findings; 0 case collisions; 0 development screenshots, source maps or private review files |

Package.json has no separate npm test script; the existing direct Node contact tests and browser suite were run. Windows subprocess permissions were used for build/browser/test execution, not deployment.

## General / accessibility / photo

- Desktop and mobile layouts, equal primary-card sizing, mobile stacking, collapsed/expanded case studies, navigation anchors and images pass. No horizontal overflow at the four tested widths.
- Keyboard skip link moves focus to main; project summaries open via keyboard; focus outlines present. Homepage and both legal pages have one H1/main, unique IDs, document language `en-CA`, labelled visible fields, alt text and named links. These are accessibility basics, not a full WCAG certification.
- No localhost/staging/private/admin/file paths in public links. No unexpected browser console errors or page errors. Expected error logging occurs only during the explicitly mocked contact failure test.
- `public/assets/marc-jacquot.webp` loads locally. Desktop and mobile crops visually reviewed; both faces and the original setting remain visible. Caption is exactly “Marc Jacquot” and “Your point of contact. And your developer.” Hello remains. Placeholder and “A face behind the work” wording are gone.

## Portfolio verification

| Project | Verified public behavior |
| --- | --- |
| IPM 2026 | Live now; currently being used for the 2026 International Plowing Match & Rural Expo; local static case study; locally stored original production hero layers; “On your phone, go to theipm.ca to view the app.”; “View the Live App” href exactly `https://theipm.ca` |
| Tee & Co | Live; local static case study; href exactly `https://teeandco.jdsstudio.ca/`; approved storefront capture only, no embedded/private/admin system |
| Walkerton Homecoming | Completed event; explicitly built/used and event concluded; static case study; no currently-live/development claim |
| Wellington Apparel Co. | In Development; concise text only; no images, links, case-study target, live/staging URL or See the Project control |
| Freezer Fitness | In Development; concise text only; no images, links, case-study target, live/staging URL or See the Project control |

Both live links were clicked and their exact new-tab destinations verified with interception; no requests were sent to those client apps. Three public case-study deep links open after reload; old development case-study hashes have no targets. Portfolio checks run while all external requests are blocked; zero external requests are needed to render the site. External live links are supplemental.

No Fridge project appears in rendered portfolio content. Previously preserved legacy assets (including its unreferenced screenshot and old site mockup) remain in public assets, as requested in the original preservation instructions; they are not active portfolio content. Existing `/homecoming` Netlify proxies remain unchanged as separate legacy production routes; the static portfolio does not use them.

## Contact

Netlify function source is unchanged from main. The frontend keeps the JSON endpoint, required `name`/`email`/`project`, optional business value, `consultation` form name, Netlify discovery markup and honeypot. Backend tests cover success, form encoding, honeypot, required/malformed inputs, wrong method, missing configuration and provider rejection. Browser tests confirm validation, correct payload, success reset, failure feedback and retention of typed content. All provider/contact calls mocked; no real request or email sent. Live provider credentials/delivery were deliberately not tested.

## SEO / analytics / Netlify

- Original homepage title and description are unchanged. Canonical `https://jdsstudio.ca/`, Open Graph/Twitter metadata, social image, locale and JSON-LD retained. Index diff against main changes only theme color from the approved redesign.
- Legal-page titles/descriptions/canonicals work. Robots and sitemap unchanged, with homepage/privacy/EULA entries and referenced assets present.
- No analytics tracker was found in either original main source or the redesign. None was removed. Host-injected analytics cannot be verified locally and were not modified.
- Vite outputs `dist/index.html` and local assets. Netlify functions directory remains `netlify/functions`; SPA fallback and existing redirects are unchanged. Package/lockfile unchanged. These are compatible with the existing Vite/Netlify architecture. Dashboard build/publish settings and hosted function packaging were not independently verified; see prerequisites above.

## Collision / security / privacy

- Git index and filesystem/build have no case-insensitive filename collisions. Both old Untitled paths are absent from the index; their identical contents were consolidated into `public/assets/fridge-ordering-screenshot.png`. Its blob remains `b44732fc386e8f6a482197215012dff97f4498db`, matching both originals. No broken references.
- Built text scan found no private-key blocks, credential token patterns, local filesystem paths, non-production URLs or private/admin links. Build includes no environment files, review docs/scripts/artifacts or source maps. This is a scoped release audit, not a guarantee against every possible security issue.
- No private client records or staff/admin screenshots are presented. Approved Tee & Co screenshot is labelled sample catalogue. Wellington development image is absent from public assets and `dist`; development projects have no public detailed data/case studies.

Evidence: `artifacts/redesign/browser-results.json`, `final-static-audit.json`, `final-accessibility-seo-audit.json`, and desktop/mobile screenshots in the same directory.

**Nothing was pushed, merged or deployed. Main, production, DNS, domains, Netlify settings and environment configuration were not changed.**
