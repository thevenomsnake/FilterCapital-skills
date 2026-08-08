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

`FilterCapital-skills` 已模块化并改为来源、岗位中立。用户可以直接提供简历，也可以选择任意可访问网站；所有来源先经过输入安全预检，再依次调用通用调查与评分模块。专业用户也可以进入 standards-authoring mode，通过最小充分 intake 生成并确认自己的 profile；模型优先复用 JD、现有 profile 和已有回答，并在规则可推导时立即停止提问。岗位和行业的专业基础、工作流与定性权重由 `profiles/` 独立提供，当前首个 profile 为游戏数据分析。外部调查只针对会改变判断的未知项；能力评分使用自动化基线，用可归因的候选人判断和验证决定能力深度。小公司实习生按即时产能招聘处理，并使用独立于应届生的推进阈值。简历决策完成后，独立核验模块为每位仍有可逆不确定性的候选人选择一道最高信息增益问题，并在回答回来时只重算受影响模块；profile 只保存核验视角，不保存固定题目。项目不包含 GUI。

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
- [T009 修正履历调查检索策略](tickets/T009-fix-research-query-strategy.md): completed, approved
- [T010 按自动化基线识别候选人自身能力](tickets/T010-adjust-capability-for-ai-era.md): completed, approved
- [T011 保留低区分度的流程能力证据](tickets/T011-retain-process-experience.md): completed, approved
- [T012 建立小公司实习生快速上手分支](tickets/T012-small-company-intern-fast-start.md): completed, approved
- [T013 泛化岗位框架迁移与教育空档判断](tickets/T013-generalize-transfer-and-education-gaps.md): completed, approved
- [T014 分离流程上手与分析基础门槛](tickets/T014-separate-foundation-from-fast-start.md): completed, approved
- [T015 区分公开来源与个人项目归因](tickets/T015-separate-public-source-attribution.md): completed, approved
- [T016 优先系统定量训练与具体项目链](tickets/T016-prioritize-quantitative-training-and-specific-projects.md): completed, approved
- [T017 建立岗位中立核心与条件分支](tickets/T017-role-neutral-core-and-conditional-lenses.md): completed, approved
- [T018 拆分岗位行业 Profiles](tickets/T018-extract-role-industry-profiles.md): completed, approved
- [T019 建立专业用户标准制作模式](tickets/T019-profile-authoring-workflow.md): completed, approved
- [T020 按信息充分性停止标准访谈](tickets/T020-stop-authoring-at-sufficiency.md): completed, approved

## Decisions

- **岗位中立核心，独立 Profiles：** 调查、归因、能力证据、路径和风险结构适用于任何岗位；专业基础、工作流、门槛和定性权重必须存放在独立 profile 中，由目标 JD 与招聘方上下文选择，不得写回通用模块或外推到其他岗位。
- **标准制作使用最小充分 intake：** 优先复用 JD、现有 profile 和已有回答。小公司、小团队、为日常工作补产能且岗位职责已知时，直接推导 fast-start、低错误和迁移能力要求并生成草案；只有缺口会改变硬门槛、profile 选择或结论时才继续提问，获确认后再写入 profile。
- **先决策，再生成候选人专属核验问题：** 调查与评分模块只传递可改变结论的核验线索，profile 只定义岗位相关的核验优先级和证据形式。简历决策完成后，每位候选人最多输出一道问题及明确的结论更新条件；不可逆淘汰不为了形式继续提问。
