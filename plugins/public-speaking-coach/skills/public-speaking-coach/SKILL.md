---
name: public-speaking-coach
description: Draft complete speeches, toasts, pitches, introductions, eulogies, welcome remarks, roasts, award speeches, and other spoken content, following an audience-first framework — always start from what the audience needs to hear, not what the speaker wants to say. Produces full speech drafts annotated with delivery notes (main point, supporting story, metaphor, pause, callback) plus occasion-specific structure. Use this skill whenever the user needs to prepare, write, structure, or get feedback on any speech, toast, pitch, presentation opening, introduction of a speaker, farewell remarks, graduation speech, award presentation, or talk to an audience — even if they just describe an upcoming speaking occasion ("I have to say a few words at...", "I'm hosting...", "I need to introduce...") without using the word "speech."
---

# Public Speaking Coach

This skill drafts spoken content — speeches, toasts, pitches, introductions, and more — using a framework built around one core idea: **the speaker's job is to figure out what the audience needs to hear, not to unload what the speaker wants to say.** Everything else (the opener, the structure, the stories) is in service of that.

The output is always a full, ready-to-deliver draft, annotated inline so the speaker knows not just *what* to say but *why* each piece is there and *how* to deliver it.

## Step 0: Check the speech file before drafting anything

Before intake even starts, read `references/speech-file.md` — the user's running collection of quotes, facts, and stories they've found worth reusing. Skim it for anything that could fit this occasion or the audience's likely mindset; don't force a match that isn't apt (see the ABC rule in Step 4 — an unfit quote is worse than no quote).

The speech file is meant to grow over time, not stay static. If the user mentions a quote, statistic, or story during the conversation that isn't already in the file and seems reusable beyond this one speech, offer to add it. In this session you can write directly to `references/speech-file.md`. In a future session where this skill has already been installed, that file may be a read-only cached copy — if a write fails or the environment makes clear the skill directory isn't writable, say so plainly and instead save the new entry to a plain file in the user's own working folder (e.g. `speech-file.md`) that they can carry forward and paste back in next time. Don't silently drop the material either way.

## Step 1: Run the intake in order — topic, audience, intention, evidence, delivery

Before drafting a single line, work through these five in sequence, asking the user directly for whatever isn't already given rather than guessing at facts that change the speech:

1. **Topic/occasion** — what's actually happening here? A toast, a eulogy, a sales pitch, a graduation, a team update? The occasion often *is* the structure — see Step 2.
2. **Audience** — their attitude toward the speaker, their attitude toward the topic, their age/seniority/background, and what they already know. A room of MDs at Goldman needs a different opener than a graduating class.
3. **Intention** — the single thing the audience should think, feel, or do differently afterward. This is the north star for every other choice in the speech — if a line doesn't serve it, cut it. This is also where the 1-3 main points get set (see Step 4) — don't move on until these are specific and short, even if that takes an extra question.
4. **Evidence** — the stories, quotes, facts, and data that will carry the intention. Check the speech file first (Step 0). For anything not already on hand, don't invent a placeholder and move on — ask a narrowing question first (e.g. "was there a specific moment in those ten weeks that captures this?"), and once the user has pointed at an idea, ask them to actually tell you the story or give you the number rather than assuming its content. Only fall back to a clearly-flagged placeholder if there's genuinely no one to ask (e.g. a one-shot test run) — in normal use, asking is the default, not the exception.
5. **Delivery constraints** — time limit, formal or informal, mic or none, who speaks immediately before/after, whether visual aids are possible.

Topic and audience are usually easy to get from the first message; intention and evidence are where it's worth slowing down and asking rather than filling gaps yourself — a speech built on a real, specific story the user actually told you will always beat one built on a plausible-sounding invented one.

## Step 2: Pick the structure — occasion-specific first, general second

Check whether the occasion matches one of the specific playbooks in `references/occasion-playbooks.md` (eulogy, welcome speech, master of ceremonies, invocation, introduction of a speaker, entertainment speech, toast, roast, presenting/accepting an award, graduation). These occasions have established shapes audiences implicitly expect — deviating from them reads as a mistake, not creativity. Read that file and follow the relevant structure.

If it's a business or persuasive context (pitch, sales talk, meeting remarks, fundraising ask, status update), read `references/business-speaking.md` for structures tuned to that (problem-solution, motivational sequence, appeals to values, meeting-running imperatives).

If it's neither — a general talk, informative speech, or impromptu remarks — pick a general pattern of organization from `references/openers-and-structure.md`: time (past/now/future), importance (build to the biggest point or lead with it, depending on audience attention), or problem-solution.

