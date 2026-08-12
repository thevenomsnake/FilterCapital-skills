# 03 - Score Trajectory

Evaluate whether the candidate's choices form a credible path toward the target role.

Use the three most recent substantive study, project, or work entries as the primary window, while checking the full timeline for context.

## Positive Signals

- increasingly relevant choices;
- deeper responsibility or capability over time;
- a cross-major transition explained by sustained action;
- gaps used for work, study, or projects that strengthen the same direction.

## Risk Signals

- unrelated experiences without a main thread;
- repeated shallow exposure with no accumulation;
- an application unsupported by either the major or recent work;
- transitions whose stated story conflicts with dates or choices.

A gap, school name, or short role is not negative alone.

## Education Re-Entry Gap

Use the fact from the investigation module: a degree-completion-to-next-enrollment interval of about 12 months or longer, with no documented work, internship, project, research, skill output, or other relevant accumulation. Keep three layers separate:

- **Fact:** the month interval and the absence of listed activity;
- **Recruiting inference:** by default, treat the unexplained interval as likely an additional preparation or re-entry attempt when screening the path; this is an operational inference, not a proven reason;
- **Counterevidence:** dated, verifiable work, internship, relevant project, formal research, skill output, or other role-relevant accumulation that explains the interval and reduces or overturns the penalty.

An unexplained education re-entry gap of about a year or more materially lowers trajectory; without counterevidence it normally should not score above `3`. When it co-occurs with a cross-major transition, an unproven transfer into the target role's work framework, or weak recent practice, treat the combination as severe and usually score `0-2` or require review under the decision branch. Do not invoke health, family, or other unrelated personal explanations.

## Post-Work Re-Entry Continuity Stop

Immediately after investigation, evaluate this scene-specific stop before capability scoring. This module exclusively owns it. Return `triggered`, `not triggered`, `uncertain`, or `not applicable` before the ordinary trajectory score.

Trigger it only when all conditions hold:

- the audience is an intern, the company is small, and the confirmed hiring motive is immediate working capacity rather than structured cultivation;
- the candidate completed a degree and then entered verifiable post-graduation employment or a sustained work-like engagement;
- after the last qualifying activity ended, about 18 months or more elapsed before a later enrollment; qualifying activity means actual work or a comparable sustained role-related output, not a brief or undated exercise;
- the exact interval contains no dated, verifiable actual work, research, project, or comparable sustained role-related output.

Keep the layers separate. The fact is the boundary events, month count, and absence of documented activity. The operational recruiting inference may be prolonged preparation or a repeated re-entry attempt, but it is not a proven cause. The hiring conclusion is that a small team seeking immediate capacity cannot absorb the restart cost implied by a long, unexplained withdrawal from work and substantive practice.

When triggered, return `immediate-capacity continuity stop`, decline, skip capability, inquiry, and small-company-fit scoring, and pass only the dated gap counterevidence as a verification lead. Do not also apply the ordinary education-gap score or subtract the same fact in another module. Dated, verifiable actual work or a comparable sustained role-related output inside the interval can overturn or reduce the stop. Mark it `uncertain` when date precision or activity coverage cannot establish the interval. Do not activate it for a continuous education path, a shorter transition, another audience or company motive, or a gap before any post-graduation work.

Do not use ordinary trajectory scoring to repeat a foundation-and-transfer failure or capability weakness. Any education re-entry gap that does not satisfy every continuity-stop condition, including a gap of roughly 15 months, remains a path-risk input under the earlier rule rather than a stop. It must not duplicate an independently decisive capability reason.

## Trajectory Score

- `0`: No coherent path and material contradictions.
- `1`: Highly scattered choices with no credible transition.
- `2`: Mostly unrelated choices with weak recent convergence.
- `3`: A plausible transition or mixed path that now points toward the role.
- `4`: Clear recent convergence with increasing depth.
- `5`: Sustained, deliberate progression toward the role across several choices.

Return: the continuity-stop result; when it is not triggered, return `score 0-5`, reconstructed choice path, convergence evidence, contradictions, at most one decision-changing trajectory uncertainty with overturning and confirming evidence, and confidence.
