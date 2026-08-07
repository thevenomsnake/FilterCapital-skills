---
key: T013
status: completed
authorization: approved
role: project-lead
---

# 泛化岗位框架迁移与教育空档判断

## Outcome

FilterCapital-skills 在通用技能中区分相邻经历与可直接迁移的目标岗位工作框架，并把教育节点之间超过一年的未解释空档作为路径事实与有标注的招聘推断处理。

## Acceptance

- 快速上手门槛依据目标岗位的重复工作流程，而不是专业名称、工具关键词或接触过相邻指标。
- 相邻营销/运营经历只有在反复、可归因地完成目标分析流程时才通过；普通问卷、用户画像和内容指标观察不自动通过。
- 调查阶段计算教育节点间月份，明确标记毕业后到再入学的未解释空档。
- 路径模块对超过约一年且无同期积累的空档显著降分，并把备考/重考写成默认招聘推断而非事实；已验证的同期积累可反证。
- 小公司适配模块不重复扣路径模块使用过的空档事实。

## Boundaries

- 规则参数化于目标岗位、公司上下文和人群，不绑定游戏、电商或具体候选人。
- 不把专业名称或空档单独设为淘汰条件。
- 不涉及健康、家庭或其他无关个人原因。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/references/00-eligibility.md`
- `skills/filtercapital-skills/references/01-investigate.md`
- `skills/filtercapital-skills/references/03-trajectory.md`
- `skills/filtercapital-skills/references/05-small-company-risk.md`

## Completion Check

运行一次技能格式校验，并用定向内容断言确认框架迁移、教育空档事实/推断/反证及去重边界均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 已将目标岗位工作框架迁移、教育再入学空档事实/推断/反证及路径与适配的去重边界写入对应模块。
- Validation: `quick_validate.py skills/filtercapital-skills` 与定向内容断言通过。
- Evidence: `references/00-eligibility.md`、`01-investigate.md`、`03-trajectory.md`、`05-small-company-risk.md`。
- Commit or artifact: 本次 FilterCapital-skills 规则更新提交。
- Blocker: none
