# moritz-skills

A personal [Claude Code](https://claude.com/claude-code) plugin marketplace. Each plugin is a
self-contained skill (or small bundle of skills) that Claude picks up automatically when the task
matches.

## Install

Add the marketplace once, then install whichever plugins you want:

```
/plugin marketplace add moritz-rsth/moritz-skills
/plugin install public-speaking-coach@moritz-skills
/plugin install slides@moritz-skills
```

Update later with `/plugin marketplace update moritz-skills`.

## Plugins

| Plugin | What it does | Docs |
|---|---|---|
| `public-speaking-coach` | Drafts speeches, toasts, pitches, eulogies, introductions and talks with an audience-first framework. Every draft ships annotated with delivery notes. | [README](plugins/public-speaking-coach/README.md) |
| `slides` | House-style HTML decks: bright Geist design, section pills + page numbers, one self-contained file. Interviews you first (audience, main points + hook, structure, 1–3-word headings) behind a hard gate, then writes `<name>_plan.md` and builds; ships an asset inliner and a viewport validator. | [SKILL.md](plugins/slides/skills/slides/SKILL.md) |

## Layout

```
.claude-plugin/marketplace.json     the catalog Claude Code reads
plugins/
  <plugin-name>/
    .claude-plugin/plugin.json      plugin manifest
    skills/<skill-name>/SKILL.md    the skill itself + its reference files
```

To add a skill: create `plugins/<name>/` following the layout above and append an entry to
`marketplace.json`.

## Local development

Point Claude Code at the checkout instead of GitHub to test changes before pushing:

```
/plugin marketplace add /path/to/moritz-skills
```

## License

MIT
