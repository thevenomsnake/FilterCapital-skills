---
key: T018
status: completed
authorization: approved
role: project-lead
---

# 拆分岗位行业 Profiles

## Outcome

FilterCapital-skills 使用岗位中立核心与独立 role-and-industry profiles；已确认的游戏数据分析专业门槛、工作流和证据权重从通用模块迁移到首个 profile。

## Acceptance

- 新建 `skills/filtercapital-skills/profiles/`，并提供 `game-data-analysis.md`。
- 通用 `SKILL.md` 负责选择 profile；没有匹配项时只按 JD 形成临时标准，不虚构硬门槛。
- 通用 eligibility、capability 和 decision 模块不包含统计课程、SQL/BI、营销指标或其他游戏数据分析专属判断。
- 游戏数据分析 profile 保存统计基础门槛、快速上手工作流、相邻经历反证、定性权重和岗位预期风险。
- 未来营销、商务等岗位通过新增 profile 定义不同专业权重和逻辑，不修改通用核心。

## Boundaries

- 不建立尚未确认的营销、商务 profile 内容。
- 不引入未经标注样本校准的数字加权总分。
- 不保存候选人姓名、原始简历或截图。

## Reads First

- `skills/filtercapital-skills/SKILL.md`
- `skills/filtercapital-skills/references/00-eligibility.md`
- `skills/filtercapital-skills/references/02-capability.md`
- `skills/filtercapital-skills/references/06-decision.md`

## Completion Check

运行一次技能格式校验，并定向确认 profile 路由、通用核心去专业化、游戏数据分析规则完整迁移及未来 profile 扩展边界。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 通用核心与岗位行业 profile 已物理分离；游戏数据分析规则由独立 profile 拥有，其他岗位不会继承其统计门槛或证据权重。
- Validation: `quick_validate.py skills/filtercapital-skills` 与定向内容断言通过。
- Evidence: `skills/filtercapital-skills/SKILL.md`、`profiles/game-data-analysis.md`、`references/00-eligibility.md`、`02-capability.md`、`06-decision.md`。
- Commit or artifact: 本次 role-and-industry profile 架构提交。
- Blocker: none
