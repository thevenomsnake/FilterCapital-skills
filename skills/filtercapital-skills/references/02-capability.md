# 02 - Score Capability

Score job capability only after reading the investigation output.

## Automation Baseline

Apply an automation baseline to every project and role. Assume a competent operator can use current AI and standard tools, then separate:

- **Commodity execution:** standard scraping or API calls, routine SQL, dashboard assembly, scheduled refreshes, common quality checks, applying a familiar model to prepared or public data, and producing a polished repository or report.
- **Candidate-owned judgment:** framing an ambiguous problem, choosing or challenging data and metric definitions, resolving missingness or bias, selecting among methods, testing competing explanations, designing validation, catching tool errors, revising a conclusion, and influencing a real decision or iteration.

Ask: if the code, queries, charts, and prose were produced from a short prompt, what material decision, discovery, verification, or consequence remains attributable to the candidate? Score that residue rather than the amount of output.

When that residue is unclear, ask: `What was one decision the tools could not make for you, which alternatives did you reject, how did you verify it, and what changed because of it?` A generic retelling of implementation steps adds no new evidence.

Treat AI use itself as neutral. This baseline measures how discriminating the evidence is; it does not imply that the candidate used AI. Verified decomposition, error detection, and accountable use of AI may themselves support candidate-owned judgment.

Cap a project at Level 2 when public or prepared data and routine deliverables make it reproducible from a short prompt, unless the resume shows candidate-owned judgment, a material real-world constraint, or feedback that changed the work. Count a long tool list, many pipeline stages, and repeated routine checks once rather than as independent evidence. A simple project may still be strong when its reasoning and validation are deep.

## Evidence Depth

- **Level 0:** Skill keyword, self-assessment, course, or institution name without usage.
- **Level 1:** Participation is described but task, method, ownership, and output are unclear.
- **Level 2:** A specific task and attributable execution or artifact are present, but candidate-owned judgment, validation, or downstream effect remains shallow or unclear.
- **Level 3:** Candidate-owned judgment, result, appropriate validation, and an evidence-tested or externally tested effect form a credible loop.

Execution coverage is not evidence depth. For example, a public review-data project listing scraping, storage, SQL, dashboards, refresh jobs, and standard quality tests remains Level 2 at most when it shows no non-obvious analytical decision. Do not count one result at full strength in several areas. Downgrade quantified claims without baselines, measurement details, or ownership boundaries.

## Audience Expectations

### Intern

Accept coursework, personal projects, competitions, clubs, research, and internships. Judge foundations and capacity to learn. Do not penalize missing formal work or production experience.

### New Graduate

Require at least one concrete practice or delivery. Without real-context or end-to-end evidence, do not award the highest capability score.

## Data-Analysis Foundation Gate

Require statistical reasoning through at least one of:

- a relevant major with probability, statistics, regression, sampling, experiment design, econometrics, or model validation;
- systematic core courses;
- a concrete project using indicator design, sampling, hypothesis testing, regression, causal inference, or model validation.

School level cannot compensate for a missing statistical foundation. Mark the gate `fail`, `uncertain`, or `pass`.

## Capability Score

- `0`: No relevant evidence or the statistical foundation gate clearly fails.
- `1`: Relevant claims only.
- `2`: Basic exposure or commodity execution with shallow personal contribution.
- `3`: At least one role-relevant practice with an attributable judgment beyond the automation baseline, but an incomplete or weakly verified result loop.
- `4`: One credible result loop linking a nontrivial problem, candidate-owned judgment, appropriate validation, and an outcome tested against evidence, users, or operational feedback.
- `5`: Multiple independent result loops plus evidence of sound method selection, validation, and revision under real constraints.

Return: `score 0-5`, `foundation gate`, automation baseline, candidate-owned judgment, strongest evidence, missing evidence, highest-value capability question, and confidence.
