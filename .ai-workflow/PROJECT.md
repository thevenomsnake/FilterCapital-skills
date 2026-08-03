---
schema_version: 2
workflow_version: 0.6.0
status: active
project_name: "简历评审台"
---

# 简历评审台

## Product Direction

- Intended user: 需要批量初筛候选人的招聘负责人。
- Problem: 登录招聘系统后仍需逐份阅读、比较和记录简历，判断口径不统一。
- First value: 调用本地技能，从一个已登录的 iTalent 批次链接读取简历，在 Codex 中生成候选人调查、比较与筛选结论。
- Delivery: 纯 Codex 技能；通过外部 Chrome 登录态只读采集，所有交互与结果留在 Codex 对话中。
- Boundaries: 不保存原始简历、电话或邮箱；不依据性别、年龄、籍贯等受保护或无关信息评分；不自动回写招聘系统；不产生额外 API 费用；当前评分依据职位名称推断，待岗位 JD 校准。

## Current State

纯 Codex 简历侦探技能已模块化。薄路由依次调用事实与联网调查、核心能力、方向路径、独立挖掘加分、中小公司风险和最终决策；调查模块不打分、不下结论，项目不包含 GUI。

## Roles

- [Project Lead](roles/project-lead.md): 收敛产品口径并交付可检查结果。

## Active Tickets

- [T001 生成候选人评审看板](tickets/T001-rank-resumes.md): completed, approved
- [T002 建立分人群筛选规则](tickets/T002-screening-rules.md): completed, approved
- [T003 沉淀实际筛选判断](tickets/T003-capture-screening-judgment.md): completed, approved
- [T004 重构简历侦探流程](tickets/T004-investigate-resumes.md): completed, approved
- [T005 拆分调查评分模块](tickets/T005-modularize-investigation.md): completed, approved

## Decisions

None.
