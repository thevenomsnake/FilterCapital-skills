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
- First value: 从一个已登录的 iTalent 批次链接读取简历，按同一岗位口径生成可比较的候选人排序与证据摘要。
- Delivery: Codex 通过外部 Chrome 登录态只读采集，在项目内生成可直接打开的本地 HTML 报告。
- Boundaries: 不保存原始简历、电话或邮箱；不依据性别、年龄、籍贯等受保护或无关信息评分；不自动回写招聘系统；不产生额外 API 费用；当前评分依据职位名称推断，待岗位 JD 校准。

## Current State

首版 `index.html` 已可用：当前数据分析实习生批次的 10 名候选人已完成排序、结论分类与证据化评审。下一步产品决策是是否提供完整岗位 JD 重新校准评分，再决定是否开放 iTalent 写回。

## Roles

- [Project Lead](roles/project-lead.md): 收敛产品口径并交付可检查结果。

## Active Tickets

- [T001 生成候选人评审看板](tickets/T001-rank-resumes.md): completed, approved

## Decisions

None.
