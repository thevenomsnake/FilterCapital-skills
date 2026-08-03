import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const rules = JSON.parse(readFileSync(new URL("./screening-rules.json", import.meta.url), "utf8"));
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "inline app script is missing");
new Function(script);

const data = script.match(/const candidates = (\[[\s\S]*?\]);\s*const labels/)?.[1];
assert.ok(data, "candidate data is missing");
const candidates = Function(`"use strict"; return (${data});`)();

assert.equal(candidates.length, 10);
assert.equal(rules.version, "1.0.0");
assert.deepEqual(Object.keys(rules.profiles).sort(), ["intern", "new_graduate"]);
for (const profile of Object.values(rules.profiles)) {
  assert.equal(profile.dimensions.reduce((sum, dimension) => sum + dimension.weight, 0), 100, `${profile.label} weights mismatch`);
  assert.ok(profile.thresholds.priority_min > profile.thresholds.review_min, `${profile.label} thresholds invalid`);
}
assert.ok(rules.profiles.intern.do_not_penalize.includes("没有正式工作经验"));
assert.ok(rules.profiles.new_graduate.caps.some(cap => cap.code === "no_real_context" && cap.max_decision === "review"));
assert.ok(html.includes("实习生规则 v1.0"));
assert.deepEqual(
  Object.fromEntries(["recommend", "review", "decline"].map(result => [result, candidates.filter(candidate => candidate.result === result).length])),
  { recommend: 3, review: 5, decline: 2 }
);
for (const candidate of candidates) {
  assert.equal(Object.values(candidate.dimensions).reduce((sum, score) => sum + score, 0), candidate.score, `${candidate.name} score mismatch`);
  assert.ok(candidate.strengths.length && candidate.risks.length && candidate.interview);
}

console.log("smoke ok: local intern/new-graduate rules valid; 10 candidates and report data intact");
