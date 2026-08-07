---
key: T012
status: completed
authorization: approved
role: project-lead
---

# 建立小公司实习生快速上手分支

## Outcome

FilterCapital-skills 将小公司数据分析实习生视为即时产能招聘：先确认候选人能否在少量带教下接手日常工作，再分别评价分析深度和其他风险。

## Acceptance

- 小公司实习生必须通过可直接迁移流程经验的快速上手硬门槛。
- 公开练习或 AI 可辅助的通用执行可以证明流程熟悉度并通过门槛，但不会因此获得高能力深度。
- 仅有课程、技术关键词、理论潜力或高级模型，缺少可归因日常流程实践时不能通过门槛。
- 通过门槛且能力为基础流程层级的候选人仍可进入推进区间；分析深度用于排序，不再沿用应届生的 `4+` 推进阈值。

## Boundaries

- 本次不设计中公司、大公司或社招规则。
- 不要求实习生具备正式工作或生产影响。
- 不改变输入安全、教育门槛或统计基础门槛。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/references/00-eligibility.md`
- `skills/filtercapital-skills/references/02-capability.md`
- `skills/filtercapital-skills/references/05-small-company-risk.md`
- `skills/filtercapital-skills/references/06-decision.md`

## Completion Check

运行一次技能格式校验，并用定向内容断言确认快速上手门槛、流程证据价值和实习生决策阈值均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 小公司实习生现先执行快速上手硬门槛；通用流程实践可以证明即时产能但不提高分析深度，通过者按能力 `2+`、路径 `3+`、适配 `3+` 的实习生分支判断推进信号。
- Validation: `quick_validate.py` 输出 `Skill is valid!`；定向内容断言输出 `Focused small-company intern branch assertions passed.`。
- Evidence: `skills/filtercapital-skills/SKILL.md`、`skills/filtercapital-skills/references/00-eligibility.md`、`02-capability.md`、`05-small-company-risk.md`、`06-decision.md`。
- Commit or artifact: T012 小公司实习生快速上手分支提交。
- Blocker: none
