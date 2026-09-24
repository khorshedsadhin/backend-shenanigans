# NestJS + PostgreSQL + Scalability Resources

Curated, high-trust only. Every lesson cites from here. Pruned when something proves shallow.

## Knowledge — NestJS

- [NestJS Official Documentation](https://docs.nestjs.com/)
  The primary source. Unusually good for a framework's own docs — written as a tutorial, not
  an API dump. Use for: anything Nest. Start at *Overview → First steps*, then *Fundamentals*.
- [NestJS: Fundamentals → Dependency Injection](https://docs.nestjs.com/fundamentals/custom-providers)
  Custom providers, tokens, factories. Use for: the moment `providers: [Foo]` stops being enough.
- [NestJS: Injection Scopes](https://docs.nestjs.com/fundamentals/injection-scopes)
  Definitive statement that DEFAULT scope is a singleton shared app-wide. Use for: understanding
  why services must be stateless — the foundation of horizontal scaling.
- [NestJS source & docs repo](https://github.com/nestjs/docs.nestjs.com)
  When the rendered docs are ambiguous, read the markdown. Use for: verifying claims.

## Knowledge — PostgreSQL

- [Use The Index, Luke! — Markus Winand](https://use-the-index-luke.com/)
  Free web book. The single best developer-facing explanation of how B-tree indexes actually
  work and why your query ignored yours. Covers Postgres explicitly through PG 17.
  Use for: indexing, `EXPLAIN` plans, slow-query diagnosis. **This is the highest-value
  external resource in this workspace.**
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/current/)
  Use for: exact semantics of transactions, isolation levels, constraints, and index types.
  Dense; reach for it to settle a question, not to browse.
- [use-the-index-luke.com — PostgreSQL execution plan operations](https://use-the-index-luke.com/sql/explain-plan/postgresql/operations)
  A decoder ring for `Seq Scan`, `Index Scan`, `Bitmap Heap Scan`, `Nested Loop`, `Hash Join`.
  Use for: reading your first real `EXPLAIN ANALYZE` output.
- [pganalyze Index Advisor](https://pganalyze.com/index-advisor)
  Paste a query + schema, get an index recommendation with reasoning. Use for: checking your
  own indexing answer *after* you've committed to one. Never before.

## Knowledge — Node.js runtime & performance

- [Node.js: Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop)
  Official guide. States that JavaScript runs on the event loop and that a blocked thread cannot
  serve any other client. Use for: CPU-bound slowness, why one heavy request stalls everyone.
- [The USE Method — Brendan Gregg](https://www.brendangregg.com/usemethod.html)
  "For every resource, check utilization, saturation, and errors." Use for: a checklist when a
  system is slow but nothing looks busy.
- [node-postgres: Pool](https://node-postgres.com/apis/pool)
  Default `max` is 10; extra requests wait in a FIFO queue; default `connectionTimeoutMillis` is
  0 (wait forever). Use for: pool saturation, and later the pooling lesson (step 15).

## Knowledge — Scalability & System Design

- [The System Design Primer (GitHub)](https://github.com/donnemartin/system-design-primer)
  ~300k-star open-source primer. Covers load balancing, caching layers, queues, replication,
  CAP. Use for: the vocabulary and the standard diagrams that interviewers expect.
- [_Designing Data-Intensive Applications_ — Martin Kleppmann](https://dataintensive.net/)
  The canonical book. Not a beginner text; we will read targeted chapters, not cover-to-cover.
  Use for: replication, partitioning, and *why* distributed systems fail.

## Wisdom (Communities)

- [NestJS Official Discord](https://discord.gg/nestjs)
  Maintainers and heavy users are present. Use for: "is this the idiomatic Nest way?" — the
  exact question docs cannot answer.
- [r/node](https://reddit.com/r/node)
  Use for: Node ecosystem judgement calls, and reality-checking job-market advice.
- [r/PostgreSQL](https://reddit.com/r/PostgreSQL)
  Use for: schema-design critique. Post a schema, get told what you got wrong. High signal.
- [r/ExperiencedDevs](https://reddit.com/r/ExperiencedDevs)
  Use for: interview expectations and what "mid-level backend" actually means to hiring managers.

## Gaps

- No vetted resource yet for **BullMQ / Redis queue patterns in NestJS** beyond the official
  `@nestjs/bullmq` docs. Find one before the queue lessons.
- No vetted **load-testing** resource yet (k6 vs autocannon). Needed before the first
  measure-it-yourself lesson.
- ORM choice for this workspace is **not yet decided** — see [[NOTES.md]]. Needs a resource
  once chosen.
