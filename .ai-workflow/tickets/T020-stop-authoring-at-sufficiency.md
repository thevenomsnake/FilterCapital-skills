---
key: T020
status: completed
authorization: approved
role: project-lead
---

# 按信息充分性停止标准访谈

## Outcome

Standards-authoring mode 不再按清单逐项追问；当公司/团队约束、招聘动机和岗位工作已经足以推出成功标准时，模型立即生成草案并只保留会改变硬门槛或 profile 选择的追问。

## Acceptance

- 四类 intake 内容是信息槽，不是四个必问轮次；已知 JD、profile 和上下文优先复用。
- 明确“小公司 + 小团队 + 为日常工作补产能 + 岗位工作已知”的决定性捷径。
- 该捷径直接推导 fast-start 硬门槛、低培养空间、交付理解、上手速度、低错误、自检和举一反三的高优先级。
- 专业基础、证据标准、风险、反证和权重默认由模型推导并在草案中标注，不再单独询问。
- 只有缺失信息会改变硬门槛、profile 选择或核心规则时才允许追加一个问题。

## Boundaries

- 推导必须标记为 inference，并允许专业用户在草案阶段纠正。
- 不因减少提问而跳过输入安全、受保护属性、反证或不确定性边界。
- 不修改只读的现有游戏数据分析基线 profile，也不保存本次未确认的新 profile 草案。

## Reads First

- `skills/filtercapital-skills/SKILL.md`
- `skills/filtercapital-skills/references/profile-authoring.md`

## Completion Check

运行一次技能格式校验，并定向确认决定性捷径、充分性停止条件、模型派生责任和追加问题边界均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 标准制作由清单访谈改为信息充分性驱动；典型小公司补产能场景可在岗位工作已知后立即出草案。
- Validation: `quick_validate.py skills/filtercapital-skills` 与定向内容断言通过。
- Evidence: `SKILL.md`、`references/profile-authoring.md`、`README.md`。
- Commit or artifact: 本次 authoring stop-rule 修正提交。
- Blocker: none
