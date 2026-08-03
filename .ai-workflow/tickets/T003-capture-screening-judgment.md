---
key: T003
status: completed
authorization: approved
role: project-lead
---

# 沉淀实际筛选判断

## Outcome

招聘负责人确认的统计基础、方向一致性和稳定性风险判断被保存到本地技能知识，后续候选人评审可重复使用。

## Acceptance

- 数据分析候选人必须以专业、课程或项目证据证明统计推理能力，学校层次不能补偿缺失。
- 中小公司会评估近期经历是否向目标岗位收敛。
- 稳定性风险只能由外部选择空间、专业不匹配、经历不收敛和转向证据缺失共同触发；学校不能单独触发。
- 规则保留可推翻稳定性风险的反证。

## Boundaries

- 只沉淀已确认的林展庆案例规则，不重评候选人，不提前推导其他候选人的规则。

## Reads First

- `skills/investigate-resumes/SKILL.md`

## Completion Check

运行技能格式校验，确认本地 `resume-screening` 技能结构有效。

## Completion

- Behavior: 已将统计基础、方向一致性和稳定性组合风险写入本地技能，并保留可推翻稳定性风险的反证。
- Evidence: `quick_validate.py` 输出 `Skill is valid!`。
- Commit or artifact: `skills/investigate-resumes/SKILL.md`
- Blocker: none
