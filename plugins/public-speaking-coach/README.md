# Public Speaking Coach

> **A Claude Code skill that writes speeches the audience actually wants to hear.**

The guiding principle: figure out what the *audience needs to hear* — not what the speaker wants to say. Everything else (the opener, the structure, the stories) serves that.

---

## The Five Pillars

| # | Pillar | What happens |
|---|--------|-------------|
| 1 | **Intake** | Topic → Audience → Intention → Evidence → Delivery constraints — in that order, never skipped |
| 2 | **Structure** | Occasion-specific playbooks (toast, eulogy, MC, pitch, graduation…) before any generic pattern |
| 3 | **Opening** | Never "Today I want to talk about…" — always a real attention grabber from the first word |
| 4 | **Body** | 1–3 main points max, each with a claim → evidence → restate loop; stories pass the ABC / 3M test |
| 5 | **Close** | Finish before the audience expects it; capsule close that callbacks to the opener |

---

## Output format

Every draft ships with inline annotations so you know **why** each piece is there and **how** to deliver it:

```
[HOOK]        attention-grabbing opener
[MAIN POINT]  core claim the speech is built around
[STORY → supports: <point>]  every anecdote, tagged to its purpose
[PAUSE]       where a deliberate silence lands a line
[CALLBACK]    line that echoes the opener
[LOGOS / ETHOS / PATHOS]  which appeal a section leans on
```

Followed by a short **Effect notes** section: what each major beat is designed to make the audience feel.

---

## Trigger phrases

Works whenever you describe a speaking occasion — no magic words needed:

- *"I have to say a few words at my colleague's farewell…"*
- *"I'm hosting the awards dinner…"*
- *"I'm pitching to investors next Thursday…"*
- *"I need to write a toast for my best friend's wedding…"*

---

## Reference library

```
references/
├── speech-file.md          personal bank of quotes, facts & stories (grows over time)
├── occasion-playbooks.md   toast · eulogy · roast · MC · award · graduation · invocation
├── openers-and-structure.md  grabbers, ABC/3M/3D story rules, progression devices
├── business-speaking.md    pitch · sales · meetings · fundraising · Q&A (five D's)
└── delivery-and-anxiety.md   stage presence, eye contact, five-step anxiety framework
```

---

## Installation

```bash
/plugin marketplace add moritz-rsth/moritz-skills
/plugin install public-speaking-coach@moritz-skills
```

---

## License

MIT
