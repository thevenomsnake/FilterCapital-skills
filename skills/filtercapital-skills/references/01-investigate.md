# 01 - Investigate Facts

Act as an information investigator under a presumption of innocence. Maximize useful context for later modules, but never score, recommend, reject, or accuse.

## Evidence Layers

- **Resume fact:** Explicit dates, places, labels, institutions, tasks, and outcomes.
- **External fact:** Public context supported by a cited source.
- **Inference:** A plausible explanation connecting facts. Mark uncertainty and alternatives.
- **Unknown:** A material question that available evidence cannot answer.

Never convert an inference into fact. Ignore sex, age, origin, ethnicity, politics, marital status, photo, contact details, and unrelated health information. Do not search for private personal information, family members, private social accounts, or data unrelated to claimed work.

## Required Investigation Procedure

Follow all stages in order. Do not form a hiring conclusion during this module.

### Stage 1 - Set The Scope

Record the target role, intern or new-graduate audience, available JD, company context, resume source, and research date. Mark which source sections are missing or unreadable. Use a neutral candidate identifier in working notes.

### Stage 2 - Build The Raw Fact Inventory

Read the complete resume once before interpreting it. Extract every substantive education, work, research, competition, and project entry. Preserve the candidate's wording for claimed responsibility and impact, but label it as a claim rather than verified fact.

### Stage 3 - Normalize The Timeline

Sort all entries by month. For each entry record:

- start, end, and duration;
- student, graduate, employed, or between-study status;
- location and relationship to adjacent entries;
- institution, team, and stated role;
- overlap with education, work, or other projects;
- whether labels such as `internship`, `employment`, or `project lead` fit the dates.

Calculate the elapsed calendar-month difference between every adjacent education node. If only years are available, record the interval as approximate. For a degree-completion month followed by a later enrollment month, explicitly record an **education re-entry gap** with its month count and whether work, internship, project, research, skill output, or another verifiable activity is documented during it. When the interval is about 12 months or longer and no such activity is listed, label the fact `unexplained education re-entry gap`; do not supply a cause.

Flag other gaps, overlaps, short stays, unexplained transitions, and post-graduation work labeled as an internship. A gap or overlap is neutral until other evidence gives it meaning; the education re-entry label is a precise fact for the trajectory module, not a hiring conclusion.

### Stage 4 - Create A Case Sheet For Every Project Or Role

Create one case sheet for every substantive project, research item, competition, internship, or job. Do not merge unrelated entries.

Record:

- **Problem:** What task or business question was supposedly solved?
- **Origin:** Coursework, tutorial, virtual experience, public competition, assigned company work, self-initiated work, public repository, or unknown?
- **Inputs:** Data source, acquisition burden, scale, cleanliness, labels, and access constraints.
- **Candidate action:** Exact personal decisions, methods, code, analysis, coordination, or delivery claimed.
- **Difficulty sources:** Ambiguity, data acquisition, cleaning, method selection, engineering, validation, domain knowledge, permissions, and stakeholder coordination.
- **Execution coverage:** Which stages are evidenced: framing, acquisition, cleaning, analysis/modeling, validation, delivery, deployment, monitoring, iteration?
- **Ownership:** Observer, participant, executor, primary owner, team lead, or unknown, based only on evidence.
- **Artifacts:** Repository URL, owner or organization, branch/commit history, report, dashboard, model, publication, competition record, product, or other inspectable output. Record only what is available; never retain private credentials or session data.
- **Public-source attribution:** Record the candidate's exact wording when a project is described as `from GitHub`, `on GitHub`, or by a repository URL, and separately record actual personal contribution. `from GitHub` may be an English preposition mistake intended to mean that the work is hosted on GitHub; treat it first as expression ambiguity, not as evidence of copying. Hosting/source disclosure, repository details, change scope, candidate-owned decisions, validation, and result changes are separate facts.
- **Outcome:** Claimed result, baseline, metric definition, attribution, and whether the result is independently checkable.
- **Missing proof:** The smallest missing fact that would materially change later evaluation.

Describe execution status without scoring it:

- `mentioned only`;
- `guided reproduction`;
- `partial implementation`;
- `completed analysis or prototype`;
- `delivered to a real user or stakeholder`;
- `deployed and operated with feedback`.

### Stage 5 - Research Material Unknowns

Start from each case sheet's **Missing proof**. Research only when public evidence could materially change a later judgment about capability, credibility, project difficulty, or retention. A candidate-authored project title alone does not justify a lookup.

Before each search, write one falsifiable question, such as:

- Does this work derive from a known dataset, tutorial, competition, paper, or repository?
- What difficult steps did the source supply, and what remained for the candidate?
- Could this role ordinarily access the claimed data or decision authority?
- Does the claimed method support the stated conclusion and validation burden?

