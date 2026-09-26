# Lesson 01 demonstrated: the DI container, from a blank file (2026-09-26)

Khorshed read lesson 01 two or three times, did Part B, then **deleted every task artefact and
rebuilt it from an empty file without looking at the lesson** — and it ran. That is the
completion bar stated in [[NOTES.md]], met unprompted and twice. Step 1 of the roadmap is now a
floor, not a topic: modules, `providers`, and the cross-module `exports` + `imports` pair can be
assumed in later lessons.

## Evidence

- Rebuild from blank, unaided, after deleting the tasks. Included the step-5 boundary failure,
  which only passes if both `exports` and `imports` are present.
- Singleton explained in his own words before reading the answer: one `constructed` log line,
  because Nest creates the object at app startup and everything afterwards shares that object.
  He connected the count to the lifecycle himself, which is the actual insight.

## Not demonstrated — must come back

- **The primary sources were not read** (Providers, Injection Scopes). He learned this from the
  lesson page alone. The working agreement says first encounters are typed from docs, so this is
  a real gap in habit, not in knowledge. Caught by a retrieval box at the top of lesson 0003
  rather than a re-read assignment.
- **`stateless service`** was read about in section 4 and never exercised — no Part B task
  touched it. It stays a glossary candidate. The cart-leaking-between-users incident (after
  step 3) is where it gets demonstrated.

## Implications

- The delete-and-rebuild loop is the thing that worked here. Every future lesson's Part B should
  end in a state that can be deleted and rebuilt, and should say so.
- Lesson 02 (Incident 01) is started but unfinished. It is not a prerequisite for anything, so it
  does not block roadmap step 2.
