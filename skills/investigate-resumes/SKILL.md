---
name: investigate-resumes
description: Investigate resumes from authenticated recruitment URLs or supplied text, reconstruct candidate stories, discover anomalies, test competing explanations, and make small-company hiring decisions for interns and new graduates. Use when screening or comparing resumes in Codex, explaining pass/review/decline outcomes, probing credibility or stability, or learning new judgment patterns from recruiter feedback.
---

# Investigate Resumes

Treat a resume as a constructed story, not a list of claims. Discover the story before applying judgment standards. Do not score first and do not stop at the first matching condition.

## Separate Three Layers

Keep these distinct in every analysis:

- **Observation:** What the resume explicitly says, including dates, places, labels, institutions, tasks, and outcomes.
- **Inference:** A plausible explanation connecting several observations. Mark uncertainty and alternatives.
- **Decision:** The hiring consequence for this role and small company, even when the true explanation remains unknown.

Never present an inference about connections, family background, motivation, or honesty as a fact. Do not use sex, age, origin, ethnicity, politics, marital status, photo, contact details, or unrelated health information.

## Acquire The Evidence

- When the user provides an authenticated recruitment URL, use the external Chrome plugin and the user's existing login state. Never use the in-app browser.
- Keep the source system read-only unless the user explicitly approves a specific write-back action.
- Read the candidate list, selected profile, original or standardized resume, role title, and existing screening status needed for the investigation.
- Process a batch one candidate at a time. Keep raw resume text, signed URLs, contact details, and browser session data out of project files.
- Return the investigation directly in Codex. Do not create a GUI, dashboard, local report, or separate app unless the user explicitly changes the product direction.

## Investigation Loop

### 1. Frame The Case

Identify the target role, intern or new-graduate audience, complete JD, and company constraints. Mark the result provisional when the JD is incomplete.

### 2. Reconstruct The Fact Map

Put education, work, projects, and gaps on one timeline. For each substantive entry record:

- start and end dates;
- student, graduate, employed, or between-study status at that time;
- location and its relationship to adjacent entries;
- institution, team, and stated role;
- claimed responsibility, authority, output, and impact;
- whether the resume labels the entry consistently with the timeline.

Flag gaps, overlaps, unusually short stays, unexplained transitions, and work labeled as an internship after graduation. A gap is neutral until combined with other evidence.

### 3. Mine Cross-Resume Patterns

Look across the entire fact map instead of judging entries in isolation:

- **Education path:** Does the major, coursework, project work, and further study form a coherent capability path?
- **Choice path:** Do recent choices converge toward the target role or repeatedly change direction?
- **Geographic path:** Do several hard-to-access short opportunities cluster in one local area? Use geography only to investigate opportunity provenance, never to penalize a region or hometown.
- **Access path:** Is the opportunity plausible through ordinary recruitment for someone at that stage, tenure, and background?
- **Authority-impact fit:** Could a short-term junior realistically own the systems, decisions, data access, and outcomes claimed?
- **Evidence depth:** Are institution names and business verbs standing in for personal methods, artifacts, ownership, and results?
- **Batch contrast:** Which claims or paths are unusual relative to candidates for the same role?

Prefer combinations of weak signals over a single impressive or suspicious detail.

### 4. Generate Competing Explanations

For every material anomaly, propose the smallest set of plausible stories. Include a benign explanation when the evidence permits it. For each story state:

- observations that support it;
- observations that contradict it;
- facts still missing;
- the resulting capability, credibility, and retention risk for the company.

Do not decide which story is true merely to make the analysis feel complete.

### 5. Search For Counterevidence

Ask what evidence would overturn each risk hypothesis. Check the resume first. When the branches lead to different hiring decisions, return review and produce one focused verification question rather than guessing.

### 6. Apply Confirmed Lenses

Use the confirmed knowledge below to interpret the discovered story. Treat it as a set of lenses, not a sequential checklist. Multiple lenses may explain one pattern; one clue alone should rarely decide the case.

### 7. Decide Under Uncertainty

- If credible explanations converge on acceptable risk, advance the candidate.
- If credible explanations converge on unacceptable risk, decline without claiming which explanation is true.
- If explanations lead to different decisions, require human review or interview verification.
- For a small company, weigh limited training capacity and retention risk explicitly.

