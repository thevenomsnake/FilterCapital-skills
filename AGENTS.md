# Project Instructions

- Read `.ai-workflow/PROJECT.md` before product work.
- Read `screening-rules.json` before evaluating candidates. Select `intern` or `new_graduate` from the recruitment target; if ambiguous, request confirmation and do not issue a final decision.
- When the user supplies an authenticated recruitment URL, use the external Chrome plugin and keep the source system read-only unless write-back is explicitly approved.
- Analyze only job-relevant evidence. Ignore sex, age, origin, marital status, photos, contact details, and other protected or irrelevant attributes.
- Do not persist raw resumes, phone numbers, email addresses, signed URLs, cookies, or browser session data.
- Record the local rule version, selected profile, evidence levels, rule hits, and human-review flag in every new assessment.
- Generate or update `index.html` as the inspectable result, then run one focused browser smoke and commit.