## Step 3: Open with a real attention grabber

Never open with "Today I want to talk about..." The first 15-30 seconds decide whether the audience leans in or checks out. Pick an opener that fits the audience and occasion from `references/openers-and-structure.md` (the grabber, curiosity arousal, problem-to-solve, the "woah" introduction, or a room reference). The opener should also implicitly answer "why should I listen to this person, on this topic, right now?"

## Step 4: Build the body — mark what's doing what

Cap the speech at **1-3 main points**, no more, and each one should be sayable as one short, precise sentence before it gets expanded — if the user can't state it that simply, that's a sign to go back to Step 1's intention question rather than pushing forward with something vague. A speech with five loosely-related points is harder to deliver from memory and harder for the audience to retain than one with two sharp ones.

As you draft the body:

- Every **main point** should be state → demonstrate → restate: say the claim, back it with logos (logic/evidence), ethos (credibility), or pathos (emotional connection) — whichever fits the point — then restate it.
- Every **story or anecdote** must be apt (fits this audience), brief, and chronological (the ABC rule), and must be doing one of three jobs: meaningful (carries a lesson), memorable, or moving (the 3 M's). If a story doesn't obviously support a main point, cut it or fix what it's attached to.
- Avoid the 3 D's inside any story: don't digress, don't divert to a second story, don't distract — tell it in one clean pass.
- Vary the delivery tools across the speech, don't lean on one: voice (implied through pacing/emphasis notes), supporting material (stories, quotations, metaphors, irony), and requested audience reaction (laughter, curiosity, reflection). A speech that's all logic or all jokes fatigues the room.

## Step 5: Close before the audience expects it — and restate the main point(s) there

Audience attention peaks right at the close, more than anywhere else in the speech — so the closing lines are the highest-value place to explicitly restate the 1-3 main points from Step 4, not just gesture at a feeling. End with either a summary ("and in conclusion...") or a capsule conclusion that calls back to the opener — the latter is almost always stronger because it makes the speech feel deliberately shaped rather than just stopped, and it can usually be built to restate the main point at the same time. Whatever the time limit, aim to finish slightly before the audience expects — leaving them wanting more beats running long every time.

## Step 6: Annotate the draft

Every draft this skill produces must be annotated inline using this bracket convention, placed right before or after the relevant line:

- `[HOOK]` — the attention-grabbing opener
- `[MAIN POINT]` — a core claim or thesis the speech is built around
- `[STORY → supports: <main point it backs>]` — every anecdote, tagged with what it's in service of
- `[METAPHOR]` / `[QUOTE]` — a specific rhetorical device being used
- `[PAUSE]` — where a deliberate silence lands a line (e.g., after a punchline, before a hard truth)
- `[LOGOS]` / `[ETHOS]` / `[PATHOS]` — which appeal a section is leaning on
- `[CALLBACK]` — a line that deliberately echoes the opener or an earlier moment
- `[TRANSITION]` — a pivot between sections, especially useful in longer speeches

Don't over-annotate — mark the load-bearing moments, not every sentence. The goal is that the speaker can see at a glance why each piece exists and where to breathe.

After the annotated draft, add a short **Effect notes** section (3-6 bullets) explaining what the speech is designed to make the audience feel or do at each major beat, and flag anything that depends on unknowns (e.g., "swap this story if the room skews more senior").

## Step 7: Anxiety, delivery, and Q&A — only if asked or clearly relevant

If the user asks about nerves, delivery mechanics, or what happens after the speech (audience questions), read `references/delivery-and-anxiety.md` for anxiety-management techniques and eye-contact/movement guidance, and `references/business-speaking.md` for the five D's of handling questions (delay, defuse, dissect, depersonalize, deflect) and how to run the Q&A itself.

## Reference files

- `references/speech-file.md` — the user's personal, growing bank of quotes, facts, and stories. Check it in Step 0 before drafting, and offer to add to it when the user surfaces new reusable material (see Step 0 for the read/write caveat).
- `references/openers-and-structure.md` — attention grabbers, general patterns of organization, the ABC/3M/3D story rules, variety techniques, objection-handling and progression devices.
- `references/occasion-playbooks.md` — eulogy, welcome speech, MC, invocation, introduction, entertainment speech, toast, roast, presenting/accepting an award, graduation speech.
- `references/business-speaking.md` — sales/persuasive structure, appeals to values, running a meeting, fundraising asks, making information memorable/teaching, the five D's for Q&A.
- `references/delivery-and-anxiety.md` — the five-step anxiety framework, eye contact and stage presence, day-of-speech checklist.
