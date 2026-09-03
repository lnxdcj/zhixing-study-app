import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { buildPlan, audiences, themes, methods, durations, normalizeInput } from "../assets/course-planner.mjs";
import { renderPlan } from "../assets/course-designer.mjs";

const input = { topic: "生态文明", location: "塞罕坝", audience: "初中阶段", courseType: "自然生态", duration: "3天2夜", participants: 32, groupSize: 6, budget: 500, emphasis: ["科学探究", "团队建设"], methods: ["实地观察", "田野调查", "项目路演"] };
const minutes = time => { const [h, m] = time.split(":").map(Number); return h * 60 + m; };

test("each duration has a distinct non-overlapping detailed schedule", () => {
  for (const [duration, expected] of durations.map((d, i) => [d, [1, 1, 2, 3, 5, 4][i]])) {
    const p = buildPlan({ ...input, duration });
    assert.equal(p.schedule.length, expected);
    for (const day of p.schedule) {
      let end = 0;
      for (const slot of day.slots) {
        assert.ok(minutes(slot.start) >= end);
        assert.ok(minutes(slot.end) > minutes(slot.start));
        assert.ok(slot.owner && slot.output && slot.detail.length > 10);
        end = minutes(slot.end);
      }
      assert.equal(day.slots[0].start, "08:30");
      assert.equal(day.slots.at(-1).end, duration === "半天" ? "12:30" : "16:30");
    }
    assert.equal(new Set(p.schedule.map(d => d.phase)).size, expected);
  }
});
test("all themes supply discipline-specific questions and evidence fields", () => {
  const fieldSets = new Set();
  for (const courseType of Object.keys(themes)) {
    const p = buildPlan({ ...input, courseType });
    assert.equal(p.questions.length, 3);
    assert.ok(p.activities[0].fields.length > 12);
    fieldSets.add(p.activities[0].fields);
    assert.ok(p.positioning.includes(themes[courseType][0]));
  }
  assert.equal(fieldSets.size, Object.keys(themes).length);
});
test("audiences change workload, records and deliverable expectations", () => {
  for (const audience of Object.keys(audiences)) {
    const p = buildPlan({ ...input, audience });
    assert.ok(p.positioning.includes(audiences[audience].focus));
    assert.ok(p.activities[0].output.includes(audiences[audience].record));
    assert.ok(p.assumptions.some(x => x.includes(audiences[audience].pace)));
  }
});
test("selected emphases and methods affect actual tasks", () => {
  const p = buildPlan(input);
  assert.deepEqual(p.emphasis.map(x => x.name), input.emphasis);
  assert.equal(p.activities.length, 3);
  for (const method of Object.keys(methods)) {
    const activity = buildPlan({ ...input, methods: [method] }).activities[0];
    assert.equal(activity.steps.length, 3);
    assert.equal(activity.steps.reduce((sum, s) => sum + s.minutes, 0), activity.minutes);
    assert.ok(activity.materials && activity.output && activity.check && activity.fallback);
    assert.ok(activity.steps.every(s => s.detail.length > 15));
  }
});
test("budget allocations exactly sum to the requested cap", () => {
  for (const budget of [1, 499, 500, 100000]) {
    for (const duration of durations) {
      const p = buildPlan({ ...input, budget, duration });
      assert.equal(p.budget.total, budget * input.participants);
      assert.equal(p.budget.rows.reduce((sum, x) => sum + x.weight, 0), 100);
      assert.equal(p.budget.rows.reduce((sum, x) => sum + x.amount, 0), p.budget.total);
      assert.ok(p.budget.rows.every(x => x.amount >= 0));
    }
  }
});
test("missing inputs are transparent assumptions, not invented facts", () => {
  const p = buildPlan({ topic: "湿地" });
  assert.equal(p.budget.total, null);
  assert.ok(p.budget.rows.every(x => x.amount === null));
  assert.ok(p.assumptions.some(x => x.includes("人数未填")));
  assert.ok(p.assumptions.some(x => x.includes("出发地未填")));
  assert.ok(p.assumptions.some(x => x.includes("不是联网核验")));
  assert.ok(p.budget.note.includes("不是场馆或供应商报价"));
});
test("invalid input rejected and selections bounded", () => {
  assert.throws(() => buildPlan({}), /至少填写/);
  for (const participants of [-1, 0, "abc", 2.5, 501]) assert.throws(() => buildPlan({ ...input, participants }), /参与人数/);
  assert.throws(() => buildPlan({ ...input, budget: "NaN" }), /预算/);
  const p = normalizeInput({ ...input, methods: Object.keys(methods), audience: "__proto__" });
  assert.equal(p.methods.length, 6);
  assert.equal(p.audience, "初中阶段");
});
test("large groups use parallel presentations rather than impossible serial timings", () => {
  const p = buildPlan({ ...input, participants: 500, groupSize: 5 });
  assert.ok(p.schedule[0].slots.some(x => x.detail.includes("并行海报走读")));
});
test("half-day with six methods stays within the allocated task block", () => {
  const p = buildPlan({ ...input, duration: "半天", methods: Object.keys(methods).slice(0, 6) });
  assert.ok(p.activities.reduce((sum, x) => sum + x.minutes, 0) <= 85);
  assert.ok(p.assumptions.some(x => x.includes("短时微任务")));
});
test("plans contain executable sections, not a short four-line outline", () => {
  const p = buildPlan(input), html = renderPlan(p);
  assert.equal((html.match(/class="panel /g) || []).length, 12);
  assert.ok(html.replace(/<[^>]+>/g, "").length > 7000);
  assert.equal(p.assessment.reduce((sum, x) => sum + x.weight, 0), 100);
  assert.equal(p.worksheets.length, 6);
  assert.ok(p.preparation.length >= 5 && p.risks.length >= 6 && p.followup.length >= 4);
});
test("free-text input is escaped in every generated section", () => {
  const attack = '<img src=x onerror="alert(1)">';
  const html = renderPlan(buildPlan({ ...input, topic: attack, location: attack, needs: attack, departure: attack }));
  assert.ok(!html.includes("<img"));
  assert.ok(html.includes("&lt;img"));
});
test("primary and legacy entry points both lead to the detailed planner", async () => {
  const page = await readFile(new URL("../course-designer.html", import.meta.url), "utf8");
  const index = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(page.includes('type="module" src="./assets/course-designer.mjs?v=2"'));
  assert.ok(index.includes('window.addEventListener("hashchange", openDetailedPlannerRoute)'));
  assert.ok(page.includes('name="needs"') && page.includes('name="budget"'));
});
