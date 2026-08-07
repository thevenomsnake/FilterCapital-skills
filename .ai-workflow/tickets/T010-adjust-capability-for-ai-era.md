---
key: T010
status: completed
authorization: approved
role: project-lead
---

# 按自动化基线识别候选人自身能力

## Outcome

FilterCapital-skills 在能力评分时剥离现代 AI 和标准工具可以低成本完成的通用执行，只用可归因的问题定义、分析取舍、验证和真实反馈判断候选人的能力深度。

## Acceptance

- 技术栈数量和流程覆盖不再自动构成高能力证据。
- 公开数据上的采集、SQL、看板、定时刷新和常规质量检查，若没有候选人独有判断，单项目证据深度最高为 Level 2。
- 能力 `4+` 必须包含可归因的候选人判断、适当验证，以及由证据、用户或实际运行检验的结果。
- AI 使用本身保持中性；规则衡量任务区分度，不推断候选人是否使用 AI。

## Boundaries

- 不改变统计基础门槛、独立思考加分或最终推进阈值。
- 不因项目简单而直接扣分；简单项目中的深入判断和有效验证仍可形成强证据。
- 不新增脚本、评分总分或测试框架。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/references/02-capability.md`
- `skills/filtercapital-skills/references/06-decision.md`

## Completion Check

运行一次技能格式校验，并用定向内容断言确认自动化基线、证据上限和能力 `4+` 的归因要求均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 能力模块已按自动化基线区分通用执行与候选人自身判断；短提示词可复现且缺少非显然决策的公开数据项目最高为 Level 2，能力 `4+` 需要可归因判断、适当验证和经证据或真实反馈检验的结果。
- Validation: `quick_validate.py` 输出 `Skill is valid!`；定向内容断言输出 `Focused automation-adjusted capability assertions passed.`。
- Evidence: `skills/filtercapital-skills/references/02-capability.md`。
- Commit or artifact: T010 自动化调整后的能力识别提交。
- Blocker: none
