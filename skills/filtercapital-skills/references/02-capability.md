# 02 - Score Capability

Score job capability only after reading the investigation output.

## Automation Baseline

Apply an automation baseline to every project and role. Assume a competent operator can use current AI and standard tools, then separate:

- **Commodity execution:** standard scraping or API calls, routine SQL, dashboard assembly, scheduled refreshes, common quality checks, applying a familiar model to prepared or public data, and producing a polished repository or report. This is real evidence of workflow familiarity, tool fluency, and basic delivery discipline, but it has low discriminatory value.
- **Candidate-owned judgment:** framing an ambiguous problem, choosing or challenging data and metric definitions, resolving missingness or bias, selecting among methods, testing competing explanations, designing validation, catching tool errors, revising a conclusion, and influencing a real decision or iteration.

Ask: if the code, queries, charts, and prose were produced from a short prompt, what material decision, discovery, verification, or consequence remains attributable to the candidate? Use that residue to determine evidence depth while retaining commodity execution as lower-value process evidence.

When that residue is unclear, ask: `What was one decision the tools could not make for you, which alternatives did you reject, how did you verify it, and what changed because of it?` A generic retelling of implementation steps adds no new evidence.

Treat AI use itself as neutral. This baseline measures how discriminating the evidence is; it does not imply that the candidate used AI. Verified decomposition, error detection, and accountable use of AI may themselves support candidate-owned judgment.

Cap a project at Level 2 when public or prepared data and routine deliverables make it reproducible from a short prompt, unless the resume shows candidate-owned judgment, a material real-world constraint, or feedback that changed the work. Count a long tool list, many pipeline stages, and repeated routine checks once rather than as independent evidence. A simple project may still be strong when its reasoning and validation are deep.

### Public-Source Attribution

GitHub and other open-source use are neutral. Distinguish a project being **hosted on** a public repository from a project being **derived from** one. A phrase such as `from GitHub` can be an English preposition error meant to communicate hosting; record it as wording ambiguity and a light self-presentation signal, not as a plagiarism finding. It cannot lower capability or trigger decline by itself.

For the capability baseline, a public project without an identifiable repository, specific personal modifications, candidate-owned decisions, validation, and a changed result remains low-discrimination evidence and is normally capped at Level 2 or classified as `guided reproduction`/`commodity workflow`. Do not infer that the candidate copied it. If the candidate clearly discloses the source and can attribute concrete changes, rejected alternatives, validation, and result changes, the project may exceed that ceiling. The interview can resolve the ambiguity with one question: was it hosted on GitHub or sourced from GitHub, and what repository, commits, personal changes, validation, and result change can be demonstrated?

## Evidence Depth

- **Level 0:** Skill keyword, self-assessment, course, or institution name without usage.
- **Level 1:** Participation is described but task, method, ownership, and output are unclear.
- **Level 2:** A specific task and attributable execution or artifact are present, but candidate-owned judgment, validation, or downstream effect remains shallow or unclear.
- **Level 3:** Candidate-owned judgment, result, appropriate validation, and an evidence-tested or externally tested effect form a credible loop.

Execution coverage is not evidence depth. For example, a public review-data project listing scraping, storage, SQL, dashboards, refresh jobs, and standard quality tests remains Level 2 at most when it shows no non-obvious analytical decision. Do not count one result at full strength in several areas. Downgrade quantified claims without baselines, measurement details, or ownership boundaries.

## Audience Expectations

### Intern

For a small-company intern hired as near-term capacity, apply the fast-start gate first. After it passes, prioritize directly transferable workflow experience; use analytical judgment and learning capacity to rank candidates rather than to replace process readiness. Accept coursework, personal projects, competitions, clubs, research, and internships when they demonstrate concrete execution. Do not require formal work or production impact.

### New Graduate

Require at least one concrete practice or delivery. Without real-context or end-to-end evidence, do not award the highest capability score.

### Ranking Signals Within The Passing Pool

For an analytical target role, rank candidates who clear the applicable gates by the strength of their long-term reasoning training and the completeness of their own problem chain. Systematic quantitative education (for example, a clearly evidenced mathematics, statistics, computer science, econometrics, or operations-research curriculum) plus a concrete project that names the data object or labels, method choice, output, and operational or decision use is a strong first-round signal. It should outrank adjacent exposure such as watching platform metrics or adjusting content, generic tool lists, and vague project titles. A missing formal internship is not a reason to mechanically downgrade this combination; coursework and personal projects can be sufficient when the work is specific and attributable.

Specificity improves evidence discrimination but does not erase the automation baseline: public-data projects still need candidate-owned definitions, validation, correction, and a result that changed a recommendation before they support higher capability depth.

## Data-Analysis Foundation Gate

Run this gate independently from fast-start. A `fast-start pass` proves current process readiness; it does not prove a data-analysis foundation.

For a data-analysis target role, foundation evidence requires either:

- sustained quantitative training shown by a major with relevant curriculum or explicitly listed core courses in mathematics, statistics, computer science, econometrics, operations research, or another systematic quantitative track; or
- repeated, real, attributable analytical work showing indicator or metric definitions, method selection, validation, error correction, and a decision or usable result beyond commodity execution.

Mark the gate `fail` when both undergraduate and graduate paths lack clear quantitative training and the remaining evidence consists only of public, tutorial, GitHub, or AI-assisted SQL/BI/cleaning workflows without candidate-owned judgment. Mark `uncertain` when the source omits the course or work detail needed to distinguish those cases. A related graduate title, school level, professional label, or SQL/Python keyword cannot substitute for the missing training or reasoning evidence.

Treat a non-quantitative education path as a combination signal, not a standalone rejection rule. Continuous, real, attributable analysis with rigorous definitions, method choices, validation, correction, and decision outcomes can demonstrate that the required thinking has been acquired and can overturn the concern.

## Capability Score

- `0`: No relevant evidence or the statistical foundation gate clearly fails.
- `1`: Relevant claims only.
- `2`: Basic workflow experience or commodity execution with attributable delivery but shallow personal judgment.
- `3`: At least one role-relevant practice with an attributable judgment beyond the automation baseline, but an incomplete or weakly verified result loop.
- `4`: One credible result loop linking a nontrivial problem, candidate-owned judgment, appropriate validation, and an outcome tested against evidence, users, or operational feedback.
- `5`: Multiple independent result loops plus evidence of sound method selection, validation, and revision under real constraints.

Return: `score 0-5`, `foundation gate`, automation baseline, candidate-owned judgment, strongest evidence, missing evidence, highest-value capability question, and confidence. Keep the fast-start gate result separate from the foundation result.
