---
name: slides
description: Use when the user asks for a deck, presentation, slides or a results review in the house style (bright Geist, section pills, page numbers) or invokes /slides. Always starts with a mandatory interview of the user (audience, main points, hook, slide headings) before any plan or HTML exists, and keeps on-slide text to a minimum.
---

# Slides

One self-contained HTML deck in the house style: bright, Geist, vertical scroll-snap, a bottom bar with **section pills** that highlight where the viewer is, **page numbers**, and a progress line. `template.html` in this folder *is* the design; copy it and replace the content. The content is agreed with the user in an interview before any slide exists — the reasoning behind it is in `references/engaging-content.md`.

## Origin

Based on the ECC (Everything Claude Code) `frontend-slides` skill — its viewport-fit base CSS, density limits, `scripts/extract-pptx.py` and `scripts/export-pdf.sh` carry over. The original was removed from this repo; before changing anything structural here, clone it for reference: `git show ab57d27:plugins/frontend-slides/skills/frontend-slides/SKILL.md` in this repo's history (the whole folder lives under that path in commit `ab57d27`).

<HARD-GATE>
Do not write the plan file, copy `template.html`, or build any slide until the user has answered rounds 1 and 2 and said yes to the heading overview (round 3) **in chat**. The plan file is written only after that yes — it records decisions already made, it is never the thing the user is asked to approve. This holds for every deck, however much material or context the user supplied. A rich brief shortens the interview — your recommended answers get better — it never removes it.

A reply approves the round actually shown. Agreeing to the main points does not approve headings that haven't been shown yet. Reading the material is allowed before and during the interview; writing files is not.
</HARD-GATE>

## Why the interview is mandatory

A deck is a set of decisions only the speaker can make: who is in the room, what they should walk out with, what to leave out. Guessed, those decisions produce a deck that looks finished and says the wrong thing — and every slide built on a wrong guess is rework. The second failure is text: headings drafted alone drift into sentences and subheadings. The user signing off the headings is what keeps the canvas short.

**Facts are your job, decisions are the user's.** Read the material first (step 1 below) and never ask for anything you can look up: numbers, file contents, what a run produced. Ask only what the user alone knows or decides.

## The interview

Work in **rounds**. Each round asks only the questions whose prerequisites are already settled; a question that depends on an answer still open waits for the next round. Number every question and give your recommended answer, drawn from the material, so the user can reply "yes" or correct one line. Then **stop and wait** — never ask a round and continue in the same message.

Format each question like so:

```
❓ **Q1 – <title>**: <question, with choices if useful>
➡️ <your recommendation>
```

Keep every round short. The user reads it in a terminal between other work; a round that needs scrolling gets skimmed and waved through, which is the same as not asking.

### Round 1 — Audience (mandatory, always asked)

Who is in the room (role, depth, size) · their attitude to the topic and to the speaker · what they already know · the slot (minutes, live or async, Q&A) · the **intention**: what they think, feel or decide afterward, in one sentence.

### Round 2 — Main points and hook (mandatory, always asked)

Present it reduced — no paragraphs:

```
Intention: <one sentence>
Main points:
1. <short claim>
2. <short claim>
3. <short claim>
Hook: <half a sentence — type + the artefact>
```

1–3 points, each a short claim. The hook in half a sentence. Ask for confirmation or edits.

### Round 3 — Heading overview (the gate for the plan)

Before any file exists, show the whole deck as headings in chat — nothing else:

```
1. <Pill>        <Heading> · <Heading>
2. <Pill>        <Heading> · <Heading> · <Heading>
3. <Pill>        <Heading>
Backup           <Heading>
```

Each heading **1–3 words** (rules below). Under the list, at most a few lines: any heading over three words or any subheading with its reason, and any cut or open decision the user must make. No purposes, devices, sources or spoken lines here — those go into the plan file. The user ticks it off or edits lines; repeat the overview after edits until they say yes.

### After the yes — write, self-review, hand over

1. Write the plan file from `plan-template.md`, filling in what the interview decided plus the details you own: per slide the spoken line, purpose, device and source.
2. **Self-review** the file with fresh eyes and fix inline: headings exactly as agreed and ≤ 3 words · every slide has a purpose · no subheading or text the user didn't agree to · variety check passes · no placeholders or contradictions.
3. Report in one or two lines: the path, that it's self-reviewed, and anything you fixed that changes what the user agreed. Don't paste the plan and don't ask the user to review the file — they already approved its content. They say go (or dispatch the build) when ready.

## Red flags

| Thought | Reality |
|---|---|
| "The user gave lots of context, so I can skip the interview" | Context makes the recommendations better. Rounds 1 and 2 are still asked. |
| "I'll write the plan and ask if it's okay" | A finished file gets a quick "looks good", not a decision. Show the heading overview in chat, get the yes, then write. |
| "I'll show the plan file so they can review it" | They approved the headings already. Self-review the file and report in one line. |
| "I'll ask round 1 and draft the plan while they answer" | The gate is the answer. Ask, then stop. |
| "They approved the main points, so the headings are approved" | Each round approves only what it showed. |
| "This heading needs a full sentence to be clear" | The sentence is what the speaker says. The heading is 1–3 words. |
| "A subheading will help here" | Only with a reason the user agreed to in round 3. |
| "I'll add a caption so the slide stands alone" | The slide supports a spoken talk; the speaker carries the words. |
| "It's a small deck, the interview is overkill" | A three-slide deck still has an audience and an intention. Short rounds, same gate. |