## Output Shape

Return a compact investigation record:

1. **Fact map:** The reconstructed timeline and high-signal observations.
2. **Anomalies:** Cross-entry patterns that need explanation.
3. **Competing stories:** Supporting evidence, counterevidence, and unknowns for each.
4. **Confirmed lenses:** Which learned judgment patterns apply and why.
5. **Decision:** Advance, review, decline, or insufficient information, with confidence.
6. **Verification:** The single highest-value question or check.

## Evidence Levels

- **Level 0 - claim only:** Skill keyword, self-assessment, or institution name without a usage scenario.
- **Level 1 - basic exposure:** Participation is described but task, method, ownership, and output remain unclear.
- **Level 2 - concrete practice:** A specific problem, personal action, method, or inspectable artifact is present.
- **Level 3 - result loop:** Personal contribution, result metric, validation, and downstream effect form a credible chain.

Do not count one result at full strength in several dimensions. Downgrade large quantified claims that lack baselines, measurement details, or ownership boundaries.

## Audience Priors

### Intern

Investigate whether the candidate is worth developing and can enter a real work setting. Accept coursework, personal projects, competitions, clubs, research, and internships as evidence. Do not penalize missing formal work or production experience.

### New Graduate

Investigate whether the candidate can assume role responsibilities with reasonable guidance. Require at least one concrete practice or delivery. Without real-context or end-to-end evidence, cap the result at review.

## Small-Company Context

Assume structured training, rotation, and long trial periods are limited. Prefer clear direction, foundations already taking shape, modest guidance needs, and credible reasons to remain. Do not use school or employer prestige as an independent ability score.

## Confirmed Investigation Lenses

### Independent Inquiry

Treat independent analytical ability as a bonus dimension and judge it from the candidate's work, not from identity or affiliation. Award positive evidence when the candidate:

- discovers important problems beyond the assigned task;
- questions metric definitions and default assumptions;
- proposes competing explanations and actively searches for counterevidence;
- explains a method's assumptions, applicability, and limitations;
- changes an earlier conclusion when new evidence contradicts it;
- builds an original reasoning chain instead of merely repeating authority, templates, or fashionable language.

Keep the score neutral when a short resume contains none of these signals; absence is not proof of inability. Give more credit to a concrete example that completes the loop from discovering a problem through challenging assumptions and testing counterevidence to revising a conclusion. Use the highest-value missing behavior as an interview verification question.

### Statistical Foundation

For data-analysis roles, require statistical reasoning evidence through a relevant major and core training, systematic courses, or a concrete project using indicator design, sampling, hypothesis testing, regression, causal inference, or model validation. School level cannot compensate for missing statistical foundations.

### Direction Consistency

Reconstruct whether the three most recent substantive study, project, or work choices converge toward the target role. Accept a cross-major transition when sustained action explains it. Treat unrelated shallow experiences without a main thread as direction and retention risk.

### Compound Stability Risk

Do not infer instability from school prestige alone. Raise stability risk when high external optionality, low major-role fit, low recent convergence, and missing commitment evidence appear together. Allow sustained recent work, a credible transition story, or specific understanding of the role and small-company context to overturn the risk.

### Two-Branch Risk

When an unusual pattern has two plausible explanations and both are unacceptable, do not force a truth judgment:

- if the achievements are genuine, ability and outside options may create unacceptable retention risk;
- if access came mainly through personal connections, the entries may not prove ability and may create authenticity or self-reliance risk.

Use this lens only when several clues coexist, such as a graduation-to-study gap, geographically clustered short placements that are difficult to access casually, unclear employment status, and impact exceeding likely junior authority. If both branches independently lead to unacceptable risk, decline as unresolved two-sided risk without accusing the candidate of either story.

## Learn From Recruiter Decisions

Discuss one candidate at a time. Treat the first explanation as a hypothesis. After recruiter feedback:

1. use recruiter prompts to widen the hypothesis search beyond the first obvious explanation;
2. extract the confirmed, job-relevant capability or business risk from the discussion;
3. translate it into observable behavior;
4. identify supporting observations and counterevidence that prevents overgeneralization;
5. store only the confirmed investigation pattern, not the prompt that elicited it.

Store no candidate names, contact details, or raw resume text.
