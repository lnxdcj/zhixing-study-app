import { audiences, themes, methods, emphases, durations, modes, buildPlan } from "./course-planner.mjs?v=2";

export const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const e = escapeHtml;
const list = (values, ordered = false) => `<${ordered ? "ol" : "ul"}>${values.map(v => `<li>${e(v)}</li>`).join("")}</${ordered ? "ol" : "ul"}>`;
const line = (title, value) => `<p class="field-line"><b>${e(title)}：</b>${e(value)}</p>`;
const cards = values => `<div class="cards">${values.join("")}</div>`;
const section = (id, title, content, extra = "") => `<section id="${id}" class="panel ${extra}"><h3>${title}</h3>${content}</section>`;
const money = value => value == null ? "待询价" : `${value.toLocaleString("zh-CN")} 元`;

export function renderPlan(p) {
  const sections = [
    ["basis", "01 · 课程定位与待确认事项", `<p>${e(p.positioning)}</p>${list(p.assumptions)}`, "warning"],
    ["objectives", "02 · 核心问题与可验收目标", `<h4>探究主线</h4>${list(p.questions, true)}<h4>验收目标</h4>${list(p.objectives, true)}<h4>设计重点落实</h4>${cards(p.emphasis.map(x => `<article><strong>${e(x.name)}</strong><p>${e(x.task)}</p></article>`))}`],
    ["preparation", "03 · 行前筹备与责任清单", cards(p.preparation.map(([time, owner, task, output]) => `<article><h4>${e(time)}</h4><span class="owner">${e(owner)}</span>${line("执行事项", task)}${line("交付材料", output)}</article>`))],
    ["schedule", "04 · 逐日日程与执行细节", `<p class="muted">建议时间，不代表场馆开放时间；包含休息与学习区内转场，不含未核实的大交通。</p>${p.schedule.map(day => `<article class="day"><h4>${e(day.label)} · ${e(day.phase)}</h4>${day.slots.map(s => `<div class="slot"><time>${e(s.start)}—${e(s.end)}</time><div><strong>${e(s.title)}</strong><p><span class="owner">${e(s.owner)}</span></p><p>${e(s.detail)}</p>${line("完成标志", s.output)}</div></div>`).join("")}${day.evening ? `<p class="muted">${e(day.evening)}</p>` : ""}${day.between ? `<p class="muted">${e(day.between)}</p>` : ""}</article>`).join("")}`],
    ["activities", "05 · 可直接发放的活动任务卡", `<p class="muted">任务卡用于日程中的活动块，不另外叠加课时。多日课程按当天问题和补证需求复用；计时包含说明、过渡和短间歇。</p>${cards(p.activities.map(a => `<article><h4>${e(a.title)}</h4><span class="owner">建议 ${a.minutes} 分钟 / 轮</span>${line("要回答的问题", a.question)}${line("活动场域", a.place)}<ol class="steps">${a.steps.map(s => `<li><b>${e(s.title)} · ${s.minutes} 分钟</b><br>${e(s.detail)}</li>`).join("")}</ol>${line("导师提问", a.prompt)}${line("记录字段", a.fields)}${line("组内分工", a.roles)}${line("所需材料", a.materials)}${line("交付成果", a.output)}${line("验收方式", a.check)}${line("替代方案", a.fallback)}</article>`))}`],
    ["staffing", "06 · 人员分工与交接", cards(p.staffing.map(([role, duty, check]) => `<article><h4>${e(role)}</h4>${line("职责", duty)}${line("交接与验收", check)}</article>`))],
    ["resources", "07 · 物资与可复用学习表单", list(p.resources) + cards(p.worksheets.map(([name, fields]) => `<article><h4>${e(name)}</h4><p>${e(fields)}</p></article>`))],
    ["budget", "08 · 预算上限分配与询价清单", `<p class="total">${p.budget.total == null ? "未填写预算，先按项目询价" : `人均 ${money(p.budget.perPerson)} × ${p.input.participants} 人 = ${money(p.budget.total)}`}</p><p>${e(p.budget.note)}</p><div class="budget-scroll"><table><thead><tr><th scope="col">项目</th><th scope="col">分配比例</th><th scope="col">预算上限</th><th scope="col">核价要点</th></tr></thead><tbody>${p.budget.rows.map(r => `<tr><th scope="row">${e(r.name)}</th><td>${r.weight}%</td><td>${r.weight === 0 ? "不预置，按实核价" : money(r.amount)}</td><td>${e(r.check)}</td></tr>`).join("")}</tbody></table></div>`],
    ["assessment", "09 · 评价量规与证据标准", `<p>总分100分。各项按“优秀＝该项权重的100%、达标＝70%、需改进＝40%”作为建议锚点；未提交证据记0分。导师可在锚点间细化，但须注明依据并对全部小组一致执行。</p>${cards(p.assessment.map(r => `<article><h4>${e(r.name)} · ${r.weight}分</h4>${line("优秀", r.excellent)}${line("达标", r.pass)}${line("需改进", r.improve)}${line("评分证据", r.evidence)}</article>`))}`],
    ["risks", "10 · 风险触发与替代预案", `<p class="muted">主办方须按现场条件完成专业风险评估；以下是组织核对清单，不替代应急处置制度或专业指导。</p>${cards(p.risks.map(([risk, before, action, owner]) => `<article><h4>${e(risk)}</h4>${line("预防准备", before)}${line("触发后的组织动作", action)}${line("责任人", owner)}</article>`))}`],
    ["followup", "11 · 课后跟进与行动转化", cards(p.followup.map(([time, owner, task]) => `<article><h4>${e(time)}</h4><span class="owner">${e(owner)}</span><p>${e(task)}</p></article>`))],
    ["deliverables", "12 · 最终交付与归档标准", list(p.deliverables)]
  ];
  return `<section class="result-head"><small>详细执行方案 · 本地规则模板 · 场地条件待核实</small><h2>${e(p.title)}</h2><div class="badges">${[p.input.duration, p.input.audience, `${p.input.participants}人`, `${p.schedule.length}${p.input.duration === "长期项目制" ? "周" : "个学习日"}`, "12个执行章节"].map(x => `<span>${e(x)}</span>`).join("")}</div></section>
    <div class="result-actions"><button type="button" data-action="edit" class="secondary">修改条件并重新生成</button><button type="button" data-action="copy">复制完整方案</button><button type="button" data-action="download">下载文本方案</button><button type="button" data-action="print">打印 / 导出 PDF</button></div><p class="export-status" role="status" aria-live="polite"></p>
    <nav class="toc" aria-label="方案章节">${sections.map(([id, title]) => `<a href="#${id}">${title}</a>`).join("")}</nav>
    <div class="plan-content">${sections.map(([id, title, content, extra]) => section(id, title, content, extra)).join("")}</div>`;
}

