---
key: T019
status: completed
authorization: approved
role: project-lead
---

# 建立专业用户标准制作模式

## Outcome

专业招聘者可以在 FilterCapital-skills 中用人话描述公司、团队、招聘动机和实际岗位工作，生成遵守固定筛选框架的 profile 草案，并在确认后持久化；现有游戏数据分析规则通过同一套 intake 记录和映射展示。

## Acceptance

- 增加 standards-authoring mode，与 candidate screening mode 分离。
- intake 的信息槽覆盖公司/团队、带教、招聘动机、实际职责和成功标准；专业基础、证据、风险、反证和定性权重由模型优先推导，不作为必问轮次。
- 固定模块、输入安全、受保护属性边界、事实/推断/未知区分和不保存原始简历约束不可被 profile 覆盖。
- profile 先生成草案并等待专业用户确认，未确认不写入文件。
- `game-data-analysis.md` 包含标准 intake 记录及“回答 -> 规则”映射，证明现有专业规则来自该机制。

## Boundaries

- 不在本 Ticket 中编造营销、商务或其他行业的具体标准。
- 未有标注样本校准前只使用 qualitative priority，不创建加权总分。
- 不保存候选人姓名、原始简历、截图、私有链接或凭证。

## Reads First

- `skills/filtercapital-skills/SKILL.md`
- `skills/filtercapital-skills/references/profile-authoring.md`
- `skills/filtercapital-skills/profiles/game-data-analysis.md`

## Completion Check

运行一次技能格式校验，并定向确认 authoring mode、完整 intake、草案确认边界和游戏 profile 映射均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 已提供独立标准制作模式与最小充分 intake；游戏数据分析 profile 记录了 intake 字段和派生规则，专业用户可按同一结构新增其他 profile。
- Validation: `quick_validate.py skills/filtercapital-skills` 与定向内容断言通过。
- Evidence: `SKILL.md`、`references/profile-authoring.md`、`profiles/game-data-analysis.md`、`README.md`。
- Commit or artifact: 本次 standards-authoring workflow 提交。
- Blocker: none
