---
key: T015
status: completed
authorization: approved
role: project-lead
---

# 区分公开来源与个人项目归因

## Outcome

FilterCapital-skills 将公开仓库、模板或教程来源与候选人的实际改造、判断、验证和结果变化分开记录，避免把公开代码包装成独立项目证据。

## Acceptance

- 候选人写出 `from GitHub` 时先记录为可能的英文介词误用/表达歧义，不直接解释成抄袭；披露公开托管或来源仍不等于证明个人贡献。
- 未给出仓库、改动范围、个人决策和验证结果的公开来源项目，按已显示证据最多归类为 guided reproduction 或 commodity workflow；不得据此断言抄袭。
- 公开仓库只有在改动、判断、验证和结果变化均可归因时，才能超过低区分度能力证据。
- GitHub 或开源来源本身中性；清楚披露来源并展示真实改造的项目保留正向空间。单独的介词错误不能降低能力或触发淘汰，只有与贡献不清、练习包装、训练不足等证据组合时才增加核验负担。

## Boundaries

- 不把使用开源代码一律判假或淘汰，也不把一次介词错误扩大为整体能力判断。
- 不保存候选人姓名、原始简历、仓库私密凭证或截图。
- 只在来源、贡献和验证无法核实时增加核验负担；小公司适配模块再处理独立的成本风险。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/references/01-investigate.md`
- `skills/filtercapital-skills/references/02-capability.md`
- `skills/filtercapital-skills/references/05-small-company-risk.md`

## Completion Check

运行一次技能格式校验，并用定向内容断言确认公开来源、个人贡献、验证结果和中性反例均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 已区分公开托管/来源表达、个人改动、判断、验证和结果；`from GitHub` 先按介词歧义处理，不直接推断抄袭，贡献不清时只增加有限核验负担。
- Validation: `quick_validate.py skills/filtercapital-skills` 与定向内容断言通过。
- Evidence: `references/01-investigate.md`、`02-capability.md`、`05-small-company-risk.md`。
- Commit or artifact: 本次 FilterCapital-skills 规则更新提交。
- Blocker: none
