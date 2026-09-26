# NestJS + PostgreSQL Scalability Glossary

The canonical language for this workspace. Lessons, exercises and learning records all use
these words and no synonyms.

**A term is promoted here only once Khorshed has used it correctly**, not when it was first
taught. An empty section below means the material is covered but not yet demonstrated.

## Terms

**provider** — a class the container builds and hands to whoever declares it. Registered by
listing it in a module's `providers` array; `@Injectable()` alone only makes it eligible.

**module** — a boundary, not a folder. Its `providers` are private to it until `exports` lends
them out, and a consumer must `imports` the module to borrow them. Nest enforces this at startup.

**DI container** — the part of Nest that builds every provider once at application start, in
dependency order, and injects them. You declare what a class needs; you never call `new`.

**singleton scope** — the default provider scope: one instance for the whole application, its
lifetime tied to the application's. All concurrent requests share it.

## Candidates awaiting evidence

Introduced in lesson 0001, promote once used correctly:
stateless service.

Introduced in lesson 0003, promote once used correctly:
row, column, primary key, foreign key, join table, normalisation.
