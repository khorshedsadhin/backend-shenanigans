# Mission: Scalable Backend Engineering with NestJS + PostgreSQL

## Why
Khorshed wants to be hired as a backend engineer — the kind who is trusted with a system
that real traffic hits, not just a CRUD app that works on localhost. Today the gap is
concrete: React + a bit of Express/MongoDB, but no relational database fluency, no
production architecture, and no vocabulary for the scaling questions that decide interviews.
The mission is to close that gap with **evidence** — a deployed, load-tested system and the
ability to defend its design out loud.

## Success looks like
- Ship a production-shaped NestJS + PostgreSQL service: modules, DI, DTO validation, auth,
  migrations, tests, Docker, CI.
- Design a normalised Postgres schema from a fuzzy requirement, then read `EXPLAIN ANALYZE`
  and add the index that fixes a slow query.
- Explain, at a whiteboard, why a request is slow and which of {index, cache, queue, replica,
  more app instances} is the right fix — and why the other four are not.
- Put a Redis cache and a BullMQ worker in front of/behind an endpoint and prove the
  latency difference with a load test (k6/autocannon), not a guess.
- Run N stateless app instances behind a load balancer and explain what breaks if a service
  holds in-memory state.
- Answer a mid-level backend interview's system-design round without bluffing.

## Constraints
- ~8–12 hrs/week. Serious side commitment, not full-time.
- TypeScript: comfortable with basics; generics, decorators and DI patterns are still fuzzy.
  Teach them at point of use, never as a standalone TS course.
- SQL: near zero. Relational thinking must be built from the ground up, not assumed.
- Prior Express/MongoDB experience is shallow — treat it as familiarity, not competence.
- Windows machine; Docker Desktop is the expected local-infra path.

## Out of scope
- Frontend work. React is background, not a subject.
- Kubernetes, Terraform, and multi-region infrastructure — revisit only after a single
  service is genuinely solid.
- Microservices as a starting architecture. We build a well-factored modular monolith first,
  and split only when a lesson proves a reason to.
- Framework tourism (Go, Rust, Java). One stack, to depth.
