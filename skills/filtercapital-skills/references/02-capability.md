# 02 - Score Capability

Score job capability only after reading the investigation output.

## Small-Company Intern Foundation And Transfer Gate

Run this gate only after the investigation case sheets exist. Activate it for a confirmed small-company internship hired for near-term capacity rather than structured cultivation. It estimates whether the candidate can understand a bounded task, learn the local form quickly, and deliver it with limited guidance. It does not require prior employment or production experience.

Return:

- `pass` when the combined evidence shows role-appropriate systematic training or a credible learning path, necessary tool basics, and at least one concrete, attributable project or work chain with problem understanding, execution choices, a usable result, and some correctness check;
- `fail` when the complete fact map shows neither sufficient foundation nor a concrete transferable chain, leaving only labels, skill keywords, adjacent exposure, generic claims, or methods with no demonstrated understanding or result;
- `uncertain` when source coverage, actual duties, or expected work is too incomplete to distinguish those cases;
- `not applicable` when the audience, company, or hiring motive does not activate this branch.

Coursework, competitions, research, public-data projects, and personal projects may supply the primary evidence. Prior production work across the target workflow increases confidence when present; its absence is neutral. Use the selected profile to map foundations and project chains to the target role. Without a profile, derive only a provisional mapping from the JD and recruiter context. Keep this gate separate from the capability score and any specialized foundation gate.

## Automation Baseline

Apply an automation baseline to every project and role. Assume a competent operator can use current AI and standard tools, then separate:

- **Commodity execution:** standard research or synthesis, template-based content or design, routine data or spreadsheet work, common code scaffolding, assembling familiar deliverables, applying a known method to prepared inputs, and producing a polished work sample. This is real evidence of workflow familiarity, tool fluency, and basic delivery discipline, but it has low discriminatory value.
- **Candidate-owned judgment:** framing an ambiguous problem, defining success and constraints, choosing or challenging inputs and criteria, handling missing or conflicting information, selecting among methods, testing competing explanations, designing validation, catching tool errors, revising a conclusion, adapting when a material condition changes, and influencing a real decision or iteration.

Evaluate the residue: if the visible deliverable were produced from a short prompt, template, or standard tool workflow, what material decision, discovery, verification, or consequence remains attributable to the candidate? Use that residue to determine evidence depth while retaining commodity execution as lower-value process evidence.

When that residue is unclear, record a capability verification lead around the smallest missing piece among a decision the tools could not make, a rejected alternative, a detected error, validation, changed conditions, or downstream consequence. Do not ask the whole checklist. A generic retelling of implementation steps adds no new evidence.

Treat AI use itself as neutral. This baseline measures how discriminating the evidence is; it does not imply that the candidate used AI. Verified decomposition, error detection, and accountable use of AI may themselves support candidate-owned judgment.

Do not infer weaker thinking from age, graduation cohort, or long-term access to AI. Apply the same automation baseline to every candidate and judge only attributable framing, decisions, verification, correction, and transfer to changed conditions.

Cap a work sample at Level 2 when public or prepared inputs and routine deliverables make it reproducible from a short prompt or template, unless the resume shows candidate-owned judgment, a material real-world constraint, or feedback that changed the work. Count a long tool list, many workflow stages, and repeated routine checks once rather than as independent evidence. A simple work sample may still be strong when its reasoning and validation are deep.

### Artifact Provenance And Ownership

Using public, shared, template, open-source, or tool-assisted material is neutral. Evaluate four independent dimensions: presentation or hosting location, source and pre-existing material, candidate contribution and judgment, and validation or downstream use. Mark a dimension `not applicable` when the medium has no such layer, and `unknown` only when the evidence should exist but is missing. Ambiguous attribution language is a light communication/self-presentation signal only; by itself it cannot lower capability, prove copying, or trigger decline.

Work built on pre-existing material remains low-discrimination evidence when the source, starting state, change scope, candidate-owned decisions, validation, or changed result is unclear; it is normally capped at Level 2 or classified as `guided reproduction`/`commodity workflow`. Do not infer copying from missing detail. It may exceed that ceiling when the candidate can attribute concrete transformations, rejected alternatives, validation, and result changes. Use medium-appropriate evidence such as revisions, version history, decision records, before/after artifacts, stakeholder feedback, or operating results. Forward the smallest unresolved ownership distinction as a verification lead rather than emitting a generic multi-part question.

## Evidence Depth

- **Level 0:** Skill keyword, self-assessment, course, or institution name without usage.
- **Level 1:** Participation is described but task, method, ownership, and output are unclear.
- **Level 2:** A specific task and attributable execution or artifact are present, but candidate-owned judgment, validation, or downstream effect remains shallow or unclear.
- **Level 3:** Candidate-owned judgment, result, appropriate validation, and an evidence-tested or externally tested effect form a credible loop.