Classify the target before constructing the query:

1. **Canonical external entity:** For an official competition, publication, repository, dataset, certificate, or employer program, search its canonical name and prefer the organizer or original source.
2. **Candidate-authored or generic title:** Treat the title as a label, not a searchable entity. Do not quote the complete title. Search only when provenance matters, using evidence-backed anchors such as the likely dataset, platform, schema, company or product, course or competition, plus two to four distinctive domain or method terms.
3. **Internal company project:** Do not search the private project title. When role scope, access, or authority matters, research only public employer, product, recruiting, role, or technical context.
4. **Method or plausibility question:** Search primary literature or official technical documentation for the specific method, data type, validation requirement, or claimed effect.

Use one focused query per question. After an unsuccessful canonical-name lookup, allow at most one broader provenance query; if that also fails, record `unknown` and stop. Search absence is not negative evidence.

Examples:

- Bad: `"自行车门店经营分析与客户关系数据库" SQL`.
- Better when table or field clues point to the public sample: `BikeStores sample database SQL customer orders schema`.
- Better when no source clue exists: skip the web search and record the dataset origin as an interview question.
- For a generic title such as `东北城市群低碳导向空间布局多目标优化研究`, search claimed anchors such as `东北城市群 碳排放 空间杜宾模型 多目标优化` only if provenance would change the assessment and those methods appear in the resume.

Classify project context descriptively:

- `template/tutorial reproduction`;
- `guided standard project`;
- `independent adaptation of public material`;
- `independently framed analysis`;
- `original or production delivery`;
- `unknown`.

Do not confuse algorithm sophistication with project difficulty. A simple method on messy, self-acquired data with real validation may be harder than a complex model copied from a complete notebook.

### Stage 6 - Audit Execution Plausibility

Compare the case sheet with external context:

- Which difficult steps were supplied by the source and which did the candidate perform?
- Does the stated duration support the claimed breadth?
- Could someone at that role level obtain the required data and decision authority?
- Does the method support the claimed conclusion?
- Is validation appropriate for the problem?
- Is the result personal, team-level, department-level, or unclear?
- Does an artifact or operational feedback prove completion beyond a resume sentence?

When a project says `from GitHub` but gives no repository, change scope, personal decision, validation, or changed result, preserve two separate findings: the wording is ambiguous and contribution is unverified. Do not call the project copied or fraudulent. Until clarified, classify only the evidence actually shown (usually `guided reproduction` or `commodity workflow` at most) and add one focused interview question: was the project hosted on GitHub or sourced from GitHub, and what repository, commits, personal changes, validation, and result change can the candidate show?

Preserve mismatches as anomalies. Do not label them false without evidence.

### Stage 7 - Mine Cross-Entry Patterns

Look across the full fact map for:

- education and capability progression;
- recent choice convergence;
- geographic clustering of hard-to-access short opportunities;
- institution names standing in for personal evidence;
- repeated authority-impact mismatches;
- repeated project templates or unusually uniform wording;
- public-source/hosting wording that does not line up with repository, ownership, or contribution evidence;
- education re-entry gaps and whether documented accumulation exists during them;
- anomalies relative to candidates for the same role.

Use geography only to understand opportunity provenance, never to penalize a region or hometown. Prefer combinations of weak signals over one impressive or suspicious detail.

### Stage 8 - Generate Competing Stories And Counterevidence

For each material anomaly, propose the smallest set of plausible explanations, including a benign one whenever evidence permits it. For each story record:

- supporting resume and external facts;
- contradicting facts;
- material unknowns;
- evidence that would overturn the story;
- possible capability, credibility, or retention implications for later modules.

Do not decide which story is true merely to make the investigation feel complete.

## Research Discipline

- Prefer official pages, original repositories, primary records, and technical documentation.
- Record source title, URL, access date, exact supported fact, and confidence.
- Separate what a source proves from what it merely makes plausible.
- Treat search absence as unknown, never as evidence that a claim is false.
- Treat access difficulty as context, never as proof of personal connections.
- Treat a common project as context; investigate what the candidate changed before judging originality.
- Seek disconfirming evidence for every suspicious explanation.
- Preserve source conflicts and lower confidence.
- Stop when more searching will not change a case sheet or competing story.

## Handoff

Return only:

1. normalized timeline;
2. project and role case sheets;
3. sourced external context with confidence;
4. execution-status and difficulty classifications;
5. source, ownership, and attribution ambiguities with the smallest verification question;
6. cross-entry anomalies;
7. competing stories with supporting and contradicting evidence;
8. unknowns, counterevidence, and research limits.

Do not include a score or hiring recommendation. Later modules must be able to work from this handoff without rereading raw personal information.
