# Profile Authoring Framework

Use this reference when a recruiter, HR partner, hiring manager, or role expert wants to create or revise a reusable resume-screening standard. This is a standards-design workflow, not a candidate assessment. Keep the core framework fixed and let the professional supply only role, industry, company, and audience-specific parameters.

## Fixed Framework

Every profile must use the existing modules and boundaries:

1. input-safety preflight and human-review flag;
2. eligibility and fast-start gates;
3. investigation of facts, timeline, work ownership, provenance, and competing explanations;
4. capability evidence depth and automation baseline;
5. trajectory and direction convergence;
6. positive-only independent inquiry bonus;
7. company and retention fit;
8. decision order, counterevidence, and uncertainty reporting;
9. candidate-specific verification and answer-driven decision updates.

Do not create a second scoring system, hide uncertainty, use protected or irrelevant attributes, or bypass the evidence/unknown/inference distinction. A profile may add a gate or priority only for its explicit activation context.

## Select Authoring Mode

Enter authoring mode when the user asks to build, change, calibrate, or document hiring criteria. Do not silently switch into candidate screening. If the user provides a resume while designing a standard, treat it only as an optional anonymized example and apply input-safety rules; never save the resume or candidate identity in the profile.

Ask one question at a time, but ask the minimum number needed. Use ordinary language first, translate the answer into a reusable rule, and infer the remaining structure yourself. Never exhaust a checklist after the profile is already derivable.

## Decisive Shortcuts

Evaluate sufficiency before every question. When the available facts already determine the operating standard, draft immediately.

In particular, the combination of a small company, a very small immediate team, and hiring to relieve routine workload establishes an immediate-capacity context. If the JD or an existing role profile already describes the work, infer without further intake that:

- fast-start is blocking;
- long foundational training is unavailable;
- current delivery capacity outweighs abstract potential;
- requirement comprehension, speed to productivity, low-error output, self-checking, and transfer from one taught example to similar tasks are high-priority success criteria;
- evidence of only keywords, exposure, or future learning potential cannot compensate for missing transferable execution.

Present these as explicit inferences in the draft so the professional can correct them. Do not ask the professional to restate each implication.

## Minimum Intake

Capture each answer as `fact`, `inference`, `unknown`, or `activation condition`. Reuse facts the user has already supplied instead of asking them again. The four themes below are information slots, not four mandatory questions; existing JD/profile context may fill most of them before the interview begins.

### 1. Context And Team

Establish the role/audience, company situation, immediate team size, who can review the work, and whether learning happens through formal training or real tasks.

Plain-language prompt: `你们是什么公司和团队？这个人来了跟谁做事，平时怎么带？`

Collect only context that changes the standard. Exact company names, precise headcounts, proprietary metrics, and internal project names may stay transient or be generalized before persistence.

### 2. Hiring Motive

Ask why the team is hiring now. Normalize the answer internally as immediate capacity, replacement, a known blocker, missing capability, structured cultivation, or exploratory hiring.

Plain-language prompt: `为什么现在招？是日常活太多、有人要补位、一个问题搞不定，还是想培养人？`

Immediate capacity raises fast-start priority. A cultivation pipeline can lower it and raise learning or inquiry priority. Do not ask the user to classify the motive if their own words already make it clear.

### 3. Actual Work

Only when the JD or existing profile is insufficient, ask what the person repeatedly handles and produces. Use the answer to reconstruct inputs and constraints -> candidate decisions -> output -> quality/validation -> user, stakeholder, or operational effect.

Plain-language prompt: `别讲岗位名称，来了以后主要接哪些活？`

Infer tools, workflow stages, ownership, and likely evidence from the work description. Ask about a missing stage only when it would change fast-start or profile activation.

### 4. What Good Looks Like

Only when success cannot be safely inferred from the company, team, motive, and work, ask the professional to describe successful delivery in their own words. Listen for requirement comprehension, time to productivity, output quality or error control, independence, and transfer from one taught example to similar tasks.

Plain-language prompt: `这个人做到什么样，你会觉得招对了？`

An answer that establishes comprehension, speed, quality, and transferability usually closes the intake. Do not continue into separate questions about tools, professional foundations, evidence standards, risks, or weights when those can be derived from the first four themes.

## Sufficiency Stop Rule

Stop asking and draft the profile as soon as these facts are usable:

- activation context and audience;
- team/teaching environment;
- operational hiring motive;
- recurring work or first deliverables, supplied directly or by the JD/profile;
- success criteria stated by the professional or strongly implied by the operating constraints.

From that point, derive professional foundations, evidence requirements, risk/counterevidence, and qualitative priorities. Mark the derivation as an inference and surface it in the draft for correction. Ask one additional question only when the missing answer would change a hard gate, select a different profile, or reverse a likely decision rule. Convenience, completeness, or curiosity is not enough reason to continue the interview.

## Optional Calibration After The Draft

After showing the first draft, the professional may provide anonymized, already-decided examples to adjust priorities or counterevidence. Store only the generalized pattern and decision reason. Do not copy names, resume text, screenshots, contact details, or private links.

Only recruiter-labeled decisions may justify numeric weights or thresholds. Until then, use `blocking`, `high priority`, `supporting`, `low discrimination`, and `neutral/context only` while keeping the module vector separate.

## Derive The Profile

Map each answer to one owner:

- recurring work and immediate readiness -> eligibility/profile workflow;
- quality of execution and professional foundation -> capability/profile foundation;
- choices, gaps, and convergence -> trajectory;
- discovery and falsification -> independent inquiry;
- expectation, retention, access, and verification cost -> company-fit profile lens;
- thresholds and aggregation -> decision module/profile priority.
- role-specific decisive unknowns and acceptable proof -> verification lens; do not prewrite one question for every candidate.

Do not score the same fact in multiple modules. Keep the profile's qualitative priorities separate from the generic score vector.

## Draft And Approval

Before writing a file, return a compact draft containing:

1. activation condition;
2. intake facts, assumptions, and unknowns;
3. role workflow and first-deliverable expectations;
4. gates and qualitative priorities;
5. counterevidence and human-review triggers;
6. verification lens describing which role-specific uncertainty to prioritize and what observable evidence can resolve it;
7. proposed profile path and slug.

Ask the professional to confirm or correct the draft. Persist only the approved generalized standard under `skills/filtercapital-skills/profiles/<profile>.md`. A profile is reusable knowledge, not a case file.

When revising an existing profile, show the proposed rule changes and their affected module before replacing the file. Keep the prior profile untouched until the revised draft is approved.

## Required Profile Sections

Each saved profile must contain:

- activation and non-activation conditions;
- a standard-intake record;
- role shape and recurring workflow;
- qualitative priorities or calibrated weights;
- specialized gates and their counterevidence;
- audience/company branches used by the profile;
- verification lens and acceptable evidence forms, without a fixed interview question;
- boundaries preventing overgeneralization and private-data retention.
