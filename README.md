# Backend Shenanigans

A self-directed course in production-grade backend engineering, built to close a specific gap:
React and shallow Express/MongoDB experience, but no relational database fluency and no
vocabulary for the scaling questions that decide backend interviews.

This is not a tutorial series. It is a personal course, built lesson by lesson as the learner
progresses, with evidence — working code, quizzes answered from memory, breakages caused and
fixed on purpose — required before moving on. See [MISSION.md](MISSION.md) for the full goal
and [NOTES.md](NOTES.md) for the living roadmap and learner state.

## Stack

NestJS + PostgreSQL. Raw SQL before any ORM. Docker for local infrastructure. Redis and BullMQ
enter later, once the reasons for them have been earned rather than assumed.

## Structure

- `MISSION.md` — why this course exists and what success looks like.
- `NOTES.md` — learner snapshot, teaching preferences, the 16-step roadmap, open decisions.
- `GLOSSARY.md` — terms promoted only after correct use in practice, not on first mention.
- `RESOURCES.md` — cited primary sources, plus a running list of gaps still needing one.
- `lessons/` — self-contained HTML lessons, numbered independently, each tied to a roadmap step.
- `reference/` — printable cheat sheets that accompany specific lessons.
- `learning-records/` — dated evidence of what has actually been demonstrated, not just covered.
- `assets/` — shared CSS and a small quiz engine used by every lesson and reference sheet.

## Reading a lesson

Lessons are plain HTML with relative links. Open the file directly in a browser; no build step
and no server required.

## Roadmap

Sixteen steps, from the NestJS dependency injection container through indexes, transactions,
auth, caching, queues, and load-balanced horizontal scaling, ending with system-design
articulation for interviews. The order is a dependency graph, not a suggestion — later steps
(caching, queues, load balancing) depend on discipline established in step 1. Full detail and
current position live in [NOTES.md](NOTES.md).

## Status

One lesson written and in progress. This repository grows as lessons are written and learning
records are added; it is not a finished product.
