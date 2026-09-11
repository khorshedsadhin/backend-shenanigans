# Working Notes

## Learner snapshot (2026-09-06, session 0)
- Goal: **land a backend job.** Everything must produce interview-defensible evidence.
- TypeScript: comfortable basics. Generics, decorators, DI patterns = fuzzy. Teach at point of use.
- SQL: **near zero.** Do not assume joins, normalisation, indexes, or transactions.
- Prior: React; one Express + MongoDB project. Self-described non-expert. Explicitly asked
  not to be treated as though he knows these things together.
- Time: ~8–12 hrs/week.
- Platform: Windows 11. Docker Desktop assumed for Postgres/Redis.

## Teaching preferences observed
- Asked for the *whole map* (load balancing, queues, caching) up front — he wants to see where
  he's going. Keep a visible roadmap; each lesson should say where it sits on it.
- Warned against overestimating him. Bias toward smaller steps and more retrieval practice.

## Working agreement (2026-09-11)
He wants to be able to build real projects **without** AI, so that using AI multiplies his
output instead of replacing his skill. Help is never withheld — only its *shape* is sequenced.
- **No-AI-first on every new topic.** First encounter is typed from primary docs. No generated
  code, no autocomplete.
- **30-minute self-debug window** before asking. Read the trace, form a hypothesis, test it.
  Diagnosis is the skill AI erodes fastest.
- **Blank-file rebuild is the completion bar.** A lesson counts as learned only when he can
  reproduce its core from an empty file unaided. That attempt is what triggers a learning record.
- **How help is given.** Syntax/API questions: answer straight. Errors: one pointed question
  first, then the answer. Approach: give the shape (what pieces, in what order), not the code.
  Past the 30-minute window: the fix and the why, no hazing.
- **"Just give me the code" is honoured.** State the tradeoff once, then comply — but mark the
  exercise *not demonstrated* so it comes back. Keeps `learning-records/` honest.
- **Periodic offline build.** Every few roadmap steps, one project feature built docs-only, no
  AI, time-boxed. Pass -> learning record. Fail -> tells us what to re-teach.

## Open decisions
- **ORM/data layer not yet chosen.** Deliberate: he will learn *raw SQL first*, because an ORM
  taught to someone with no SQL produces a developer who cannot debug a slow query — fatal for
  the mission. Revisit around lesson 8–10. Leading candidates: Prisma (best DX, v7 dropped the
  Rust engine) and Drizzle (SQL-shaped, no codegen). TypeORM is Nest's historical default but
  carries ecosystem risk for new projects in 2026.

## Roadmap (living — reorder as learning records dictate)
1. **Nest mental model** — modules, providers, the DI container. ← *lesson 0001*
2. **Relational thinking** — tables, keys, normalisation. The Mongo→Postgres unlearning.
3. Controllers, DTOs, validation pipes. The HTTP edge done properly.
4. SQL you'll actually write: joins, aggregates, `GROUP BY`.
5. Connecting Nest to Postgres; migrations; the repository boundary.
6. Transactions and isolation. Why money apps use them.
7. Indexes and `EXPLAIN ANALYZE`. Making a slow query fast, measured.
8. Auth: hashing, JWT, guards.
9. Config, env, logging, error filters. Production hygiene.
10. Testing: unit vs integration, Testcontainers.
11. Docker Compose: app + Postgres + Redis.
12. Caching with Redis. Invalidation. Measured.
13. Queues with BullMQ. Moving work off the request path.
14. Load testing. Statelessness. N instances behind a load balancer.
15. Replication, read replicas, connection pooling (PgBouncer).
16. System design articulation — the interview round.
