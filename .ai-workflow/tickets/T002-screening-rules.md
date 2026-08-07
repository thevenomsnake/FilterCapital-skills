---
key: T002
status: completed
authorization: approved
role: project-lead
---

# 建立分人群筛选规则

## Outcome

招聘负责人可以在本地查看实习生与应届生两套筛选逻辑，后续 LLM 评审按目标人群选择规则并说明触发依据。

## Acceptance

- 本地技能知识包含共同公平边界、证据等级、LLM 评审流程与输出要求。
- 实习生规则不因缺少正式经历扣分，重视基础、学习潜力和项目证据。
- 应届生规则重视岗位就绪度、真实交付和独立负责；缺少实际场景或端到端证据时限制最高结论。
- 两套逻辑的门槛与限制可由本地技能知识直接读取。

## Boundaries

- 本次只建立默认 v1 规则并标记当前看板使用的画像，不重跑现有候选人。
- 不增加规则编辑后台、数据库或外部 API。

## Reads First

- `.ai-workflow/PROJECT.md`
- `AGENTS.md`

## Completion Check

运行一次 `node smoke.mjs`，验证技能知识包含两类画像与核心门槛，且页面脚本与候选人数据仍完整。

## Completion

- Behavior: 已建立共同公平边界、四级证据、LLM 评审流程，以及实习生与应届生两套判断逻辑；当前看板已标记实习生规则 v1.0。
- Evidence: 本地知识已迁移为项目技能并纳入 smoke。
- Commit or artifact: `skills/filtercapital-skills/SKILL.md`
- Blocker: none
