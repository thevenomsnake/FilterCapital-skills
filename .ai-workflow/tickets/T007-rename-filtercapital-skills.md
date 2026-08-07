---
key: T007
status: completed
authorization: approved
role: project-lead
---

# 统一为 FilterCapital-skills

## Outcome

项目、技能界面和 GitHub 私有仓库统一使用 `FilterCapital-skills` 品牌；Codex 通过符合命名规范的 `$filtercapital-skills` 调用技能。

## Acceptance

- 技能目录与 frontmatter 名称为 `filtercapital-skills`，默认提示词使用 `$filtercapital-skills`。
- 项目元数据、README 标题与技能显示名为 `FilterCapital-skills`。
- GitHub 私有仓库为 `thevenomsnake/FilterCapital-skills`，本地 `origin` 指向该仓库。

## Boundaries

- 保持 GitHub 仓库私有。
- 不重命名当前 Codex 工作区根目录，避免运行中的工作区失效。
- 保留已完成 Ticket 的历史叙述，仅更新因技能目录改名而失效的路径引用。

## Blocked By

- None.

## Reads First

- `.ai-workflow/PROJECT.md`
- `skills/filtercapital-skills/SKILL.md`

## Completion Check

校验重命名后的技能目录，并确认 GitHub 仓库名称、私有状态与 `origin`。

## Execution

- Task opening: not-needed
- Task title: pending
- Attempt: pending

## Completion

- Behavior: 项目与界面名称已统一为 `FilterCapital-skills`，技能通过 `$filtercapital-skills` 调用，GitHub 私有仓库与 `origin` 已配置。
- Validation: `quick_validate.py` 输出 `Skill is valid!`；GitHub 返回仓库名 `FilterCapital-skills` 且 `isPrivate: true`。
- Evidence: `README.md`、`.ai-workflow/PROJECT.md`、`skills/filtercapital-skills/`、`https://github.com/thevenomsnake/FilterCapital-skills`。
- Commit or artifact: T007 品牌与仓库改名变更。
- Blocker: none
