# Incident 01 demonstrated: work vs. waiting, measured (2026-09-27)

Khorshed ran Part B of lesson 0002 and reported his own numbers with an explanation he wrote before
reading the answer. Both traps are now diagnosed from evidence, not from the page. Work vs. waiting
and the single-threaded event loop are a floor: later lessons can say "this blocks the event loop"
without re-deriving it.

## Evidence

- `slow-wait`, 5 parallel: all five finish at ~3s. His words: the work is asynchronous, so while one
  request is on hold the event loop moves to the next one.
- `slow-cpu`, 5 parallel: 3.00 / 6.00 / 9.00 / 12.00 / 15.00s — **run twice**, same ladder both
  times. He did not treat one run as proof.
- `/users` during that window: **11.597008s**, against 0.001183s and 0.001749s on the idle server.
  His words: one request held the event loop, so nothing moved until it finished; the rest waited in
  a queue. That is the whole incident, in his own language.

## Not demonstrated — must come back

- **Per-core reading.** He reports ~4 graphs topping out in Task Manager, but `slow-cpu` is a
  synchronous `while` loop — one thread, so one logical processor at a time (Windows moves that
  thread between cores, which makes several graphs flicker). Total CPU % was never written down, so
  trap 1's central number — 100 ÷ logical cores, ≈12.5% on 8 — is still unmeasured. He understood
  the correction and chose not to re-run. Re-measure it inside a later lesson, not as homework.
- **Connection pool saturation and missing timeouts** (lesson sections 4–5) were read and never
  exercised. Pool saturation gets its hands-on at roadmap step 5, when Nest first talks to Postgres.

## Implications

- `curl.exe -w "%{time_total}s"` with `-Z --parallel-immediate` is now an instrument he can drive
  himself. Reuse it for step 7 (index, before/after) and step 12 (cache, before/after) instead of
  teaching a load-testing tool — the before/after number is the point, not the tool.
- He reproduces a run before concluding. Ask for measurements, not descriptions.
