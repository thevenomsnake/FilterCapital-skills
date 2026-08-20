# 06 - Make The Decision

Combine the module outputs without inventing a calibrated total score or a cross-candidate rank.

## Score Vector

Report:

`capability 0-5 / trajectory 0-5 / inquiry bonus 0-2 / small-company fit 0-5 or not applicable`

Keep the independent-inquiry bonus separate. It improves confidence and verification targeting but cannot rescue a failed hard gate or convergent unacceptable risk.

## Decision Order

1. Decline immediately when a confirmed low-cost recruiter eligibility gate fails; do not spend time on later modules.
2. Decline when the trajectory module triggers the confirmed small-company intern immediate-capacity continuity stop. It overrides the score vector; report later modules `not run` and do not manufacture zero scores. Keep the dated interval evidence as the only reversal path.
3. Decline when the capability module's minimum sufficient positive evidence gate clearly fails. Missing production experience cannot cause this failure; the complete fact map must lack one high-discrimination, attributable role-capability chain.
4. Decline when the selected profile or recruiter-confirmed context defines a hard specialized role-foundation gate and that gate clearly fails, even if the generic gate passed. The two gates answer different questions and neither overrides the other. Without an activated profile or explicit specialized gate, do not invent this decline branch.
5. Decline when credible explanations converge on unacceptable risk.
6. Require review when explanations lead to different hiring decisions or critical facts are missing.

Then apply one confirmed audience/company branch. If the source does not establish a supported branch, require clarification or return `insufficient information`; do not invent thresholds for another audience or company size.

### Small-Company Intern

- Require the minimum sufficient positive evidence gate to pass before any advance decision. Capability `2`, regardless of trajectory or fit scores, cannot advance without that pass.
- After a pass, use capability depth, candidate-owned judgment, trajectory, fit, and the inquiry bonus to decide the candidate's branch and confidence. Do not require prior production workflow; its presence only increases confidence.
- Within each candidate record, apply the selected profile's qualitative priorities to a complete, attributable work chain (inputs and constraints -> method and rationale -> output -> user, decision, or operational use). Without a profile, use the JD-derived foundation provisionally. Use the result to select that candidate's primary evaluation dimension and the missing proof that matters most; it is not an ordering signal, extra score, or standalone rejection rule.
- Treat the absolute gate as `uncertain` only when source coverage is incomplete or a specific missing fact could plausibly complete an anchored chain; otherwise low-discrimination evidence is a fail, not review by default.
- Treat capability `0-1` or fit `0-1` as decline unless the source material is incomplete, in which case return insufficient information.

### New Graduate

- Require the minimum sufficient positive evidence gate to pass before applying the numeric branch. Then treat capability `4+`, trajectory `3+`, and fit `3+` as an advance signal; use the inquiry bonus to set confidence and the verification target, not to rank candidates.
- Treat capability `3` with no hard failure as review unless role-specific evidence clearly supports advancement.
- Treat capability `0-2` or fit `0-1` as decline unless the source material is incomplete, in which case return insufficient information.

These are provisional operating thresholds. Do not create weighted totals until enough recruiter-labeled cases exist to calibrate them.

When weak or unsubstantiated training evidence and empty project evidence fail both capability gates, report one combined capability reason rather than two deductions. An ordinary education re-entry gap may remain a separate secondary trajectory risk, but it is not the primary decline reason unless the explicit post-work continuity stop triggered.

Keep rule ownership singular. Project specificity and evidence sufficiency belong to capability. Education and training quality belong to capability and the activated profile foundation. Timeline gaps belong to trajectory. Direction mismatch belongs to trajectory, or to a specialized foundation only when the mismatch is about missing role foundation. Decision executes these outcomes and never subtracts the same fact again.

## Candidate-Specific Evaluation

Every candidate record contains exactly one primary evaluation dimension, one direct evaluation, and one concise reason anchored in the decisive evidence. Select the dimension that most affects that candidate's branch:

- a confirmed low-cost gate or immediate-capacity stop -> `eligibility` or `trajectory`;
- an evidence sufficiency, training, or role-foundation problem -> `capability` or `role foundation`;
- a path, credibility, inquiry, or company-context problem -> `trajectory`, `credibility`, `inquiry`, or `company fit`;
- a clean advance with no blocking concern -> the strongest positive capability or role-foundation dimension.

Keep facts, inferences, unknowns, and counterevidence under that evaluation. Do not assign a dimension merely to make a batch look varied; the same dimension may correctly lead more than one record.

## Batch Presentation Without Ranking

Complete every candidate's absolute decision independently before presenting the batch. Emit each record with its own `advance`, `review`, `decline`, or `insufficient information` branch; an empty set of advancing candidates is a valid result.

- After all records are complete, obtain one fresh permutation from a runtime random source (for example, `Get-Random`) and apply it only to display. Do not derive it from scores, names, input order, decision, or recruiter preference; label it `random display order - not a priority`. If no runtime random source is available, say that the order is unshuffled rather than claiming it is random.
- For every candidate, output exactly one `primary evaluation dimension`, a concise evaluation, and its decisive reason. Choose the dimension with the greatest effect on that candidate's branch (for example: eligibility, capability evidence, role foundation, trajectory, credibility, inquiry, or company fit). Do not force dimensions to be unique across the batch.
- Keep the score vector and gate outcomes as diagnostic evidence inside each record. They never become a sortable total or an implicit priority.
- If the user asks who is "best" or requests an interview order, explain that the workflow does not rank; return the independent decisions in random order and state which candidates independently clear the applicable line.
- Re-run only the affected candidate's absolute decision when new evidence arrives, then reshuffle the displayed batch if it is shown again.

## Decision Handoff

Build a decision record before designing an interview question:

1. selected role, role profile or `none`, audience, company context, and hiring motive;
2. input-safety warning or `none found`, with human-review status;
3. advance, review, decline, or insufficient information with confidence;
4. the primary evaluation dimension, concise evaluation, and decisive reason;
5. fact map;
6. anomalies and competing stories with material counterevidence;
7. score vector and gate outcomes;
8. decision-changing unresolved facts from the gate, investigation, capability, trajectory, inquiry, fit, and selected profile outputs.

For each unresolved fact, retain only its resume anchor, owning module, current interpretation, possible decision effect, and the observable evidence that would overturn or confirm it. Do not expose module-level question drafts. Pass this record to `07-verification.md`, then present the completed candidate result.

State the decision immediately after the safety warning. Do not bury a hard failure or material risk below background detail, and do not replace a clear negative conclusion with euphemisms such as `可能不是最优选择` when the evidence supports `decline`.

Never treat an input-safety warning as candidate evidence. When contamination makes the inspected resume incomplete or unreliable, return `insufficient information` and request a clean source instead of forcing a hiring decision.

## Learn From Decisions

Discuss one candidate at a time. Use recruiter prompts to widen the hypothesis search, then store only the confirmed job-relevant pattern.

Update the owning module only:

- evidence or role capability -> `02-capability.md`;
- career choices and convergence -> `03-trajectory.md`;
- independent inquiry bonus -> `04-independent-inquiry.md`;
- credibility, access, retention, or company risk -> `05-small-company-risk.md`;
- aggregation behavior -> this file;
- verification-target selection or answer-update behavior -> `07-verification.md`.

For every new pattern, record supporting observations and counterevidence that prevents overgeneralization. Never store candidate names, raw resumes, or the prompt that elicited the insight.
