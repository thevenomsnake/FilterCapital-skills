---
name: investigate-resumes
description: Apply recruiter eligibility gates and investigate resumes from authenticated recruitment URLs or supplied text, reconstruct candidate stories, score ordered evidence modules, test competing explanations, and make small-company hiring decisions for interns and new graduates. Use when screening or comparing resumes in Codex, explaining outcomes, probing credibility or stability, or learning new judgment patterns from recruiter feedback.
---

# Investigate Resumes

Run the investigation in Codex. Treat the resume as an evidence trace, not a list of claims. Discover the story before scoring it.

## Acquire Evidence

- For an authenticated recruitment URL, use the external Chrome plugin and the user's login state. Never use the in-app browser.
- Keep the source system read-only unless the user explicitly approves a specific write-back action.
- Read the role, candidate list, resume text, and existing screening status needed for the task.
- Use network research to enrich high-value unknowns when public context can distinguish project difficulty, role scope, opportunity access, or claim plausibility. Prefer primary sources and purpose-built search/connectors; use Chrome only for authenticated or UI-dependent pages.
- Process candidates one at a time. Do not persist raw resumes, signed URLs, contact details, or browser session data.
- Return results directly in Codex. Do not create a GUI, dashboard, or separate app.

## Run Modules In Order

Read each referenced file completely before applying it. Carry its output into the next module.

0. [Apply eligibility gates](references/00-eligibility.md): run confirmed low-cost hard gates first. Stop immediately on a confirmed failure.
1. [Investigate facts](references/01-investigate.md): reconstruct the timeline, mine public context, test anomalies, and produce competing stories with sourced counterevidence. Do not score or recommend.
2. [Score capability](references/02-capability.md): evaluate evidence depth, audience expectations, statistical foundation, and role capability on `0-5`.
3. [Score trajectory](references/03-trajectory.md): evaluate direction convergence and transition credibility on `0-5`.
4. [Add independent inquiry](references/04-independent-inquiry.md): award a positive-only `0-2` bonus.
5. [Score small-company fit](references/05-small-company-risk.md): evaluate credibility, access, authority-impact fit, and retention risk on `0-5`.
6. [Make the decision](references/06-decision.md): combine the score vector, gates, branch outcomes, and uncertainty.

## Scoring Contract

- Keep the module vector as `capability / trajectory / inquiry bonus / small-company fit`.
- Keep eligibility gates separate from capability evidence and module scores.
- Do not collapse it into a weighted total until recruiter-labeled examples calibrate useful weights and thresholds.
- Let confirmed hard gates and convergent risk branches override module scores only where the references explicitly say so.
- Keep observations, inferences, and decisions visibly separate.

## Knowledge Maintenance

Update only the module that owns a newly confirmed pattern. Keep `SKILL.md` as a stable router. Store reusable judgment logic, not candidate names, raw resume text, or the prompt that elicited the insight.
