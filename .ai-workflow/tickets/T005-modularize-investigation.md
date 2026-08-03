---
key: T005
status: completed
authorization: approved
role: project-lead
---

# 拆分调查评分模块

## Outcome

简历侦探技能按固定顺序调用多个本地知识模块，每个模块只负责一类调查或评分，后续新增判断无需继续扩大主技能文件。

## Acceptance

- `SKILL.md` 只保留调用、边界、模块顺序和最终输出约定。
- 独立文档依次负责事实调查、核心能力、方向路径、独立挖掘加分、中小公司风险和决策学习。
- 调查阶段不打分；后续模块输出分项分与证据，不在未校准时伪造精确总分。
- 已确认的统计基础、稳定性和双分支风险知识被迁移且不重复保存。

## Boundaries

- 只拆分技能知识，不改变纯 Codex 产品形态，不重跑候选人。

## Reads First

- `skills/investigate-resumes/SKILL.md`

## Completion Check

运行一次技能格式校验，确认主技能与引用结构有效。

## Completion

- Behavior: 已拆分为一个薄路由和六个顺序模块；首个模块强化为带来源、反证和无罪推定边界的联网信息调查，不输出分数或结论。
- Evidence: `quick_validate.py` 输出 `Skill is valid!`。
- Commit or artifact: `skills/investigate-resumes/SKILL.md` 与 `skills/investigate-resumes/references/`
- Blocker: none
