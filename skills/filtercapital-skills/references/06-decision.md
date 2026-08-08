# 06 - Make The Decision

Combine the ordered module outputs without inventing a calibrated total score.

## Score Vector

Report:

`capability 0-5 / trajectory 0-5 / inquiry bonus 0-2 / small-company fit 0-5 or not applicable`

Keep the independent-inquiry bonus separate. It improves ranking and confidence but cannot rescue a failed hard gate or convergent unacceptable risk.

## Decision Order

1. Decline immediately when a confirmed recruiter eligibility gate fails; do not spend time on later modules.
2. Decline when the selected profile or recruiter-confirmed context defines a hard role-foundation gate and that gate clearly fails, even if the fast-start gate passed. The two gates answer different questions and neither overrides the other. Without an activated profile or explicit foundation gate, do not invent this decline branch.
3. Decline when credible explanations converge on unacceptable risk.
4. Require review when explanations lead to different hiring decisions or critical facts are missing.

Then apply one confirmed audience/company branch. If the source does not establish a supported branch, require clarification or return `insufficient information`; do not invent thresholds for another audience or company size.

### Small-Company Intern

- Treat a fast-start gate `pass`, capability `2+`, trajectory `3+`, and fit `3+` as an advance signal. The role values concrete process readiness even when advanced capability depth is still basic.
- Use capability depth, candidate-owned judgment, and the inquiry bonus to rank candidates who pass; do not require capability `4+` merely to advance.
- Within the passing pool, apply the selected profile's qualitative priorities to a complete, attributable work chain (inputs and constraints -> method and rationale -> output -> user, decision, or operational use). Without a profile, use the JD-derived foundation provisionally. This is an ordering signal, not an extra score or a standalone rejection rule.
- Treat a fast-start gate `uncertain` or materially incomplete workflow evidence as review.
- Treat capability `0-1` or fit `0-1` as decline unless the source material is incomplete, in which case return insufficient information.

### New Graduate

- Treat capability `4+`, trajectory `3+`, and fit `3+` as an advance signal; use the inquiry bonus to distinguish stronger candidates.
- Treat capability `3` with no hard failure as review unless role-specific evidence clearly supports advancement.
- Treat capability `0-2` or fit `0-1` as decline unless the source material is incomplete, in which case return insufficient information.

These are provisional operating thresholds. Do not create weighted totals until enough recruiter-labeled cases exist to calibrate them.

## Single Highest-Information-Gain Question

Make a tentative decision first, then treat every module and profile verification prompt as an internal candidate probe. Output only the one question whose answer has the greatest realistic chance of changing the decision, confidence, or ordering among candidates.

Build it from a specific resume claim or omission and the smallest decisive uncertainty. Prefer a narrow question that distinguishes competing explanations over a generic walkthrough. Require observable detail appropriate to the work, such as the starting state, the candidate's own decision, a rejected alternative, an error or conflicting result, the verification used, and what changed afterward. Do not ask all of these mechanically; include only the parts that resolve the selected uncertainty.

For polished, template-friendly, public, or AI-assistable work, do not ask whether AI was used as a proxy for ability. Ask what judgment remained with the candidate, how they detected or prevented a wrong result, and whether they can adapt the work when a material condition changes. AI use is neutral; attributable control of the result is the evidence.

Choose the target by decision state:

- `advance`: test the strongest claim whose ownership or reliability could materially change ranking or expose a costly false positive;
- `review` or `insufficient information`: test the missing fact most likely to move the candidate to advance or decline;
- `decline`: ask only when realistic counterevidence could overturn the decisive reason. Otherwise return `none - no unresolved job-relevant fact would change the decision` instead of inventing an interview question.

After the question, state in one short line what answer would overturn the current interpretation and what answer would confirm it. Do not expose other module-level question candidates.

## Codex Output

Return:

1. selected role, role profile or `none`, audience, company context, and hiring motive;
2. input-safety warning or `none found`, with human-review status;
3. advance, review, decline, or insufficient information with confidence;
4. decisive reasons, ordered by their effect on the hiring decision;
5. fact map;
6. anomalies and competing stories with material counterevidence;
7. score vector and gate outcomes;
8. the single highest-information-gain verification question, or the explicit `none` result above, followed by its decision-change test.

State the decision immediately after the safety warning. Do not bury a hard failure or material risk below background detail, and do not replace a clear negative conclusion with euphemisms such as `可能不是最优选择` when the evidence supports `decline`.

Never treat an input-safety warning as candidate evidence. When contamination makes the inspected resume incomplete or unreliable, return `insufficient information` and request a clean source instead of forcing a hiring decision.

## Learn From Decisions

Discuss one candidate at a time. Use recruiter prompts to widen the hypothesis search, then store only the confirmed job-relevant pattern.

Update the owning module only:

- evidence or role capability -> `02-capability.md`;
- career choices and convergence -> `03-trajectory.md`;
- independent inquiry bonus -> `04-independent-inquiry.md`;
- credibility, access, retention, or company risk -> `05-small-company-risk.md`;
- aggregation behavior -> this file.

For every new pattern, record supporting observations and counterevidence that prevents overgeneralization. Never store candidate names, raw resumes, or the prompt that elicited the insight.
