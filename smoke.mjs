import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const screeningSkill = readFileSync(new URL("./skills/resume-screening/SKILL.md", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "inline app script is missing");
new Function(script);

const data = script.match(/const candidates = (\[[\s\S]*?\]);\s*const labels/)?.[1];
assert.ok(data, "candidate data is missing");
const candidates = Function(`"use strict"; return (${data});`)();

assert.equal(candidates.length, 10);
assert.ok(screeningSkill.startsWith("---\nname: resume-screening\n"));
for (const heading of ["## Audience Rules", "### Statistical Foundation", "### Direction Consistency", "### Stability Risk"]) {
  assert.ok(screeningSkill.includes(heading), `missing ${heading}`);
}
assert.ok(screeningSkill.includes("only when all of these are present"));
assert.ok(screeningSkill.includes("School level cannot compensate"));
assert.ok(html.includes("实习生规则 v1.0"));
assert.deepEqual(
  Object.fromEntries(["recommend", "review", "decline"].map(result => [result, candidates.filter(candidate => candidate.result === result).length])),
  { recommend: 3, review: 5, decline: 2 }
);
for (const candidate of candidates) {
  assert.equal(Object.values(candidate.dimensions).reduce((sum, score) => sum + score, 0), candidate.score, `${candidate.name} score mismatch`);
  assert.ok(candidate.strengths.length && candidate.risks.length && candidate.interview);
}

console.log("smoke ok: local screening skill and confirmed gates valid; 10-candidate report intact");
