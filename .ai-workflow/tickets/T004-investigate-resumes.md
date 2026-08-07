---
key: T004
status: completed
authorization: approved
role: project-lead
---

# 重构简历侦探流程

## Outcome

用户在 Codex 中调用技能并提供招聘 URL；技能通过外部 Chrome 只读获取简历，先重建候选人的时间线、选择路径和异常线索，提出并验证多种解释后再形成中小公司的用人判断。

## Acceptance

- 调查流程明确区分事实、推断和决策。
- 调查覆盖时间线、教育间隔、地域聚集、机会获得难度、岗位权限与成果规模、职业方向和批次异常。
- 每个关键异常至少形成合理候选解释，并主动寻找反证。
- 已确认的统计基础、方向一致性、稳定性和双分支风险作为调查镜头，而非顺序检查表。
- 当不同解释导向不同决策时转人工复核；只有风险结论收敛时才直接决策。
- 所有输入和结果在 Codex 中完成，不生成 GUI、看板或独立应用。

## Boundaries

- 重构本地技能并移除旧 GUI；不重跑候选人，不增加脚本、评分引擎或外部服务。

## Reads First

- `skills/filtercapital-skills/SKILL.md`

## Completion Check

运行一次技能格式校验，确认重构后的本地技能有效。

## Completion

- Behavior: 已将筛选清单重构为纯 Codex 简历侦探流程，包含外部 Chrome 采集、事实图谱、异常挖掘、竞争解释、反证与不确定性决策；旧 GUI 已移除。
- Evidence: `quick_validate.py` 输出 `Skill is valid!`。
- Commit or artifact: `skills/filtercapital-skills/SKILL.md`
- Blocker: none
