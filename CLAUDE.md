# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

**Not a software project.** This is a *teaching workspace* driven by the `teach` skill. There is
no build, no test suite, no package manager, no git repo. The "product" is a course:
self-contained HTML lessons that teach Khorshed to be a hireable backend engineer.

Invoke the skill with `/teach` before doing teaching work — it carries the pedagogy rules
(fluency vs. storage strength, zone of proximal development, feedback loops) that this file does
not repeat. Format specs live in `C:\Users\khorshedsadhin\.claude\skills\teach\`
(`MISSION-FORMAT.md`, `LEARNING-RECORD-FORMAT.md`, `RESOURCES-FORMAT.md`, `GLOSSARY-FORMAT.md`).

## Read-first order

State is spread across files that only make sense together. Before authoring anything:

1. `MISSION.md` — why the learner is here. Every lesson must trace back to it.
2. `NOTES.md` — learner snapshot, teaching preferences, **the 16-step roadmap**, and open
   decisions. This is the single most load-bearing file; the roadmap is the course spine.
3. `learning-records/` — what is *demonstrated*, not merely covered. Sets the floor for what to
   teach next.
4. `assets/` — the component library. Read it before writing a lesson, always.

## Commands

```powershell
Start-Process "D:\NestJS Learning\lessons\<file>.html"   # open a lesson for the learner
```

Always open a newly written lesson this way at the end of a session. Lessons are plain HTML with
relative links; no server, no build step.

## Authoring conventions

**Numbering.** `lessons/`, `reference/`, and `learning-records/` are each independently numbered
`NNNN-dash-case-name.{html,md}`. Scan the directory for the highest number and increment. Lesson
N and reference N are *not* required to correspond, though 0001 currently does.

**Components before content.** `assets/course.css` and `assets/quiz.js` are shared by every
lesson and reference sheet. Build from them; never inline something a second lesson would
duplicate. New reusable widgets go in `assets/` and get linked, not copy-pasted.

`assets/quiz.js` defines a strict markup contract documented in its header comment:
- `.quiz[data-answer]` — `data-answer` is the **zero-based** index of the correct `.opt` button;
  each `.opt` carries a `data-fb` explanation shown on click.
- `.recall` — refuses to reveal the model answer until the textarea has real content. This
  enforced friction is deliberate (retrieval before recognition); do not remove it.

**Quiz answers must be near-identical in length.** Uneven option lengths leak the answer through
formatting. This is checked by eye when authoring — keep options within a few characters.

**Every lesson must contain**: a mission tie-in callout, a cited primary source, an "Ask me"
callout reminding the learner the agent is their teacher, and footer links to its reference sheet
and to `NOTES.md` for roadmap position.

**Citations over parametric knowledge.** Claims get links, sourced from `RESOURCES.md`. If a
needed source is missing, add it to that file's `## Gaps` section rather than guessing.

## Deliberate pedagogical decisions

These look like omissions but are not. Do not "fix" them without discussing it with the learner:

- **No ORM until roadmap step ~9.** Raw SQL first. The learner has near-zero SQL; an ORM handed
  over now produces someone who cannot debug a slow query — the exact failure mode the mission
  exists to prevent. Rationale and candidate ORMs are in `NOTES.md` under *Open decisions*.
- **Caching, queues, and load balancing sit at steps 12–15**, despite being what the learner
  asked about by name. They depend on the singleton→stateless chain taught in lesson 01. The
  ordering is a real dependency graph, not padding.
- **`GLOSSARY.md` is near-empty by design.** Terms are promoted only after the learner *uses*
  them correctly. Coverage is not learning. Candidates awaiting evidence are listed at its foot.
- **Do not assume combined competence.** The learner explicitly asked not to be credited with
  knowing React + Express + Mongo together. Prior Express experience is a narrow bridge for
  intuition, not a foundation — see `learning-records/0001`.

## When the learner reports back

Progress arrives as prose ("step 5 failed", "I counted one log line"). Convert evidence of
genuine understanding into a new learning record, promote earned terms into `GLOSSARY.md`, and
let both decide the next lesson. Reorder the `NOTES.md` roadmap when records justify it rather
than following it mechanically.

## Gotcha

Writing lesson-sized HTML via a Bash heredoc **fails** in this environment (`unexpected EOF`
around ~160 lines). Use the Write tool for lessons and reference sheets; Bash heredocs are fine
for the shorter Markdown files.
