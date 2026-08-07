---
key: T017
status: completed
authorization: approved
role: project-lead
---

# 建立岗位中立核心与条件分支

## Outcome

FilterCapital-skills 的核心调查与判断结构不预设岗位；任何岗位专属基础、流程证据和排序信号仅在目标 JD 或招聘方上下文明确触发时应用。

## Acceptance

- 作品归因抽象为展示载体、既有来源、个人贡献和验证结果，不绑定平台、代码仓库或具体措辞。
- 快速上手、能力深度、独立探究和小公司风险使用岗位中立语言，并从 JD 推导证据等价物。
- 数据分析的定量基础规则移入独立 profile；通用能力模块只负责加载 profile 和接收其门槛结果。
- 公司规模、受众和教育门槛只有在招聘方或 JD 明确确认时才激活，未确认时返回 `not applicable` 或请求澄清。
- 排序采用“岗位相关基础 + 完整、可归因工作链”的通用结构，具体基础随岗位变化。

## Boundaries

- 不虚构尚未确认的中公司、大公司或社招阈值。
- 不删除已确认的数据分析岗位知识，将其迁移到明确适用范围的 profile。
- 不保存候选人姓名、原始简历或具体触发措辞。

## Reads First

- `skills/filtercapital-skills/SKILL.md`
- `skills/filtercapital-skills/references/00-eligibility.md`
- `skills/filtercapital-skills/references/01-investigate.md`
- `skills/filtercapital-skills/references/02-capability.md`
- `skills/filtercapital-skills/references/04-independent-inquiry.md`
- `skills/filtercapital-skills/references/05-small-company-risk.md`
- `skills/filtercapital-skills/references/06-decision.md`
- `skills/filtercapital-skills/profiles/game-data-analysis.md`

## Completion Check

运行一次技能格式校验，并定向确认岗位中立路由、四层作品归因、条件化数据分析镜头和通用排序链均已写入。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 核心模块已按岗位中立证据结构运行；岗位专属知识由独立 profile 承载，作品归因不再依赖平台或关键词。
- Validation: `quick_validate.py skills/filtercapital-skills` 与定向内容断言通过。
- Evidence: `SKILL.md`、`profiles/game-data-analysis.md`、`references/00-eligibility.md`、`01-investigate.md`、`02-capability.md`、`04-independent-inquiry.md`、`05-small-company-risk.md`、`06-decision.md`。
- Commit or artifact: 本次岗位中立抽象修正提交。
- Blocker: none
