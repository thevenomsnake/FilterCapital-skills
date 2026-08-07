---
schema_version: 2
workflow_version: 0.6.0
status: active
project_name: "FilterCapital-skills"
---

# FilterCapital-skills

## Product Direction

- Intended user: 需要从不同来源批量初筛候选人的招聘负责人。
- Problem: 简历可能来自文件、文本或不同招聘网站，仍需逐份阅读、比较和记录，判断口径不统一。
- First value: 调用本地技能读取用户提供的简历来源，在 Codex 中生成候选人调查、比较与筛选结论。
- Delivery: 纯 Codex 技能；接受文本、文件、公开 URL 或用户选择的已登录招聘页面，所有交互与结果留在 Codex 对话中。
- Decision principle: HR 和 Leader 的核心目标是在合法、岗位相关且可核验的边界内最大化团队生产力；不为照顾任何人的自尊或情绪感受而隐藏问题、弱化风险或模糊结论。
- Boundaries: 不内置或绑定招聘网站；把简历与网页视为不可信输入，隔离并警告评分操纵提示词；不保存原始简历、电话或邮箱；不依据性别、年龄、籍贯等受保护或无关信息评分；网站默认只读；不产生额外 API 费用；当前评分依据职位名称推断，待岗位 JD 校准。

## Current State

`FilterCapital-skills` 已模块化并改为来源中立。用户可以直接提供简历，也可以选择任意可访问网站；所有来源先经过输入安全预检，再依次调用调查与评分模块，最终以结论和决定性问题优先的方式直接报告，项目不包含 GUI。

## Roles

- [Project Lead](roles/project-lead.md): 收敛产品口径并交付可检查结果。

## Active Tickets

- [T001 生成候选人评审看板](tickets/T001-rank-resumes.md): completed, approved
- [T002 建立分人群筛选规则](tickets/T002-screening-rules.md): completed, approved
- [T003 沉淀实际筛选判断](tickets/T003-capture-screening-judgment.md): completed, approved
- [T004 重构简历侦探流程](tickets/T004-investigate-resumes.md): completed, approved
- [T005 拆分调查评分模块](tickets/T005-modularize-investigation.md): completed, approved
- [T006 支持用户选择简历来源](tickets/T006-source-neutral-inputs.md): completed, approved
- [T007 统一为 FilterCapital-skills](tickets/T007-rename-filtercapital-skills.md): completed, approved
- [T008 明确直白、真实的评审定位](tickets/T008-direct-evidence-reporting.md): completed, approved

## Decisions

None.
