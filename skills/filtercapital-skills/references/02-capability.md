# 02 - Score Capability

Score job capability only after reading the investigation output.

## Evidence Depth

- **Level 0:** Skill keyword, self-assessment, course, or institution name without usage.
- **Level 1:** Participation is described but task, method, ownership, and output are unclear.
- **Level 2:** A specific problem, personal action, method, or inspectable artifact is present.
- **Level 3:** Contribution, result, validation, and downstream effect form a credible loop.

Do not count one result at full strength in several areas. Downgrade quantified claims without baselines, measurement details, or ownership boundaries.

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
- `2`: Basic exposure with shallow personal contribution.
- `3`: At least one concrete practice matching the role.
- `4`: A credible result loop with appropriate method and ownership.
- `5`: Multiple independent result loops plus evidence of sound method selection and validation.

Return: `score 0-5`, `foundation gate`, strongest evidence, missing evidence, and confidence.
