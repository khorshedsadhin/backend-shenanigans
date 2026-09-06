# Prior knowledge baseline established (session 0)

Khorshed's starting point, stated directly by him and used to set the floor for every lesson:
React on the frontend, **one** Express + MongoDB project, self-assessed as never expert in any
of it. TypeScript at "comfortable basics" — types and props are fine, but **generics,
decorators and dependency-injection patterns are unfamiliar**. SQL is **near zero**: joins,
normalisation, indexes and transactions cannot be assumed.

## Implications

- **Do not teach NestJS as "Express but structured."** He has the Express *shape* but not the
  depth, so the analogy carries less than it would for an experienced Express developer. Use it
  as a bridge for intuition only, and verify rather than assume.
- **Decorators must be explained the first time they appear**, not waved past. `@Injectable()`
  and `@Module()` are the first real decorators he will meet.
- **Postgres must be taught as relational *thinking* before ORM syntax.** A Mongo-shaped mental
  model (embed everything, no joins) is the specific misconception to expect and dismantle.
- **ORM is deliberately deferred.** Raw SQL first — see [[NOTES.md]]. An ORM handed to someone
  who cannot read a query plan produces exactly the engineer this mission is trying not to
  create.
- He explicitly asked not to be credited with combined knowledge of these tools. Bias toward
  smaller steps and heavier retrieval practice than his years-of-exposure would suggest.
