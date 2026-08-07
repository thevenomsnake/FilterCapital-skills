---
key: T009
status: completed
authorization: approved
role: project-lead
---

# 修正履历调查检索策略

## Outcome

FilterCapital-skills 只围绕会改变能力、可信度、难度或稳定性判断的未知项联网调查，并根据可检索实体与待验证问题构造查询，不再机械搜索候选人自拟的完整项目名。

## Acceptance

- 正式赛事、论文、数据集、仓库或雇主项目可以按规范名称查找。
- 候选人自拟或泛化项目名改用数据集、平台、方法、业务域和独特线索组合查询。
- 内部项目不搜索私有标题；只在有判断价值时研究公开的公司、岗位或方法背景。
- 搜索失败记为未知，不构成负面证据；一次规范名称查询失败后最多再做一次更宽的来源查询。

## Boundaries

- 不新增搜索脚本、站点适配器或测试框架。
- 不改变评分与录用规则。
- 不搜索与岗位无关的个人信息。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/SKILL.md`
- `skills/filtercapital-skills/references/01-investigate.md`

## Completion Check

运行一次技能格式校验，并用定向内容断言确认调查规则已取消强制逐项目精确标题搜索。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 调查模块已取消逐项目强制搜索，改为先识别会改变判断的未知项，再按正式实体、自拟标题、内部项目或方法问题构造查询；无结果时按查询预算停止并记为未知。
- Validation: `quick_validate.py` 输出 `Skill is valid!`；定向内容断言输出 `Focused research-strategy assertions passed.`。
- Evidence: `skills/filtercapital-skills/references/01-investigate.md`。
- Commit or artifact: T009 调查检索策略修正提交。
- Blocker: none
