---
name: slides
description: Use when the user asks for a deck, presentation, slides or a results review in the house style (bright Geist, section pills, page numbers) or invokes /slides — plans the content audience-first before building.
---

# Slides

One self-contained HTML deck in the house style: bright, Geist, vertical scroll-snap, a bottom bar with **section pills** that highlight where the viewer is, **page numbers**, and a progress line. `template.html` in this folder *is* the design; copy it and replace the content. The content is planned before any slide exists — see `references/engaging-content.md`.

## Origin

Based on the ECC (Everything Claude Code) `frontend-slides` skill — its viewport-fit base CSS, density limits, `scripts/extract-pptx.py` and `scripts/export-pdf.sh` carry over. The original was removed from this repo; before changing anything structural here, clone it for reference: `git show ab57d27:plugins/frontend-slides/skills/frontend-slides/SKILL.md` in this repo's history (the whole folder lives under that path in commit `ab57d27`).

## Workflow

1. **Collect the material.** Read the docs, data, run outputs or notes the deck is about. Pull real numbers and real frames — ffmpeg for video frames/clips, contact sheets for "which shot" questions. Never invent a figure.
2. **Write the plan** to `<topic-dir>/presentation/<name>_plan.md` from `plan-template.md`: audience map, one-sentence intention, 1–3 main points, hook, sections as pill labels with **headings only** — per slide an action title, its purpose (hook / state / demonstrate / restate / objection / ask / close), its device and its evidence source — a variety check and a cut list. Ask the user for audience facts you don't have; don't guess. **Show the plan and get it agreed before building.** A slide that has no purpose line in the plan does not get built.
3. **Copy `template.html`** to `<topic-dir>/presentation/<name>_src.html` and build exactly the slides in the plan. Delete unused component CSS. Reference media as `src="{{file.jpg}}"` / `data-src="{{clip.mp4}}"` and put the files in `<topic-dir>/presentation/assets/`.
4. **Build:** `python scripts/build.py <name>_src.html assets/ <name>.html` — inlines every asset as base64 into one file. Target ≤ 5 MB: recompress with ffmpeg (`-crf 30`, `scale=640:-2`, clips ≤ 10 s, `-q:v 4` jpegs).
5. **Check:** `node scripts/validate.js <name>.html shots/` — exits 1 on any overflow. Look at the screenshots of every slide at 1920×1080 and 375×667 before handing over. Then re-read the plan against the deck: every slide's purpose still true, no slide added without one.
6. **Deliver:** path, slide count, section list, and what needs a human decision (figures you guessed, images you picked, open questions from the plan). Don't commit; the user decides whether media belongs in git.

## Content rules (short form — the reasoning is in `references/engaging-content.md`)

- **Audience before content.** The audience map decides vocabulary, depth, opener and how much evidence each point needs.
- **One intention, ≤ 3 main points**, each one sentence. Every section serves one of them.
- **Hook, not agenda.** Slide 1–2 opens with curiosity, a problem, a room reference or a grabber. The pills are the agenda.
- **Every slide has one job**, named in the plan. Purposes: hook, state, demonstrate, restate, objection, ask, close.
- **Less text.** Action title + one visual + a caption; the reasoning is spoken. The room should watch the speaker at least half the time.
- **Vary the device** across consecutive slides; never three of a kind in a row.
- **Name the objection** before the room does; **ask** with the question box; **close** by restating the main points and calling back to the hook, a minute early.

## Design rules

- Title slide: eyebrow top-left, **byline top-right** (`<b>Moritz Rosenthal</b>` + today's date, e.g. `14 September 2026`), title ≤ 3 words per line, one-sentence subtitle.
- Every content slide: `.head` = eyebrow (section · step) + **action title** (a sentence that states the point) + at most two lines of context. Then one visual element.
- Density limits: 3–6 cards, ≤ 5 table rows, ≤ 6 stepper steps, ≤ 4 bullets. Over → split the slide.
- Black on off-white. The one accent (`--accent`) marks the thing being discussed. `ok`/`bad` tags for verdicts. No gradients, no illustrations.
- Optional elements carry `.hide-mid` / `.hide-short` / `.hide-sm` / `.hide-xs` so short or narrow viewports drop them instead of overflowing.
- Keep the template's base CSS, bottom bar and `Presentation` class untouched. Pills come from `data-section`; consecutive slides sharing one label form one pill. Backup slides for Q&A get `data-section="Backup"` after the close.

## Components in `template.html`

| Slide purpose | Component |
|---|---|
| Hook / state | `.head` + one image, a `.specs` trio, or a `.stats` trio |
| Demonstrate | `table.data` (`.meter` bars, one `tr.pick`), `.bars`, `.timeline`, `figure > img.media`, `.two-up`, `.compare` before → after, `video.lazy-video` + `poster` |
| Process | `.steps` stepper (`.ai` = filled dot for model calls) + `.legend` |
| Objection / options | `.ideas` pro/con cards, `.card` |
| Ask | `.question` + `.options` |
| Close | `.todo` numbered cards |

## Scripts

- `scripts/build.py` — asset inliner (step 4).
- `scripts/validate.js` — Playwright viewport + navigation check (step 5). Needs `npm i playwright && npx playwright install chromium`.
- `scripts/extract-pptx.py` — `.pptx` → JSON text/images/notes (`pip install python-pptx`); treat the JSON as the material in step 1.
- `scripts/export-pdf.sh` — deck → PDF via Playwright screenshots, for mail attachments.

## Common mistakes

- Building slides before the plan is agreed → a deck that has to be restructured. Plan first, headings only.
- Titles that name a topic ("Cut detection") instead of stating the point ("Hard cuts are caught; dissolves are not").
- An agenda slide, or a spec-sheet slide before the hook → the room checks out before the hook lands.
- A wall of text on one slide → split; the validator flags the overflow anyway.
- Scroll snap on `html` only: with `overflow-x: hidden` on both, `body` becomes the scroller. The template sets snap on both; keep it.
- `preload="auto"` on videos inflates the file and stutters. Use `preload="none"` + `poster` + `data-src`.
- Claims the source contradicts. Quote the file the number comes from in a figcaption.
