# 00 - Apply Eligibility Gates

Apply confirmed low-cost recruiter gates before full resume investigation. The purpose is to avoid spending research and review time on candidates who cannot advance.

## Select The Gate Profile

Record the target role, intern or new-graduate audience, company context, and hiring motive before applying audience-specific gates. This version defines a fast-start gate only for small-company interns; do not invent medium-company, large-company, or experienced-hire behavior.

## Small-Company Intern Fast-Start Gate

For a small-company internship, assume the opening exists to add near-term working capacity unless the recruiter identifies a formal training program. Require evidence that the candidate can take a bounded daily task with little onboarding.

Mark this gate:

- `pass` when at least one concrete, attributable workflow maps directly to expected daily work and covers data handling plus a usable output or quality check;
- `fail` when the complete resume shows only courses, skill keywords, theoretical potential, or advanced methods without directly transferable routine execution;
- `uncertain` when the resume source or expected daily work is too incomplete to distinguish those cases.

For a data-analysis intern, directly transferable evidence may include SQL extraction or aggregation, data cleaning, metric or report production, dashboards, recurring monitoring, or data-quality checks. A public practice project or AI-assisted commodity workflow can pass this gate when the candidate's execution is concrete. It proves process readiness, not high analytical depth. A technology list without demonstrated use does not pass.

Treat this as a time-to-productivity gate, not a judgment about intelligence or long-term potential. Do not count the same gate result again as analytical depth in later modules.

## Undergraduate Education Gate

Decline when either condition is confirmed:

- the undergraduate path started from junior college or is explicitly a junior-college-to-bachelor path;
- the undergraduate institution is within the recruiter's confirmed second-tier exclusion range.

Treat this as an operating-cost gate, not evidence about intelligence, statistical ability, character, or future performance. Do not reuse it as a negative signal in later modules.

## Verification

- Prefer explicit education entries and recruiter-confirmed school classifications.
- Do not infer a junior-college path merely from an unfamiliar institution name.
- `Second-tier` is not a stable nationwide label after admission-batch reforms. When classification is not already confirmed, use reliable admission information for the candidate's enrollment year and applicable program or province.
- Mark unresolved classification `uncertain`; do not invent certainty to force a decision.

## Handoff

Return the gate result, supporting fact, classification confidence, and action:

- `fail`: decline immediately and skip the expensive investigation modules;
- `pass`: continue to investigation;
- `uncertain`: perform only the smallest lookup needed to resolve the gate, then continue if it remains unresolved.
