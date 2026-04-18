# costoftrying: Cursor / layout requirements

Use this when editing `index.html`, `styles.css`, or copy on the minimal landing page.

## Punctuation

- Do **not** use Unicode em dashes (U+2014) anywhere in site copy, meta text, UI strings, or comments. Use commas, periods, colons, or ASCII hyphens instead.

## Typography tiers (do not mix casually)

| Role | Where it appears | CSS | Rules |
|------|------------------|-----|--------|
| **Hero headline** | `building communities…` under site chrome | `.minimal-headline` | Large `clamp`, **#111**, **700**, tight **line-height ~1.05**, negative **letter-spacing**. |
| **Hero subhead** | Gray intro under headline (e.g. “the best ideas…”) | `.minimal-subhead` | **Same as body subtext** (see below). Must match section paragraphs visually. |
| **Section title** | “what we're building”, “what's next.” | `.intro.minimal-block > .minimal-block-title` | Smaller than hero headline, still **#111** / **700**, negative tracking, **no** uppercase. |
| **Eyebrow label** | “we've partnered with” above logos | `.minimal-eyebrow` | Small caps: **11px**, wide **letter-spacing**, muted **rgba(17,17,17,0.45)**. Not for long prose. |
| **Body / subtext** | Retreat copy, building + next paragraphs, footer blurb | `.intro p` **and** `.minimal-subhead` (shared rule) | **17px**, **line-height 1.62**, **color `rgba(17,17,17,0.6)`**, **max-width 38em**, centered with `margin-inline: auto`. |
| **Section block title** vs **body** | Inside `.intro.minimal-block` | Title uses `.minimal-block-title` rule; following `<p>` use `.intro p` | Title is black + bold; paragraphs stay on the **body** tier only. |

## Hard requirement: one body tier

- **Hero subhead** (`.minimal-subhead`) and **every** main-column paragraph (`.intro p`) must use the **same** font size, line height, weight, color, and max measure.
- Do **not** give `.minimal-subhead` a different gray, clamp size, or line-height than `.intro p` unless you are intentionally introducing a *new* tier and you update this file.

## Headers vs subheaders (wording)

- **Header** usually means the **hero headline** (`.minimal-header` + `.minimal-headline`).
- **Subhead / subtext** means supporting prose in the hero (`.minimal-subhead`). It is **not** a second headline; it uses **body** styling.
- **Section titles** are the mid-page headings (“what we're building”, “what's next.”); they are visually **secondary headlines** (black, bold, smaller than hero).

## Partners strip

- Only the partners line uses `.minimal-eyebrow` (small, tracked, muted). Do not use that class for section titles.

## Vertical rhythm (spacing)

- Main column uses `.minimal` with **`--minimal-rhythm`** (32px) for gaps between major blocks: retreat stack, partners, `<hr>`, intro sections, footer.
- Tighter stacks (headline to subhead, twin CTAs) use **`--minimal-rhythm-tight`** (24px).
- Do not add extra `margin-bottom` on `.minimal-header`; the parent grid gap supplies separation from the next section.
- Horizontal rules (`.minimal-rule`) sit in the grid with **no** extra vertical margin so spacing matches other rows.

## When adding copy

1. Hero: headline + optional subhead only in `.minimal-header`.
2. Narrative blocks: `<section class="intro …">` + `<p>` for prose so `.intro p` styles apply.
3. New headings in content blocks: use `.minimal-block-title` (inside `.intro.minimal-block`) for black sub-headlines, not `.minimal-eyebrow`.

## Files

- **Page:** `index.html`
- **Styles:** `styles.css` (search for `.minimal-headline`, `.minimal-subhead`, `.intro p`, `.minimal-block-title`, `.minimal-eyebrow`)

After typography or spacing changes, skim the page at desktop and ~375px width to confirm hero subhead and first section paragraph still match, and that section gaps feel even.