## Workflow

Create one task per step and do them in order.

1. **Collect the material.** Read the docs, data, run outputs or notes the deck is about. Pull real numbers and real frames — ffmpeg for video frames/clips, contact sheets for "which shot" questions. Never invent a figure.
2. **Interview** — rounds 1–3 above, one round per message, stop after each. Nothing is written to disk yet.
3. **Write the plan** to `<topic-dir>/presentation/<name>_plan.md` from `plan-template.md` only after the heading overview got its yes; self-review it and report in one line (see "After the yes"). A slide without an agreed heading and purpose does not get built.
4. **Copy `template.html`** to `<topic-dir>/presentation/<name>_src.html` and build exactly the slides in the plan, with exactly the agreed headings. Delete unused component CSS. Reference media as `src="{{file.jpg}}"` / `data-src="{{clip.mp4}}"` and put the files in `<topic-dir>/presentation/assets/`. If a slide turns out to need visible text beyond what was agreed, keep it within the budget below and list it at delivery.
5. **Build:** `python scripts/build.py <name>_src.html assets/ <name>.html` — inlines every asset as base64 into one file. Target ≤ 5 MB: recompress with ffmpeg (`-crf 30`, `scale=640:-2`, clips ≤ 10 s, `-q:v 4` jpegs).
6. **Check:** `node scripts/validate.js <name>.html shots/` — exits 1 on any overflow. Look at the screenshots of every slide at 1920×1080 and 375×667 before handing over. Then re-read the plan against the deck: every heading as agreed, every slide within the text budget, no slide added without a purpose.
7. **Deliver:** path, slide count, section list, and what needs a human decision (figures you guessed, images you picked, text added during the build). Don't commit; the user decides whether media belongs in git.

## Text on the canvas

The slide carries the one thing the room should look at; the speaker carries the words. Every word on a slide competes with the speaker for attention, so the default answer to "should this be on the slide?" is no.

- **Headings: 1–3 words. Hard limit.** A heading names the point in the fewest words: "Dissolves missed", "Next batch", "42 % faster". The full sentence behind it lives in the plan as the spoken line and is said out loud, not shown. A fourth word needs a reason stated in round 3 and accepted by the user.
- **No subheading by default.** The `.head` is eyebrow + heading. A context line under the heading is allowed only when the slide is unreadable without it (a unit, a scope, a definition) — the reason is named in round 3 and agreed. "It adds context" is not a reason.
- **Word budget: ≤ 15 visible words per content slide** beyond the heading, not counting numbers, axis labels and table cells. Hook slides: ≤ 10 words in total. Title slide: title ≤ 3 words per line, subtitle optional and ≤ 8 words.
- **Labels, not sentences.** Card titles, step names, options and tags are 1–3 word labels. A card gets a one-line note only if the label alone is ambiguous.
- **Over budget → split the slide or move the words to the spoken line.** Never shrink the font to fit.

## Content rules (short form — the reasoning is in `references/engaging-content.md`)

- **Audience before content.** The audience map decides vocabulary, depth, opener and how much evidence each point needs.
- **One intention, ≤ 3 main points**, each one short claim. Every section serves one of them.
- **Hook, not agenda.** Slide 1–2 opens with curiosity, a problem, a room reference or a grabber. The pills are the agenda.
- **Every slide has one job**, named in the plan. Purposes: hook, state, demonstrate, restate, objection, ask, close.
- **Vary the device** across consecutive slides; never three of a kind in a row.
- **Name the objection** before the room does; **ask** with the question box; **close** by restating the main points and calling back to the hook, a minute early.

## Design rules

- Title slide: eyebrow top-left, **byline top-right** (`<b>Moritz Rosenthal</b>` + today's date, e.g. `14 September 2026`), title ≤ 3 words per line, subtitle optional.
- Every content slide: `.head` = eyebrow (section · step) + **heading** (1–3 words). Then one visual element.
- Density limits: 3–6 cards, ≤ 5 table rows, ≤ 6 stepper steps, ≤ 4 bullets of ≤ 5 words. Over → split the slide.
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

- `scripts/build.py` — asset inliner (step 5).
- `scripts/validate.js` — Playwright viewport + navigation check (step 6). Needs `npm i playwright && npx playwright install chromium`.
- `scripts/extract-pptx.py` — `.pptx` → JSON text/images/notes (`pip install python-pptx`); treat the JSON as the material in step 1.
- `scripts/export-pdf.sh` — deck → PDF via Playwright screenshots, for mail attachments.

## Common mistakes

- Writing the plan or any slide before rounds 1 and 2 are answered → a deck built on guesses.
- Writing the plan file and then asking "is this okay?" → show the heading overview in chat first; the file comes after the yes.
- Sentence headings ("Hard cuts are caught; dissolves are not") → say that sentence; show "Dissolves missed".
- A subheading on every slide, or captions that repeat what the speaker says → cut them.
- An agenda slide, or a spec-sheet slide before the hook → the room checks out before the hook lands.
- A wall of text on one slide → split; the validator flags the overflow anyway.
- Scroll snap on `html` only: with `overflow-x: hidden` on both, `body` becomes the scroller. The template sets snap on both; keep it.
- `preload="auto"` on videos inflates the file and stutters. Use `preload="none"` + `poster` + `data-src`.
- Claims the source contradicts. Keep the source of every number in the plan; put it on the slide only as a short figcaption when the room needs it.
