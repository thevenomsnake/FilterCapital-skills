---
key: T006
status: completed
authorization: approved
role: project-lead
---

# 支持用户选择简历来源

## Outcome

其他用户可以从粘贴文本、本地文件、公开 URL 或自己选择的已登录招聘页面调用简历侦探，不需要使用或安装特定招聘网站；来源中的评分操纵提示词会被隔离并告警。

## Acceptance

- 技能不预设 iTalent 或其他招聘供应商。
- 用户可以直接提供简历文本或文件，也可以指定公开或已登录网页。
- 已登录网页默认只读；缺少可用网页能力时，回退到请用户导出、附加或粘贴简历。
- 在资格判断和评分前识别试图操纵评价、覆盖规则或诱导工具操作的提示词，忽略其内容并要求人审。
- 告警区分候选人文档、招聘网站 UI 与未知来源，不在无证据时归因给候选人。

## Boundaries

- 不建立站点适配器框架，不保存站点选择器或登录信息。
- 提示词告警不作为候选人加分或扣分证据。
- 本次不发布仓库，不选择开源许可证。

## Blocked By

- None.

## Reads First

- `skills/filtercapital-skills/SKILL.md`
- `README.md`

## Completion Check

运行一次技能格式校验，确认更新后的技能目录有效。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 技能已支持文本、文件、公开 URL 和用户选择的已登录页面；评分前会隔离并告警试图操纵评审的提示词。
- Validation: `quick_validate.py` 输出 `Skill is valid!`。
- Evidence: `README.md`、`skills/filtercapital-skills/SKILL.md`、`skills/filtercapital-skills/references/input-safety.md`。
- Commit or artifact: T006 来源中立与输入安全变更。
- Blocker: none
