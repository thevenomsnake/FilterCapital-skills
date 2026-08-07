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
8. decision order, counterevidence, and uncertainty reporting.

Do not create a second scoring system, hide uncertainty, use protected or irrelevant attributes, or bypass the evidence/unknown/inference distinction. A profile may add a gate or priority only for its explicit activation context.

## Select Authoring Mode

Enter authoring mode when the user asks to build, change, calibrate, or document hiring criteria. Do not silently switch into candidate screening. If the user provides a resume while designing a standard, treat it only as an optional anonymized example and apply input-safety rules; never save the resume or candidate identity in the profile.

Ask one question at a time. Use ordinary language first, then translate the answer into a reusable rule. Do not ask for a score before the work and evidence model is clear.

## Intake Questions

Capture each answer as `fact`, `inference`, `unknown`, or `activation condition`.

### 1. Hiring Context

- What role and level are you hiring for?
- Is this an intern, new graduate, or another audience supported by the project?
- What kind of company and operating environment is this? What should remain unknown until confirmed?

Plain-language prompt: `你们是什么公司、什么阶段、团队大概多大？这个人是给哪个团队补什么位置？`

Collect only context that changes the standard. Exact company names, precise headcounts, proprietary metrics, and internal project names may stay transient or be generalized before persistence.

### 2. Team Capacity

- How many people are on the immediate team?
- Who can review or teach the new hire, and how much time is realistically available?
- Is there a documented training program, or is the person expected to contribute quickly?

Plain-language prompt: `团队多少人？谁能带？每天能花多少时间教？还是来了就要接活？`

### 3. Hiring Motive

Record the operational motive in the user's own words, then normalize it into one or more categories:

- immediate capacity or routine workload relief;
- temporary replacement or coverage;
- a known blocker or unresolved problem;
- a new capability the team does not have;
- a structured cultivation pipeline;
- exploratory or future hiring.

Plain-language prompt: `为什么现在招？是缺人做杂活、有人离开、卡在一个问题上，还是准备培养人？`

Do not treat these categories as interchangeable. Immediate capacity raises fast-start priority; a cultivation pipeline can lower it and raise learning or inquiry priority.

### 4. Actual Work

- What does the person do repeatedly each week?
- What are the first deliverables in the first 30-90 days?
- Which inputs, tools, stakeholders, permissions, quality checks, and decisions are part of the work?
- What is explicitly outside the role?

Plain-language prompt: `别讲岗位名称，来了以后每天具体做什么？第一个月要交付什么？`

Translate the answer into a role workflow: inputs and constraints -> candidate decisions -> output -> quality/validation -> user, stakeholder, or operational effect. Adapt the stages; do not force a data, software, or research vocabulary onto another role.

### 5. Professional Foundation

- Which knowledge or reasoning must already exist on day one?
- Which skills are teachable within the available onboarding period?
- How much does formal education matter compared with demonstrated work?

Plain-language prompt: `哪些东西不会就没法做？哪些可以来了再教？专业基础到底是硬门槛，还是只是加分？`

This answer determines whether the profile uses a blocking foundation gate, a high-priority ranking signal, or only a supporting signal. Never assume that statistical training, a degree, or a tool is universally important.

### 6. Evidence Standard

- What resume evidence proves the person has done the work?
- What evidence is only exposure, participation, a keyword, a template reproduction, or a polished claim?
- What is the smallest missing fact that would change the decision?

Require attributable actions, relevant constraints, decisions, quality or validation, and a usable result when the role needs them. Keep public, shared, template, and AI-assisted work neutral while limiting its discrimination when personal contribution is unclear.

### 7. Risk And Counterevidence

- Which risks matter: time to productivity, direction, retention, expectation mismatch, credibility, access, or verification cost?
- What evidence would overturn each concern?
- Which facts are unknown rather than negative?

Plain-language prompt: `什么情况会让你不想继续？什么反证出现以后，你会改变判断？`

Every negative rule must include a counterevidence boundary. Do not turn a school, industry, wording habit, gap, or one unusual choice into a standalone character or ability conclusion.

### 8. Priority And Calibration

Ask the professional to order, rather than immediately number, the signals:

- blocking;
- high priority;
- supporting;
- low discrimination;
- neutral/context only.

Only after recruiter-labeled decisions exist should a profile introduce numeric weights or thresholds. Until then, keep the module vector separate and explain which signal wins when evidence conflicts.

### 9. Existing Decisions

Ask for a few anonymized, already-decided examples if available. Store only the generalized pattern and why the professional accepted or rejected it. Do not copy names, resume text, screenshots, contact details, or private links.

## Derive The Profile

Map each answer to one owner:

- recurring work and immediate readiness -> eligibility/profile workflow;
- quality of execution and professional foundation -> capability/profile foundation;
- choices, gaps, and convergence -> trajectory;
- discovery and falsification -> independent inquiry;
- expectation, retention, access, and verification cost -> company-fit profile lens;
- thresholds and aggregation -> decision module/profile priority.

Do not score the same fact in multiple modules. Keep the profile's qualitative priorities separate from the generic score vector.

## Draft And Approval

Before writing a file, return a compact draft containing:

1. activation condition;
2. intake facts, assumptions, and unknowns;
3. role workflow and first-deliverable expectations;
4. gates and qualitative priorities;
5. counterevidence and human-review triggers;
6. highest-value interview question;
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
- highest-value verification question;
- boundaries preventing overgeneralization and private-data retention.
