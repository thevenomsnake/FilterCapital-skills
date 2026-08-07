---
key: T011
status: completed
authorization: approved
role: project-lead
---

# 保留低区分度的流程能力证据

## Outcome

FilterCapital-skills 将 AI 可低成本协助完成的通用执行计为真实的流程经验和基础交付能力，同时避免把它误判为高含金量的分析判断能力。

## Acceptance

- 通用执行可以证明候选人理解工作环节、具备工具熟悉度和基础交付纪律。
- 自动化基线对这类证据降权而非归零。
- 流程覆盖可以支撑基础能力分，但不能单独形成高深度结果闭环或能力 `4+`。

## Boundaries

- 不提高上一轮确定的短提示词可复现项目证据上限。
- 不改变统计基础门槛、独立思考加分或最终推进阈值。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/references/02-capability.md`
- `.ai-workflow/tickets/T010-adjust-capability-for-ai-era.md`

## Completion Check

运行一次技能格式校验，并确认能力模块明确将通用执行保留为低区分度流程证据。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 自动化基线现将通用执行明确计为流程熟悉度、工具能力和基础交付纪律，并以较低区分度计入基础能力；个人判断与验证仍决定证据深度和高分。
- Validation: `quick_validate.py` 输出 `Skill is valid!`；定向内容断言输出 `Focused process-evidence calibration assertions passed.`。
- Evidence: `skills/filtercapital-skills/references/02-capability.md`。
- Commit or artifact: T011 流程能力分层计入提交。
- Blocker: none
