---
key: T001
status: completed
authorization: approved
role: project-lead
---

# 生成候选人评审看板

## Outcome

招聘负责人可以在一个本地页面中查看当前 iTalent 批次的候选人排序、LLM 建议、证据、风险和面试追问。

## Acceptance

- 当前批次 10 名候选人全部出现，默认按岗位匹配分从高到低排列。
- 可按建议结论筛选，并可查看每人的分项评分、证据、风险和面试追问。
- 评分不使用性别、年龄、籍贯等无关信息，且不会修改 iTalent 中的筛选状态。

## Boundaries

- 只读取用户提供并已登录的 iTalent 批次链接。
- 不持久化原始简历、电话或邮箱。
- 当前岗位口径根据“数据分析实习生”职位名称推断；不实现批量写回、账号系统、数据库或额外 LLM API 集成。

## Reads First

- `.ai-workflow/PROJECT.md`

## Completion Check

运行 `node smoke.mjs`，确认页面脚本可编译、10 名候选人齐全、结论数量和分项总分一致。外部 Chrome 的 `file://` 安全策略阻止自动预览，不绕过该限制。

## Completion

- Behavior: 已生成 10 名候选人的排序、筛选、分项评分、证据、风险和面试追问。
- Evidence: `node smoke.mjs` 输出 `smoke ok: 10 candidates, 3/5/2 decisions, scores and detail fields valid`。
- Commit or artifact: `index.html`
- Blocker: none
