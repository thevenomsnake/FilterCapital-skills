import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "inline app script is missing");
new Function(script);

const data = script.match(/const candidates = (\[[\s\S]*?\]);\s*const labels/)?.[1];
assert.ok(data, "candidate data is missing");
const candidates = Function(`"use strict"; return (${data});`)();

assert.equal(candidates.length, 10);
assert.deepEqual(
  Object.fromEntries(["recommend", "review", "decline"].map(result => [result, candidates.filter(candidate => candidate.result === result).length])),
  { recommend: 3, review: 5, decline: 2 }
);
for (const candidate of candidates) {
  assert.equal(Object.values(candidate.dimensions).reduce((sum, score) => sum + score, 0), candidate.score, `${candidate.name} score mismatch`);
  assert.ok(candidate.strengths.length && candidate.risks.length && candidate.interview);
}

console.log("smoke ok: 10 candidates, 3/5/2 decisions, scores and detail fields valid");
