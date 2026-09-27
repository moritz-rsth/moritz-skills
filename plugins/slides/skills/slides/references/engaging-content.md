# Engaging content: what earns a place on a slide

Derived from the `public-speaking-coach` skill (audience-first framework, Romancing the Room). Slides are a visual aid for a spoken talk: the speaker carries the words, the slide carries the one thing the room should look at. Every rule below follows from that.

## 1. Audience before content

Map the audience before writing a heading. Each answer changes the deck:

| Ask | Answer shapes |
|---|---|
| Who is in the room? (role, seniority, technical depth) | Vocabulary, how much method vs. result, whether code/paths appear at all |
| Attitude toward the topic — curious, sceptical, indifferent, already convinced? | Opener type (see §3), whether objections get named early, how much evidence per point |
| Attitude toward the speaker — trusts, doesn't know, doubts? | How much ethos beat (what was measured, what was tried) before asking anything of them |
| What do they already know? | What to skip; a slide that re-explains known context loses the room in the first minute |
| What must they think, feel or **decide** afterward? | The **intention** — one sentence. The deck's north star; anything not serving it gets cut |
| Time slot, room, who speaks before/after | Slide count (≈ 1–1.5 min per slide), whether a question box can actually be discussed live |

This map is round 1 of the interview in `SKILL.md` — always asked, with your recommended answers from the material, never guessed. It goes into the plan file only after the user has answered.

## 2. One intention, 1–3 main points

- The intention is what the audience does differently afterward ("decides between A and B", "approves the next batch", "understands why X failed").
- At most three main points, each sayable as one short sentence. Every section serves one of them. Can't state a point in one sentence → the thinking isn't done; go back to the intention.
- Each slide still has a claim, but the claim is **spoken**, not shown. The plan holds it as the slide's spoken line ("Hard cuts are all caught; dissolves are not"); the canvas shows the 1–3-word heading that points at it ("Dissolves missed"). A heading that names only a topic with no point ("Cut detection") is still too vague — compress the claim, don't drop it.

## 3. Open with a hook, not an agenda

Never open with "today I'll talk about". Pick one, matched to the audience map:

- **Curiosity** — an image or question the room wants resolved: three empty safe-zone frames, "which of these fits?"
- **Problem to solve** — make them feel the pain before the method: the same frame passing one zone and failing the other.
- **Room reference** — the decision they are here for, the thing that happened last week, the speaker before.
- **Grabber** — one surprising number or artefact ("142 cuts, 105 too short to use").

The hook slide also answers "why listen, now": what the audience gets by the end. The agenda (the pills) is always visible in the bottom bar, so no agenda slide.

## 4. Every slide has one job — mark it in the plan

For each slide, the plan names its **purpose** and its **device**. Purposes:

| Purpose | Slide shape | Rule |
|---|---|---|
| **Hook** | image / question / one number | ≤ 10 words of text |
| **State** a main point | 1–3-word heading + one visual | the heading compresses the claim; the speaker says it in full |
| **Demonstrate** it | evidence: table, bars, before/after, contact sheet | real data, source in the figcaption; logos (numbers), ethos (what was measured), pathos (the frame the viewer sees) |
| **Restate / bridge** | one line, or a stat trio | slightly different words than the first statement |
| **Objection** | card naming the doubt, then the answer | say it before they do |
| **Ask** | question box with lettered options | one decision, options mutually exclusive, the trade-offs on the next slide |
| **Callback close** | to-do grid + echo of the hook | restate the 1–3 points, end before expected |

A slide that fits none of these is cut or merged.

## 5. Less text, more room for the speaker

- The audience should watch the speaker at least half the time. A slide the room reads is a slide the speaker competes with. A 1–3-word heading + one visual; the reasoning is spoken.
- No subheading by default. Every extra line under the heading is read instead of listened to; it earns its place only when the slide is unreadable without it, and the user agrees to it in the interview.
- The user checks off every heading before the build (round 4). Headings written alone drift into sentences; headings someone else has to approve stay short.
- Tell them where to look: the accent colour marks the one element being discussed.
- A slide's job done → next slide. No stale content while the talk moves on; split rather than stack.
- Don't read the slide aloud; if the speaker notes would repeat the slide, the slide has too much text.

## 6. Variety — the anti-monotony rule

Alternate device types across consecutive slides: visual → number → question → story. Three tables in a row, or three image slides in a row, fatigues the room. Vary the requested reaction too: a slide meant to surprise, then one meant to make them think, then one that asks.

## 7. Stories on slides: ABC and the 3 M's

A worked example (one shot followed through the pipeline, one failed run) is the deck's story. It must be **Apt** (this audience cares), **Brief** (≤ 3 slides), **Chronological** (in the order it happened), and at least one of Meaningful, Memorable, Moving. Don't start a second example before the first is resolved.

## 8. Close where attention peaks

The last slide is the highest-attention moment. It restates the main points as the decisions to make, calls back to the hook (the same frames, now with the verdicts), and ends a minute early. "Thanks. Questions?" comes *after* the restatement, never instead of it.

## 9. Q&A prep

Keep two or three backup slides after the closing (extra data, the failed cases) with `data-section="Backup"` — they get their own pill at the end and don't count against the talk. Plant one question if none come: "the thing I get asked most is…".
