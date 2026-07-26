# AiGENCY Website Handoff

Date: 25 July 2026
Repository: https://github.com/realContextengineer/aigency-website
Local project: `/Users/aigencyltd/Desktop/software builds/main website`

## Current position

The site is a static HTML/CSS/JavaScript website for AiGENCY Ltd. The current public offer is:

- One-to-one, neuro-friendly AI support on Zoom
- Practical AI integration for sole traders and small businesses
- AI safety and responsible-use support for charities and community organisations
- Technical design and development for websites, interfaces, workflows and AI-agent systems
- Hermes Agents as the separate advanced agent platform

The homepage animation remains on the homepage only. Do not add global background animation without an explicit decision.

## Navigation

The shared primary navigation is normalised by `js/main.js`:

1. Home
2. Services
3. Design
4. About
5. Responsible AI
6. Training
7. Hermes Agents (external link)

Blog and Contact remain available in the footer. Hermes Agents links to `https://hermes-agents.com`.

## Main pages

- `index.html` — homepage, hero video, AI Health Check, service cards, testimonials, FAQ and contact routes.
- `services.html` — audits, workflow automation, custom agents, one-to-one support and charity/community support.
- `creative-design.html` — web development, mobile interfaces, design systems, hosting/VPS readiness, agent interfaces, integrations and handover.
- `about.html` — experience, psychology/HCI background, Dorset community programme and AI Act & Ethics Audits.
- `ai-transparency.html` — GDPR-aware AI, AI Act transparency, human oversight and practical data boundaries.
- `training.html` — one-to-one AI and ChatGPT support, charity AI safety, small-business integration, agent concepts and persistent memory.
- `how-it-works.html` — the support and engagement process.
- `ai-health-check.html` — standalone ten-question AI readiness check.
- `chatgpt.html` — plain-English ChatGPT guide.
- `blog.html` — blog index with staggered 2026 posts and earlier archive.
- `contact.html` — contact route with phone `07460 685448` and email `sync@aigency.ltd`.
- `legal.html` — privacy and website information.

## Blog content

The blog includes the migrated evergreen posts and the four-week strategy series:

- AI Act and chatbot transparency
- GDPR-aware AI workflows
- AI content and search quality
- AI agents and website readiness
- Small-business AI
- Human oversight
- Ethical agents

Article schemas include authorship, dates and canonical `mainEntityOfPage` URLs.

## SEO and crawler readiness

Completed:

- Unique page titles and meta descriptions across the HTML pages
- Canonical URLs on core pages
- LocalBusiness schema with Bournemouth/Dorset address, coordinates, phone, email and GitHub `sameAs`
- WebSite, AboutPage, WebPage, CollectionPage and Article JSON-LD
- `sitemap.xml` containing the public pages
- `robots.txt` linking to the sitemap
- GPTBot, ChatGPT-User, ClaudeBot and PerplexityBot allowed
- Static pre-rendered HTML for crawler access
- Semantic `main`, `section`, `article`, `nav`, `header` and `footer` structures
- Accessible labels and native controls for the AI Health Check

Checks performed:

- JSON-LD parsed successfully across all HTML pages
- No `git diff --check` errors at the last validation point
- Sitemap and robots configuration present

SEO still requiring external work:

- Verify the production domain is serving the latest GitHub version
- Submit and inspect the site in Google Search Console and Bing Webmaster Tools
- Maintain Google Business Profile activity
- Add genuine case studies, project links and local authority/backlinks
- Test real production Core Web Vitals

## Git status and publishing

The last pushed commit is:

`3890b34 Strengthen technical SEO and structured data`

Remote:

`https://github.com/realContextengineer/aigency-website.git`

There are currently three local, unpushed files changed after that commit:

- `index.html` — homepage hero/service-grid refinement and the quick-start card that fills the empty four-column space beside the Health Check.
- `creative-design.html` — expanded technical Design page and seven inline SVG service icons.
- `css/style.css` — homepage service-card rules and Design-page compact card/icon rules.

These local changes have not been pushed. Review them in the local preview before committing.

## Important design decisions

- Preserve the bento-card system. It is being used for scanability and neuro-friendly content chunking.
- Do not flatten the site into a conventional long page.
- Keep the homepage animation on the homepage only.
- Do not add fake client work. The Design page’s sample portfolio is explicitly labelled placeholder content until genuine project links and screenshots are supplied.
- Do not imply large corporate training, office presentations or on-site team programmes. The current offer is one-to-one Zoom support, charities and small-business integration.
- Keep Hermes Agents as the advanced external platform rather than merging its product identity into the approachable AiGENCY front door.

## Recommended next steps

1. Review the current local homepage and Design page in the browser.
2. Decide whether the latest local homepage and Design-page changes should be committed and pushed.
3. Replace the Design page sample concepts with six to twelve genuine projects, screenshots or live links.
4. Verify the production domain, then submit the sitemap to search tools.
5. Add real case studies and local proof before adding more generic copy.

## Local preview

The current preview has been served at:

`http://127.0.0.1:8795/index.html`

Other useful routes include `/creative-design.html`, `/training.html`, `/blog.html`, `/ai-transparency.html` and `/contact.html`.
