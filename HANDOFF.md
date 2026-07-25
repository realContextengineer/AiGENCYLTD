# AiGENCY website handoff

Date: 2026-07-25
Workspace: `/Users/aigencyltd/Desktop/software builds/main website`
Repository: `https://github.com/realContextengineer/aigency-website.git`
Current local branch: `main`

## Immediate instruction

Do not continue styling from the current green implementation without first correcting it.

The current green gateway treatment is too saturated and too flat for the intended design. The user does **not** want a large bright green tile. They want the visual language shown in the supplied reference images:

- deep midnight navy as the base;
- translucent, smoked-glass tiles;
- muted digital brass / copper cog-like accents;
- soft, diffused emerald green used as atmospheric light and occasional detail;
- blue-grey navy surfaces;
- subtle borders, bevels, glow, blur and depth;
- no loud neon green, no flat green blocks, and no generic cyan UI treatment.

The reference is closer to “translucent digital brass machinery” or “smoked glass over a digital mechanical system” than a conventional green gradient card.

The screenshot at `/Users/aigencyltd/Desktop/Screenshot 2026-07-25 at 18.23.55.png` is especially important: it shows a dark navy tile with a faint green atmospheric glow rising from the lower-right. The content remains readable and restrained. Recreate that relationship, not the current solid green-heavy card.

## User’s design direction

The user strongly likes the original hero video in the assets folder: its muted navy, blue, green and brass/copper colours, translucent surfaces, softly lit edges and cog imagery. They want the website tiles to feel related to that video.

The desired hierarchy is:

1. Midnight navy / near-black blue: page background and large surfaces.
2. Muted brass / copper: brand, structural borders, cog language and primary CTAs.
3. Translucent emerald: selective glow, status, diagnostic and interaction accents.
4. Blue-grey: secondary text and cool surface variation.

The user has not asked for red. Avoid adding red unless they explicitly request it.

Do not flatten the design into a generic SaaS dashboard. Keep the bento/tile layout, depth, atmosphere and mechanical identity.

## Current logo

The current header logo is the exact supplied image:

`assets/video : logo etc/d5ccc9d2-23a8-48d6-8a06-eba3beb6a4c4.png`

It is a transparent RGBA PNG, 1536 x 1024. It is referenced by the visible header in all nine HTML pages. The current logo CSS is:

```css
.logo-img {
  width: 250px;
  height: auto;
  object-fit: contain;
  transform: translateY(4px);
}
```

The large transparent canvas means the CSS image box is tall (approximately 250 x 167px). The user accepted the larger appearance for now. Do not recolour, brighten, filter or replace this logo without asking.

Other logo candidates remain in the assets folder. Do not delete them:

- `AiGENCY (2)-Photoroom.png`
- `AiGENCY Roman transparent.png`
- `FCpHc-removebg-preview.png`
- `UUDaH-removebg-preview.png`
- `new logo !!!.png`
- `logo.png`

## Current video

The homepage hero currently uses:

`assets/video : logo etc/new vid.mp4`

In `index.html` it is the right-hand hero video in the two-column hero section. Do not swap it back to `AI VID.mp4` or another candidate unless explicitly asked.

Other videos are present for reference:

- `AI VID.mp4`
- `AiGency Hermes.mp4`
- `My Movie.mp4`

## Current site structure

Static multi-page site using shared CSS and JavaScript:

- `index.html` — homepage and hero
- `about.html`
- `creative-design.html`
- `services.html`
- `contact.html`
- `chatgpt.html`
- `blog.html`
- `blog-chatgpt-business.html`
- `ai-health-check.html`
- `css/style.css` — shared design system and layout
- `js/main.js` — shared interactions/navigation

The site is currently previewed locally on port 8794 with:

```bash
python3 -m http.server 8794
```

Preview URL:

`http://127.0.0.1:8794/index.html`

## Current CSS state that needs attention

`css/style.css` currently contains the recent attempted palette update:

```css
--color-obsidian: #0B0F21;
--color-video-green: #10B981;
--color-video-green-light: #8fc7a8;
--gradient-hermes: linear-gradient(135deg, #101221 0%, #0B1F12 58%, #10B981 100%);
--gradient-outbound: linear-gradient(135deg, #101221 0%, #0B1F12 58%, #10B981 100%);
```

There is also an appended `VIDEO PALETTE ACCENTS` block that overrides the outbound gateway, quiz controls, pricing card, footer and form accents with emerald.

That is the part the user has rejected visually. It should be revised toward translucent glass and atmospheric lighting. Preserve the green token as a possible subtle accent, but remove the impression of an emerald-filled card.

Recommended direction for the next pass:

- use dark navy / smoked-glass backgrounds with low alpha;
- use a faint emerald radial glow in the lower-right of selected tiles;
- use muted brass borders or thin brass highlights around cog/structure-related tiles;
- use emerald only for small icons, status lines, hover edge light and selected diagnostic states;
- use `backdrop-filter: blur(...)`, inset highlights and very soft shadows;
- keep text contrast high; the supplied screenshot’s dark text is too low-contrast to copy literally;
- keep primary health-check CTA brass, not green;
- keep Hermes outbound CTA dark navy with a restrained brass or pale green label, not a bright green panel.

## Existing design decisions to preserve

- Logo is top-left and aligned with the navigation.
- Navigation includes: Home, Design, About, Neuro-Inclusive Training, Hermes Agents.
- Hermes Agents is an outbound CTA.
- Hero is text on the left and video on the right.
- The site uses a bento/tile layout.
- Primary CTA is the free AI health check.
- Bronze/brass has a subtle left-to-right gradient.
- The user values the original video’s cog and translucent-material feel.
- SEO content and local Bournemouth positioning matter; do not remove page copy, metadata, headings or internal links while styling.

## Git state and safety

There are substantial uncommitted changes from the ongoing website build. Do not reset, clean, commit or push automatically.

Before editing:

```bash
git status --short
git diff -- css/style.css index.html
```

The user asked for a handoff, not a commit or push. Leave the current worktree intact.

## Next chat’s first task

1. Read this file.
2. Inspect `css/style.css` and the supplied reference screenshot.
3. Revert or replace the saturated green tile treatment.
4. Implement one restrained glass/brass/emerald tile treatment.
5. Preview the homepage at port 8794.
6. Check desktop and mobile before making further broad changes.
7. Do not change the logo or video while doing the palette repair.

The acceptance test is visual: the site should look like the original video’s muted, translucent navy/brass/emerald mechanical world, not like a page containing a bright green gradient card.

