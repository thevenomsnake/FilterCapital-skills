# 02 - Score Capability

Score job capability only after reading the investigation output.

## Automation Baseline

Apply an automation baseline to every project and role. Assume a competent operator can use current AI and standard tools, then separate:

- **Commodity execution:** standard research or synthesis, template-based content or design, routine data or spreadsheet work, common code scaffolding, assembling familiar deliverables, applying a known method to prepared inputs, and producing a polished work sample. This is real evidence of workflow familiarity, tool fluency, and basic delivery discipline, but it has low discriminatory value.
- **Candidate-owned judgment:** framing an ambiguous problem, defining success and constraints, choosing or challenging inputs and criteria, handling missing or conflicting information, selecting among methods, testing competing explanations, designing validation, catching tool errors, revising a conclusion, and influencing a real decision or iteration.

Ask: if the visible deliverable were produced from a short prompt, template, or standard tool workflow, what material decision, discovery, verification, or consequence remains attributable to the candidate? Use that residue to determine evidence depth while retaining commodity execution as lower-value process evidence.

When that residue is unclear, ask: `What was one decision the tools could not make for you, which alternatives did you reject, how did you verify it, and what changed because of it?` A generic retelling of implementation steps adds no new evidence.

Treat AI use itself as neutral. This baseline measures how discriminating the evidence is; it does not imply that the candidate used AI. Verified decomposition, error detection, and accountable use of AI may themselves support candidate-owned judgment.

Cap a work sample at Level 2 when public or prepared inputs and routine deliverables make it reproducible from a short prompt or template, unless the resume shows candidate-owned judgment, a material real-world constraint, or feedback that changed the work. Count a long tool list, many workflow stages, and repeated routine checks once rather than as independent evidence. A simple work sample may still be strong when its reasoning and validation are deep.

### Artifact Provenance And Ownership

Using public, shared, template, open-source, or tool-assisted material is neutral. Evaluate four independent dimensions: presentation or hosting location, source and pre-existing material, candidate contribution and judgment, and validation or downstream use. Mark a dimension `not applicable` when the medium has no such layer, and `unknown` only when the evidence should exist but is missing. Ambiguous attribution language is a light communication/self-presentation signal only; by itself it cannot lower capability, prove copying, or trigger decline.

Work built on pre-existing material remains low-discrimination evidence when the source, starting state, change scope, candidate-owned decisions, validation, or changed result is unclear; it is normally capped at Level 2 or classified as `guided reproduction`/`commodity workflow`. Do not infer copying from missing detail. It may exceed that ceiling when the candidate can attribute concrete transformations, rejected alternatives, validation, and result changes. Use medium-appropriate evidence such as revisions, version history, decision records, before/after artifacts, stakeholder feedback, or operating results. Ask: what existed before, what did you personally change or decide, how did you validate it, and what changed because of your work?

## Evidence Depth

- **Level 0:** Skill keyword, self-assessment, course, or institution name without usage.
- **Level 1:** Participation is described but task, method, ownership, and output are unclear.
- **Level 2:** A specific task and attributable execution or artifact are present, but candidate-owned judgment, validation, or downstream effect remains shallow or unclear.
- **Level 3:** Candidate-owned judgment, result, appropriate validation, and an evidence-tested or externally tested effect form a credible loop.

Execution coverage is not evidence depth. A public or template-based work sample can list many tools and stages yet remain Level 2 at most when it shows no non-obvious candidate decision. Do not count one result at full strength in several areas. Downgrade quantified claims without baselines, measurement details, or ownership boundaries.

## Audience Expectations

### Intern

For a small-company intern hired as near-term capacity, apply the fast-start gate first. After it passes, prioritize directly transferable workflow experience; use role-relevant judgment and learning capacity to rank candidates rather than to replace process readiness. Accept coursework, personal projects, competitions, clubs, research, volunteering, and internships when they demonstrate concrete execution. Do not require formal work or production impact.

### New Graduate

Require at least one concrete practice or delivery. Without real-context or end-to-end evidence, do not award the highest capability score.

### Ranking Signals Within The Passing Pool

For every target role, derive its durable foundation from the JD and recruiter context, then rank candidates who clear the applicable gates by that foundation and the completeness of their own problem chain. A role-relevant foundation plus concrete work that identifies inputs or constraints, method choice, output, and user, decision, or operational use is a strong first-round signal. It should outrank adjacent exposure, generic tool lists, and vague work-sample titles. A missing formal internship is not a reason to mechanically downgrade this combination; coursework, personal projects, competitions, research, volunteering, or other settings can be sufficient when the work is specific and attributable.

Specificity improves evidence discrimination but does not erase the automation baseline: externally supplied or easily reproducible work still needs candidate-owned definitions, judgment, validation, correction, and a consequential result before it supports higher capability depth.

## Conditional Lens - Data-Analysis Foundation

Apply this section only when the target role requires data analysis. For every other role, mark this lens `not applicable` and derive any specialized foundation requirement from that role's JD or recruiter-confirmed standard; never export quantitative criteria as a universal gate.

Run this gate independently from fast-start. A `fast-start pass` proves current process readiness; it does not prove a data-analysis foundation.

For a data-analysis target role, foundation evidence requires either:

- sustained quantitative training shown by a major with relevant curriculum or explicitly listed core courses in mathematics, statistics, computer science, econometrics, operations research, or another systematic quantitative track; or
- repeated, real, attributable analytical work showing indicator or metric definitions, method selection, validation, error correction, and a decision or usable result beyond commodity execution.

Mark the gate `fail` when both undergraduate and graduate paths lack clear quantitative training and the remaining evidence consists only of public, tutorial, template-based, or AI-assisted SQL/BI/cleaning workflows without candidate-owned judgment. Mark `uncertain` when the source omits the course or work detail needed to distinguish those cases. A related graduate title, school level, professional label, or SQL/Python keyword cannot substitute for the missing training or reasoning evidence.

Treat a non-quantitative education path as a combination signal, not a standalone rejection rule. Continuous, real, attributable analysis with rigorous definitions, method choices, validation, correction, and decision outcomes can demonstrate that the required thinking has been acquired and can overturn the concern.

## Capability Score

- `0`: No relevant evidence or an applicable role-foundation gate clearly fails.
- `1`: Relevant claims only.
- `2`: Basic workflow experience or commodity execution with attributable delivery but shallow personal judgment.
- `3`: At least one role-relevant practice with an attributable judgment beyond the automation baseline, but an incomplete or weakly verified result loop.
- `4`: One credible result loop linking a nontrivial problem, candidate-owned judgment, appropriate validation, and an outcome tested against evidence, users, or operational feedback.
- `5`: Multiple independent result loops plus evidence of sound method selection, validation, and revision under real constraints.

Return: `score 0-5`, `applicable foundation gate or not applicable`, automation baseline, candidate-owned judgment, strongest evidence, missing evidence, highest-value capability question, and confidence. Keep the fast-start gate result separate from any foundation result.