if (typeof document !== "undefined") {
  const form = document.querySelector("#designer-form"), result = document.querySelector("#result"), status = document.querySelector("#form-status");
  const options = (id, values, selected) => { document.getElementById(id).innerHTML = values.map(v => `<option${v === selected ? " selected" : ""}>${e(v)}</option>`).join(""); };
  options("audience", Object.keys(audiences), "初中阶段"); options("courseType", Object.keys(themes), "综合主题"); options("duration", durations, "1天"); options("mode", modes, "综合研学");
  for (const [id, values] of [["emphasis", emphases], ["methods", Object.keys(methods)]]) {
    const container = document.getElementById(id);
    container.innerHTML = values.map(v => `<label><input type="checkbox" name="${id}" value="${e(v)}"><span>${e(v)}</span></label>`).join("");
    container.addEventListener("change", () => {
      const inputs = [...container.querySelectorAll("input")], count = inputs.filter(x => x.checked).length;
      inputs.forEach(x => { x.disabled = count >= 6 && !x.checked; });
      status.textContent = count >= 6 ? "最多选择6项；取消一项后可以更换。" : "";
    });
  }
  let currentPlan;
  form.addEventListener("submit", event => {
    event.preventDefault();
    try {
      const data = new FormData(form), input = Object.fromEntries(data);
      input.emphasis = data.getAll("emphasis"); input.methods = data.getAll("methods");
      currentPlan = buildPlan(input); result.innerHTML = renderPlan(currentPlan);
      status.textContent = "详细方案已生成。请先核对第一章中的假设和待确认事项。";
      result.focus({ preventScroll: true });
      result.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    } catch (error) { status.textContent = error.message || "生成失败，请检查输入后重试"; }
  });
  result.addEventListener("click", async event => {
    const button = event.target.closest("button[data-action]"); if (!button || !currentPlan) return;
    const message = result.querySelector(".export-status");
    const text = () => `${currentPlan.title}\n\n${result.querySelector(".plan-content").innerText}`;
    if (button.dataset.action === "edit") { form.scrollIntoView({ behavior: "instant" }); form.querySelector("input").focus({ preventScroll: true }); }
    if (button.dataset.action === "print") window.print();
    if (button.dataset.action === "copy") {
      try { await navigator.clipboard.writeText(text()); message.textContent = "已复制完整方案。"; }
      catch { message.textContent = "当前浏览器未允许复制，请使用“下载文本方案”保存完整内容。"; }
    }
    if (button.dataset.action === "download") {
      const url = URL.createObjectURL(new Blob(["\ufeff", text()], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a"); link.href = url; link.download = `${currentPlan.title.replace(/[\\/:*?"<>|]/g, "_").slice(0, 80)}.txt`;
      document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      message.textContent = "已发起完整文本下载。";
    }
  });
}