Execution coverage is not evidence depth. A public or template-based work sample can list many tools and stages yet remain Level 2 at most when it shows no non-obvious candidate decision. Do not count one result at full strength in several areas. Downgrade quantified claims without baselines, measurement details, or ownership boundaries.

### Education And Training Evidence

Treat institution, country, degree, and major names as labels, not training quality. Evaluate the strongest verifiable combination of entry prerequisites or selection, curriculum and course rigor, program duration, training density, assessed work, and attributable outputs. Do not automatically raise the signal for an overseas degree or a target-sounding program name. When these details are missing, mark training quality `unknown` rather than inventing a precise tier or assuming strength.

School or program reputation may provide context only when supported by relevant, current evidence about the actual program. It cannot replace coursework and candidate work. A selective or technically demanding program still cannot compensate for empty project evidence, while a less selective or shorter program can be supplemented by rigorous, attributable projects and outputs.

Treat a project as `empty evidence` when it contains only tools, model names, broad goals, or claims such as completed, validated, or optimized, without enough detail to identify the problem, inputs or data structure, candidate action, material choices, checking or validation method, error control, and a concrete result or consequence. Advanced terminology does not increase evidence depth. When training quality is weak or unsubstantiated and all role-relevant projects are empty evidence, return capability `0-1` and fail any activated gate that requires foundation plus a concrete project chain. Production experience remains irrelevant to this failure.

### Duties Over Labels

Assign capability evidence from described responsibilities and attributable outputs, not from a major, department, project, or position name. A label containing terms associated with the target role cannot imply unlisted tools, data forms, decisions, workflow stages, or ownership. Credit each transferable fragment at the depth actually shown, including document cleaning, text classification, record maintenance, labeling, coordination, or another adjacent process; do not promote it into a different workflow and do not erase it because it is only adjacent.

For interns, missing production SQL, recurring reports, monitoring, quality operations, or comparable on-the-job routines is neutral. Such experience adds fast-start confidence when present; its absence is not a deduction, ceiling, or failure. Coursework, competitions, research, public-data work, and personal projects may be the primary capability evidence. Do not cap them merely because they are non-production; apply the automation baseline only when candidate-owned problem definition, choices, validation, correction, or consequences are missing.

## Audience Expectations

### Intern

For a small-company intern hired as near-term capacity, apply the foundation-and-transfer gate first. After it passes, rank by role-relevant foundation, candidate-owned judgment, learning capacity, and concrete execution. Accept coursework, personal projects, competitions, clubs, research, volunteering, and internships. Do not require formal work or production impact.

### New Graduate

Require at least one concrete practice or delivery. Without real-context or end-to-end evidence, do not award the highest capability score.

### Ranking Signals Within The Passing Pool

For every target role, load its matching profile when available and use that profile's foundation and qualitative priorities. Without a profile, derive only a provisional foundation from the JD and recruiter context. Then rank candidates who clear the applicable gates by that role-relevant foundation and the completeness of their own problem chain. Concrete work that identifies inputs or constraints, method choice, output, and user, decision, or operational use should outrank adjacent exposure, generic tool lists, and vague work-sample titles. A missing formal internship is not a reason to mechanically downgrade this combination; coursework, personal projects, competitions, research, volunteering, or other settings can be sufficient when the work is specific and attributable.

Specificity improves evidence discrimination but does not erase the automation baseline: externally supplied or easily reproducible work still needs candidate-owned definitions, judgment, validation, correction, and a consequential result before it supports higher capability depth.

## Role Profile Overlay

When the selected profile defines a specialized foundation gate, run it independently from the generic foundation-and-transfer gate and return `pass`, `fail`, or `uncertain` using only that profile's evidence rules. Passing one gate does not prove the other.

When no profile matches and the recruiter has not explicitly confirmed a foundation gate, return `not applicable`. Do not invent a hard gate or import another profile's professional standards.

## Capability Score

- `0`: No relevant evidence or an applicable role-foundation gate clearly fails.
- `1`: Relevant claims only.
- `2`: Basic workflow experience or commodity execution with attributable delivery but shallow personal judgment.
- `3`: At least one role-relevant practice with an attributable judgment beyond the automation baseline, but an incomplete or weakly verified result loop.
- `4`: One credible result loop linking a nontrivial problem, candidate-owned judgment, appropriate validation, and an outcome tested against evidence, users, or operational feedback.
- `5`: Multiple independent result loops plus evidence of sound method selection, validation, and revision under real constraints.

Return: `score 0-5`, `small-company intern foundation-and-transfer gate`, `applicable specialized foundation gate or not applicable`, education and training evidence, automation baseline, candidate-owned judgment, strongest evidence, missing evidence, the capability uncertainty most worth verifying, and confidence. Keep both gates separate from the capability score and from each other. Supply a verification target to the decision module; do not treat it as an additional final interview question.
