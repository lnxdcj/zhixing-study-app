(function () {
  "use strict";

  const roles = { student: "学生", teacher: "老师", parent: "家长", admin: "管理员" };
  const demoAccounts = [
    { role: "student", label: "学生演示", email: "demo.student@zhixing.study", password: "DemoStudent#26A", note: "课程、学习记录、作业、证书、消息" },
    { role: "parent", label: "家长演示", email: "demo.parent@zhixing.study", password: "DemoParent#26B", note: "绑定学生、查看进度、作业和证书" },
    { role: "teacher", label: "老师演示", email: "demo.teacher@zhixing.study", password: "DemoTeacher#26C", note: "课程内容、任务作业、批改与证书" },
    { role: "admin", label: "管理员演示", email: "demo.admin@zhixing.study", password: "AdminZx#26D", note: "账号审核、内容审核、平台概览" }
  ];
  let currentUser = null;
  let authMode = "login";
  let backendAvailable = true;
  let learningSummary = { progress: 0, completionRate: 0, completed: 0, active: 0, durationMinutes: 0, points: 0, streak: 0 };

  async function api(path, options = {}) {
    const response = await fetch(path, { credentials: "include", ...options });
    const type = response.headers.get("content-type") || "";
    const data = type.includes("application/json") ? await response.json() : {};
    if (!response.ok) throw new Error(data.error || `请求失败 (${response.status})`);
    return data;
  }

  function passwordStrength(password) {
    const checks = [
      { ok: password.length >= 8, text: "至少 8 位" },
      { ok: /[a-z]/.test(password) && /[A-Z]/.test(password), text: "包含大小写字母" },
      { ok: /\d/.test(password), text: "包含数字" },
      { ok: /[^A-Za-z0-9]/.test(password), text: "包含特殊符号" },
      { ok: password.length >= 12, text: "12 位以上更安全" }
    ];
    const score = checks.filter(function (item) { return item.ok; }).length;
    const level = score >= 5 ? "very-strong" : score >= 4 ? "strong" : score >= 3 ? "medium" : "weak";
    const label = { weak: "弱", medium: "中", strong: "强", "very-strong": "很强" }[level];
    const missing = checks.filter(function (item) { return !item.ok; }).map(function (item) { return item.text; });
    return { score, level, label, missing };
  }

  function restoreAccountButtonPosition(button) {
    try {
      const saved = JSON.parse(localStorage.getItem("zhixingAccountButtonPosition") || "null");
      if (!saved || !Number.isFinite(saved.x) || !Number.isFinite(saved.y)) return;
      const maxX = Math.max(8, window.innerWidth - button.offsetWidth - 8);
      const maxY = Math.max(8, window.innerHeight - button.offsetHeight - 76);
      button.style.left = Math.min(Math.max(8, saved.x), maxX) + "px";
      button.style.top = Math.min(Math.max(8, saved.y), maxY) + "px";
      button.style.right = "auto";
    } catch (_error) {}
  }

  function bindAccountButtonDrag(button) {
    if (button.dataset.dragBound) return;
    button.dataset.dragBound = "true";
    let drag = null;
    button.addEventListener("pointerdown", function (event) {
      if (event.button !== 0) return;
      const rect = button.getBoundingClientRect();
      drag = { startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top, moved: false };
      button.setPointerCapture?.(event.pointerId);
    });
    button.addEventListener("pointermove", function (event) {
      if (!drag) return;
      const dx = event.clientX - drag.startX;
      const dy = event.clientY - drag.startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
      if (!drag.moved) return;
      event.preventDefault();
      const maxX = Math.max(8, window.innerWidth - button.offsetWidth - 8);
      const maxY = Math.max(8, window.innerHeight - button.offsetHeight - 76);
      const x = Math.min(Math.max(8, drag.left + dx), maxX);
      const y = Math.min(Math.max(8, drag.top + dy), maxY);
      button.classList.add("is-dragging");
      button.style.left = x + "px";
      button.style.top = y + "px";
      button.style.right = "auto";
    });
    button.addEventListener("pointerup", function (event) {
      if (!drag) return;
      button.releasePointerCapture?.(event.pointerId);
      button.classList.remove("is-dragging");
      if (drag.moved) {
        event.preventDefault();
        event.stopPropagation();
        button.dataset.ignoreNextClick = "true";
        const rect = button.getBoundingClientRect();
        localStorage.setItem("zhixingAccountButtonPosition", JSON.stringify({ x: Math.round(rect.left), y: Math.round(rect.top) }));
        setTimeout(function () { delete button.dataset.ignoreNextClick; }, 0);
      }
      drag = null;
    });
    window.addEventListener("resize", function () { restoreAccountButtonPosition(button); });
    restoreAccountButtonPosition(button);
  }

  function accountButton() {
    let button = document.querySelector(".backend-account-button");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "backend-account-button";
      button.addEventListener("click", function (event) {
        if (button.dataset.ignoreNextClick) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        openAccountPanel();
      });
      document.body.appendChild(button);
      bindAccountButtonDrag(button);
    }
    button.classList.toggle("is-online", Boolean(currentUser));
    button.textContent = currentUser ? `${roles[currentUser.role] || "\u8d26\u53f7"} \u00b7 ${currentUser.displayName}` : "\u767b\u5f55 / \u6ce8\u518c";
    button.disabled = false;
    button.dataset.stableAccountFloat = "backend-hidden";
    button.setAttribute("aria-hidden", "true");
    button.style.setProperty("display", "none", "important");
    button.style.setProperty("visibility", "hidden", "important");
    button.style.setProperty("opacity", "0", "important");
    button.style.setProperty("pointer-events", "none", "important");
    if (!button.dataset.positionInitialized) {
      button.dataset.positionInitialized = "true";
      restoreAccountButtonPosition(button);
    }
  }

  function emitAuthChange() {
    window.dispatchEvent(new CustomEvent("zhixing-auth-change", { detail: { user: currentUser, summary: learningSummary } }));
  }

  async function forceLogout() {
    const logoutPromise = api("/api/auth/logout", { method: "POST" }).catch(function () {});
    currentUser = null;
    learningSummary = { progress: 0, completionRate: 0, completed: 0, active: 0, durationMinutes: 0, points: 0, streak: 0 };
    closePanel();
    accountButton();
    applyLearningSummary();
    emitAuthChange();
    try {
      localStorage.removeItem("zhixingReadBadge:#/message");
      sessionStorage.clear();
    } catch (_error) {}
    window.location.hash = "/home";
    logoutPromise.finally(function () {});
    window.setTimeout(function () { window.location.reload(); }, 30);
  }

  function findExactText(text) {
    return Array.from(document.querySelectorAll("p,span,h3,strong")).find(function (node) { return node.children.length === 0 && node.textContent.trim() === text; });
  }

  function setValueNearLabel(labelText, value, matcher) {
    const labels = Array.from(document.querySelectorAll("p,span,h3,strong")).filter(function (node) { return node.children.length === 0 && node.textContent.trim() === labelText; });
    for (const label of labels) {
      const candidate = Array.from(label.parentElement?.querySelectorAll("p,h3,strong,span") || []).find(function (node) {
        return node !== label && node.children.length === 0 && matcher.test(node.textContent.trim());
      });
      if (!candidate) continue;
      if (candidate.textContent !== value) candidate.textContent = value;
      return;
    }
  }

  function summarizeLearningProgress(items) {
    const records = Array.isArray(items) ? items : [];
    const completed = records.filter(function (item) {
      return item.status === "completed" || item.status === "submitted" || Number(item.progress) >= 100;
    }).length;
    const active = records.filter(function (item) {
      return !["completed", "submitted"].includes(item.status) && Number(item.progress) > 0 && Number(item.progress) < 100;
    }).length;
    const average = records.length ? Math.round(records.reduce(function (total, item) {
      return total + Math.max(0, Math.min(100, Number(item.progress) || 0));
    }, 0) / records.length) : 0;
    return {
      progress: average,
      completionRate: records.length ? Math.round(completed / records.length * 100) : 0,
      completed: completed,
      active: active
    };
  }

  function setCompletionRateBars(value) {
    const percent = Math.max(0, Math.min(100, Number(value) || 0));
    const labels = Array.from(document.querySelectorAll("p,span,h3,strong")).filter(function (node) {
      return node.children.length === 0 && node.textContent.trim() === "任务完成率";
    });
    labels.forEach(function (label) {
      const block = label.closest("section,article,.rounded-2xl,.rounded-xl") || label.parentElement?.parentElement;
      const bar = block?.querySelector(".h-2 > div") || label.parentElement?.parentElement?.querySelector(".h-2 > div");
      if (bar) {
        bar.style.width = percent + "%";
        bar.style.maxWidth = percent + "%";
      }
    });
  }

  function applyLearningSummary() {
    const summary = currentUser?.role === "student" ? learningSummary : { progress: 0, completionRate: 0, completed: 0, active: 0, durationMinutes: 0, points: 0, streak: 0 };
    setValueNearLabel("本周学习进度", summary.progress + "%", /^\d+%$/);
    setValueNearLabel("连续学习", summary.streak + "天", /^\d+天/);
    setValueNearLabel("任务完成率", summary.completionRate + "%", /^\d+%$/);
    setCompletionRateBars(summary.completionRate);
    setValueNearLabel("已完成", String(summary.completed), /^\d+$/);
    setValueNearLabel("进行中", String(summary.active), /^\d+$/);
    setValueNearLabel("总积分", String(summary.points), /^\d+$/);
    emitAuthChange();
  }

  async function refreshLearningSummary() {
    learningSummary = { progress: 0, completionRate: 0, completed: 0, active: 0, durationMinutes: 0, points: 0, streak: 0 };
    if (currentUser?.role === "student") {
      try {
        const data = await api("/api/progress");
        const items = data.progress || [];
        const summary = summarizeLearningProgress(items);
        learningSummary = { ...summary, durationMinutes: Math.round(items.reduce(function (total, item) { return total + Number(item.duration_seconds || 0); }, 0) / 60), points: Number(currentUser.points || 0), streak: 0 };
      } catch (_error) {}
    }
    applyLearningSummary();
  }

  function closePanel() { document.querySelector(".backend-modal")?.remove(); }

  function panel(title, subtitle) {
    closePanel();
    const modal = document.createElement("div");
    modal.className = "backend-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", title);
    modal.innerHTML = '<div class="backend-panel"><header><button type="button" aria-label="关闭账号中心">‹</button><div><h1>' + title + '</h1><p>' + subtitle + '</p></div>' +
      (currentUser ? '<button type="button" class="backend-logout">退出</button>' : '<span></span>') + '</header><main class="backend-main"></main></div>';
    modal.querySelector('[aria-label="关闭账号中心"]').addEventListener("click", closePanel);
    modal.addEventListener("click", function (event) { if (event.target === modal) closePanel(); });
    modal.querySelector(".backend-logout")?.addEventListener("click", function (event) {
      event.preventDefault();
      forceLogout();
    });
    document.body.appendChild(modal);
    return modal.querySelector("main");
  }

  function authForm(main) {
    main.classList.add("backend-auth-main");
    main.innerHTML = '<section class="backend-auth-hero"><b>知行</b><div><strong>欢迎来到知行研学</strong><p>登录后同步学习记录、作业、好友消息和研学证书。</p></div></section><nav class="backend-auth-tabs"><button type="button" data-mode="login">登录</button><button type="button" data-mode="register">注册</button></nav><form class="backend-form backend-auth-form"></form><div class="backend-status"></div>';
    const form = main.querySelector("form");
    const status = main.querySelector(".backend-status");
    async function completeLogin(data) {
      if (data.pending) { status.textContent = data.message; return; }
      if (data.verificationRequired) { status.textContent = data.message || "请先完成邮箱验证。"; return; }
      if (data.mfaRequired) { renderMfa(data.challengeToken); return; }
      currentUser = data.user;
      accountButton();
      openAccountPanel();
      refreshLearningSummary().catch(function () {});
    }
    function renderMfa(challengeToken) {
      status.textContent = "请输入管理员二次验证码。";
      form.innerHTML = '<label>二次验证码<input name="code" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" required></label><button class="backend-primary" type="submit">完成验证</button>';
      form.dataset.mfaChallenge = challengeToken;
    }
    function render() {
      main.querySelectorAll("[data-mode]").forEach(function (button) { button.classList.toggle("is-active", button.dataset.mode === authMode); });
      form.innerHTML = authMode === "login" ?
        '<label><span>邮箱</span><input name="email" type="email" autocomplete="email" required placeholder="请输入邮箱"></label><label><span>密码</span><input name="password" type="password" autocomplete="current-password" required minlength="8" placeholder="请输入密码"></label><button class="backend-primary backend-auth-submit" type="submit">登录</button>' :
        '<label><span>姓名</span><input name="displayName" required maxlength="40" placeholder="请输入真实姓名"></label><label><span>邮箱</span><input name="email" type="email" autocomplete="email" required placeholder="用于登录和通知"></label><label><span>密码</span><input name="password" type="password" autocomplete="new-password" required minlength="8" placeholder="至少 8 位，建议混合字符"></label><div class="backend-password-strength" data-level="weak" aria-live="polite"><div><span></span></div><p>建议使用大小写字母、数字和特殊符号组合。</p></div>' +
        '<div class="backend-inline-fields"><label><span>身份</span><select name="role"><option value="student">学生</option><option value="parent">家长</option><option value="teacher">老师</option></select></label><label><span>学校或机构</span><input name="school" maxlength="80" placeholder="选填"></label></div><button class="backend-primary backend-auth-submit" type="submit">创建账号</button>';
      const passwordInput = form.querySelector('input[name="password"]');
      const meter = form.querySelector(".backend-password-strength");
      const submitButton = form.querySelector("button[type=submit]");
      if (meter && passwordInput) {
        function syncStrength() {
          const result = passwordStrength(passwordInput.value);
          meter.dataset.level = result.level;
          meter.querySelector("span").style.width = Math.max(12, result.score * 20) + "%";
          meter.querySelector("p").textContent = passwordInput.value
            ? "密码强度：" + result.label + (result.score < 3 ? "，还需：" + result.missing.slice(0, 2).join("、") : "，可以继续注册。")
            : "建议使用大小写字母、数字和特殊符号组合。";
          submitButton.disabled = Boolean(passwordInput.value) && result.score < 3;
        }
        passwordInput.addEventListener("input", syncStrength);
        syncStrength();
      }
    }
    main.querySelectorAll("[data-mode]").forEach(function (button) { button.addEventListener("click", function () { authMode = button.dataset.mode; status.textContent = ""; render(); }); });
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const submit = form.querySelector("button[type=submit]");
      submit.disabled = true;
      status.className = "backend-status";
      status.textContent = "正在提交...";
      const values = Object.fromEntries(new FormData(form));
      try {
        const mfaChallenge = form.dataset.mfaChallenge;
        if (!mfaChallenge && authMode === "register" && passwordStrength(String(values.password || "")).score < 3) {
          throw new Error("密码强度不足，请至少包含大小写字母、数字或特殊符号中的多种组合。");
        }
        const path = mfaChallenge ? "/api/auth/admin-mfa" : authMode === "login" ? "/api/auth/login" : "/api/auth/register";
        const payload = mfaChallenge ? { challengeToken: mfaChallenge, code: values.code } : values;
        const data = await api(path, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
        if (mfaChallenge) delete form.dataset.mfaChallenge;
        await completeLogin(data);
      } catch (error) {
        status.className = "backend-status is-error";
        status.textContent = error.message;
      } finally { submit.disabled = false; }
    });
    render();
  }

  function rows(container, items, renderItem) {
    container.innerHTML = "";
    if (!items.length) { container.innerHTML = '<div class="backend-empty">暂无数据</div>'; return; }
    items.forEach(function (item) { container.appendChild(renderItem(item)); });
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  }

  function submissionStatus(status) {
    return { draft: "草稿", submitted: "待批改", returned: "已退回", graded: "已批改" }[status] || status;
  }

  function orderStatus(status) {
    return {
      pending_payment: "待支付",
      awaiting_review: "待管理员确认",
      paid: "已开通",
      cancelled: "已取消",
      refunded: "已退款"
    }[status] || status;
  }

  function attachmentLinks(files) {
    if (!files?.length) return "";
    return '<div class="backend-attachments">' + files.map(function (file) {
      return '<a href="/api/files/' + encodeURIComponent(file.id) + '" target="_blank" rel="noopener">' + escapeHtml(file.name || file.file_name) + '</a>';
    }).join("") + "</div>";
  }

  function formatTime(value) {
    if (!value) return "";
    return new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
  }

  async function renderCommunityTool(container) {
    container.innerHTML = '<form class="backend-form backend-community-form"><label>发布研学动态<textarea name="content" maxlength="1000" required placeholder="记录观察、问题或研学成果"></textarea></label><div class="backend-inline-fields"><label>分类<select name="category"><option>研学日记</option><option>知识分享</option><option>成果展示</option><option>活动交流</option></select></label><label>地点<input name="location" maxlength="80"></label></div><button class="backend-primary" type="submit">发布动态</button><div class="backend-status"></div></form><div class="backend-list backend-community-list"></div>';
    container.insertAdjacentHTML("afterbegin", '<section class="backend-list backend-community-rules"></section>');
    const form = container.querySelector("form");
    const status = form.querySelector(".backend-status");
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        const data = await api("/api/community/posts", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
        form.reset();
        status.textContent = data.pending ? "动态已提交，等待管理员审核。" : "动态已发布。";
        if (!data.pending) await renderCommunityTool(container);
      } catch (error) { status.className = "backend-status is-error"; status.textContent = error.message; }
    });
    try {
      const [data, rules] = await Promise.all([api("/api/community/posts"), api("/api/community/rules")]);
      rows(container.querySelector(".backend-community-rules"), rules.rules || [], function (item) {
        const row = document.createElement("div");
        row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.description) + '</small></div><span>规则</span>';
        return row;
      });
      rows(container.querySelector(".backend-community-list"), data.posts, function (item) {
        const article = document.createElement("article");
        article.className = "backend-cloud-item";
        article.innerHTML = '<header><strong>' + escapeHtml(item.display_name) + '</strong><small>' + escapeHtml(item.category) + ' · ' + formatTime(item.created_at) + '</small></header><p>' + escapeHtml(item.content) + '</p><footer><button type="button" data-like>赞 ' + item.likes + '</button><button type="button" data-comment>评论 ' + item.comments + '</button></footer><form class="backend-form backend-comment-form" hidden><input name="content" maxlength="500" required placeholder="写下评论"><button class="backend-primary" type="submit">发送评论</button><div class="backend-comments"></div></form>';
        article.querySelector("[data-like]").addEventListener("click", async function (event) {
          try { const result = await api(`/api/community/posts/${item.id}/like`, { method: "POST" }); event.currentTarget.textContent = (result.liked ? "已赞 " : "赞 ") + (Number(item.likes) + (result.liked ? 1 : 0)); } catch (error) { event.currentTarget.textContent = error.message; }
        });
        const commentForm = article.querySelector(".backend-comment-form");
        article.querySelector("[data-comment]").addEventListener("click", async function () {
          commentForm.hidden = !commentForm.hidden;
          if (commentForm.hidden) return;
          const result = await api(`/api/community/posts/${item.id}/comments`);
          commentForm.querySelector(".backend-comments").innerHTML = result.comments.map(function (comment) { return '<p><strong>' + escapeHtml(comment.display_name) + '</strong> ' + escapeHtml(comment.content) + '</p>'; }).join("") || '<small>暂无评论</small>';
        });
        commentForm.addEventListener("submit", async function (event) {
          event.preventDefault(); const input = commentForm.querySelector("input");
          await api(`/api/community/posts/${item.id}/comments`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: input.value }) });
          input.value = ""; article.querySelector("[data-comment]").click(); article.querySelector("[data-comment]").click();
        });
        return article;
      });
    } catch (error) { container.insertAdjacentHTML("beforeend", '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>'); }
  }

  async function renderMessagesTool(container) {
    container.innerHTML = '<form class="backend-form backend-friend-form"><label>添加好友<input name="email" type="email" required placeholder="输入学生、老师或家长邮箱"></label><button class="backend-primary" type="submit">添加好友</button><div class="backend-status"></div></form><h3>我的好友</h3><div class="backend-list backend-friend-list"></div><h3>最近会话</h3><form class="backend-form backend-conversation-form"><label>临时会话成员邮箱<input name="memberEmail" type="email" placeholder="可直接输入对方邮箱"></label><button class="backend-primary" type="submit">创建会话</button><div class="backend-status"></div></form><div class="backend-list backend-conversation-list"></div>';
    const friendForm = container.querySelector(".backend-friend-form");
    friendForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(friendForm));
      try {
        await api("/api/friends", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: values.email }) });
        friendForm.reset();
        friendForm.querySelector(".backend-status").textContent = "已添加好友，可以发消息。";
        await renderMessagesTool(container);
      } catch (error) {
        friendForm.querySelector(".backend-status").textContent = error.message;
      }
    });
    const form = container.querySelector(".backend-conversation-form");
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form));
      if (!values.memberEmail) { form.querySelector(".backend-status").textContent = "请输入对方邮箱。"; return; }
      try {
        await api("/api/conversations", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title: "私聊", memberEmails: [values.memberEmail] }) });
        await renderMessagesTool(container);
      } catch (error) { form.querySelector(".backend-status").textContent = error.message; }
    });
    try {
      const [friendsData, data] = await Promise.all([api("/api/friends"), api("/api/conversations")]);
      rows(container.querySelector(".backend-friend-list"), friendsData.friends || [], function (friend) {
        const row = document.createElement("div");
        row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(friend.display_name) + '</strong><small>' + escapeHtml(roles[friend.role] || friend.role) + ' · ' + escapeHtml(friend.email) + (friend.school ? ' · ' + escapeHtml(friend.school) : '') + '</small></div><button type="button">发消息</button>';
        row.querySelector("button").addEventListener("click", async function () {
          const result = await api("/api/friends/" + friend.id + "/conversation", { method: "POST" });
          renderMessageThread(container, result.conversation);
        });
        return row;
      });
      rows(container.querySelector(".backend-conversation-list"), data.conversations || [], function (item) {
        const button = document.createElement("button"); button.type = "button"; button.className = "backend-thread-row";
        button.innerHTML = '<strong>' + escapeHtml(item.title || "未命名会话") + '</strong><small>' + escapeHtml(item.last_message || "暂无消息") + '</small>';
        button.addEventListener("click", function () { renderMessageThread(container, item); });
        return button;
      });
    } catch (error) { form.querySelector(".backend-status").textContent = error.message; }
  }

  async function renderMessageThread(container, conversation) {
    container.innerHTML = '<button type="button" class="backend-back">‹ 返回会话</button><h3>' + escapeHtml(conversation.title) + '</h3><div class="backend-message-list"></div><form class="backend-form backend-send-form"><label>消息<input name="content" maxlength="1000" required autocomplete="off"></label><button class="backend-primary" type="submit">发送</button><div class="backend-status"></div></form>';
    container.querySelector(".backend-back").addEventListener("click", function () { renderMessagesTool(container); });
    async function load() {
      const data = await api(`/api/conversations/${conversation.id}/messages`);
      container.querySelector(".backend-message-list").innerHTML = data.messages.map(function (item) { return '<div class="backend-message' + (item.sender_id === currentUser.id ? " is-mine" : "") + '"><strong>' + escapeHtml(item.display_name || "系统") + '</strong><p>' + escapeHtml(item.content) + '</p><small>' + formatTime(item.created_at) + '</small></div>'; }).join("") || '<div class="backend-empty">暂无消息</div>';
    }
    await load();
    container.querySelector("form").addEventListener("submit", async function (event) {
      event.preventDefault(); const input = event.currentTarget.querySelector("input");
      try { await api(`/api/conversations/${conversation.id}/messages`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: input.value }) }); input.value = ""; await load(); }
      catch (error) { event.currentTarget.querySelector(".backend-status").textContent = error.message; }
    });
  }

  async function renderNotificationsTool(container) {
    container.innerHTML = '<div class="backend-list"></div>';
    try {
      const data = await api("/api/notifications");
      rows(container.querySelector(".backend-list"), data.notifications, function (item) {
        const button = document.createElement("button"); button.type = "button"; button.className = "backend-thread-row" + (item.read_at ? " is-read" : "");
        button.innerHTML = '<strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.message) + ' · ' + formatTime(item.created_at) + '</small>';
        button.addEventListener("click", async function () { await api(`/api/notifications/${item.id}/read`, { method: "PATCH" }); button.classList.add("is-read"); });
        return button;
      });
    } catch (error) { container.innerHTML = '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>'; }
  }

  async function renderShopTool(container) {
    container.innerHTML = '<div class="backend-balance">当前积分 <strong>' + Number(currentUser.points || 0) + '</strong></div><div class="backend-list backend-product-list"></div><h3>兑换记录</h3><div class="backend-list backend-order-list"></div><div class="backend-status"></div>';
    const status = container.querySelector(".backend-status");
    try {
      const [products, orders] = await Promise.all([api("/api/shop/products"), api("/api/shop/orders")]);
      rows(container.querySelector(".backend-product-list"), products.products, function (item) {
        const row = document.createElement("div"); row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.title) + '</strong><small>' + item.points_price + '积分 · 库存' + item.stock + '</small></div><button type="button"' + (item.stock < 1 ? " disabled" : "") + '>兑换</button>';
        row.querySelector("button").addEventListener("click", async function (event) {
          event.currentTarget.disabled = true;
          try { await api("/api/shop/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ productId: item.id, deliveryInfo: {} }) }); currentUser.points -= Number(item.points_price); accountButton(); await renderShopTool(container); }
          catch (error) { status.textContent = error.message; event.currentTarget.disabled = false; }
        }); return row;
      });
      rows(container.querySelector(".backend-order-list"), orders.orders, function (item) { const row = document.createElement("div"); row.className = "backend-row"; row.innerHTML = '<div><strong>' + escapeHtml(item.title) + '</strong><small>' + item.points_total + '积分 · ' + escapeHtml(item.status) + '</small></div><span></span>'; return row; });
    } catch (error) { status.textContent = error.message; }
  }

  async function renderSettingsTool(container) {
    const definitions = [["deadlineReminders", "任务截止提醒"], ["courseUpdates", "课程更新通知"], ["wifiVideoOnly", "仅在无线网络播放视频"], ["autoSave", "自动保存研学记录"]];
    container.innerHTML = '<form class="backend-form backend-profile-form"><label>姓名<input name="displayName" maxlength="40" value="' + escapeHtml(currentUser.displayName) + '"></label><label>学校或机构<input name="school" maxlength="80" value="' + escapeHtml(currentUser.school || "") + '"></label><button class="backend-primary" type="submit">保存个人资料</button></form><div class="backend-setting-list"></div><div class="backend-status"></div>';
    const status = container.querySelector(".backend-status");
    let settings = {};
    try { settings = (await api("/api/settings")).settings || {}; } catch (_error) {}
    const list = container.querySelector(".backend-setting-list");
    definitions.forEach(function (definition) {
      const row = document.createElement("div"); row.className = "backend-setting-row";
      const enabled = settings[definition[0]] ?? false;
      row.innerHTML = '<span>' + definition[1] + '</span><button type="button" role="switch" aria-label="' + definition[1] + '" aria-checked="' + enabled + '"></button>';
      row.querySelector("button").addEventListener("click", async function (event) { settings[definition[0]] = event.currentTarget.getAttribute("aria-checked") !== "true"; event.currentTarget.setAttribute("aria-checked", String(settings[definition[0]])); await api("/api/settings", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ settings }) }); });
      list.appendChild(row);
    });
    container.querySelector("form").addEventListener("submit", async function (event) { event.preventDefault(); try { const data = await api("/api/profile", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) }); currentUser = data.user; accountButton(); status.textContent = "个人资料已保存。"; } catch (error) { status.textContent = error.message; } });
  }

  function renderCloudTools(main) {
    const section = document.createElement("section"); section.className = "backend-section backend-cloud-tools";
    section.innerHTML = '<h3>云端功能</h3><nav class="backend-tool-tabs"><button type="button" data-tool="community">动态</button><button type="button" data-tool="messages">消息</button><button type="button" data-tool="notifications">通知</button><button type="button" data-tool="shop">商城</button><button type="button" data-tool="settings">设置</button></nav><div class="backend-tool-content"><div class="backend-empty">选择上方功能</div></div>';
    const content = section.querySelector(".backend-tool-content");
    section.querySelectorAll("[data-tool]").forEach(function (button) { button.addEventListener("click", async function () { section.querySelectorAll("[data-tool]").forEach(function (item) { item.classList.toggle("is-active", item === button); }); const tool = button.dataset.tool; if (tool === "community") await renderCommunityTool(content); else if (tool === "messages") await renderMessagesTool(content); else if (tool === "notifications") await renderNotificationsTool(content); else if (tool === "shop") await renderShopTool(content); else await renderSettingsTool(content); }); });
    main.appendChild(section);
  }

  async function renderTeacherManagement(main) {
    const section = document.createElement("section"); section.className = "backend-section";
    section.innerHTML = '<h3>课程、任务与证书管理</h3><details class="backend-details"><summary>创建课程</summary><form class="backend-form backend-course-form"><label>课程名称<input name="title" required maxlength="100"></label><div class="backend-inline-fields"><label>分类<input name="category" required maxlength="40"></label><label>唯一标识<input name="slug" required pattern="[a-z0-9-]+"></label></div><label>课程简介<textarea name="description" maxlength="1000"></textarea></label><button class="backend-primary" type="submit">发布课程</button></form></details><details class="backend-details" open><summary>下发视频 / 资料 / 任务 / 作业 / 测试</summary><form class="backend-form backend-content-form"><label>课程<select name="courseId" required></select></label><div class="backend-inline-fields"><label>类型<select name="type"><option value="task">任务</option><option value="homework">作业</option><option value="test">测试</option><option value="video">视频</option><option value="material">资料</option></select></label><label>排序<input name="sortOrder" type="number" min="0" value="0"></label></div><label>标题<input name="title" required maxlength="120"></label><label>截止时间<input name="dueAt" type="datetime-local"></label><label>内容说明或视频地址<textarea name="bodyText" maxlength="2000"></textarea></label><button class="backend-primary" type="submit">下发给已参加学生</button></form></details><details class="backend-details"><summary>签发学习证书</summary><form class="backend-form backend-certificate-form"><label>学生<select name="studentId" required></select></label><label>课程<select name="courseId" required></select></label><button class="backend-primary" type="submit">签发证书</button></form></details><div class="backend-status"></div>';
    main.appendChild(section);
    const courseForm = section.querySelector(".backend-course-form");
    if (courseForm && !courseForm.querySelector('[name="priceCents"]')) {
      const label = document.createElement("label");
      label.textContent = "课程价格（元）";
      const input = document.createElement("input");
      input.name = "priceCents";
      input.type = "number";
      input.min = "0";
      input.step = "1";
      input.value = "0";
      label.appendChild(input);
      courseForm.querySelector("button[type=submit]").before(label);
    }
    const status = section.querySelector(".backend-status");
    try {
      const [coursesData, directory] = await Promise.all([api("/api/courses"), api("/api/users/directory")]);
      const courseOptions = coursesData.courses.map(function (course) { return '<option value="' + course.id + '">' + escapeHtml(course.title) + '</option>'; }).join("");
      section.querySelectorAll('select[name="courseId"]').forEach(function (select) { select.innerHTML = courseOptions; });
      section.querySelector('select[name="studentId"]').innerHTML = directory.users.filter(function (item) { return item.role === "student"; }).map(function (student) { return '<option value="' + student.id + '">' + escapeHtml(student.display_name) + ' · ' + escapeHtml(student.email) + '</option>'; }).join("");
    } catch (error) { status.textContent = error.message; }
    section.querySelector(".backend-course-form").addEventListener("submit", async function (event) {
      event.preventDefault(); const values = Object.fromEntries(new FormData(event.currentTarget));
      values.priceCents = Math.round(Number(values.priceCents || 0) * 100);
      try { await api("/api/courses", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(values) }); status.textContent = "课程已发布，重新打开账号中心后可继续添加内容。"; event.currentTarget.reset(); }
      catch (error) { status.textContent = error.message; }
    });
    section.querySelector(".backend-content-form").addEventListener("submit", async function (event) {
      event.preventDefault(); const values = Object.fromEntries(new FormData(event.currentTarget));
      const body = values.type === "video" ? { videoUrl: values.bodyText } : { description: values.bodyText };
      if (values.dueAt) body.dueAt = values.dueAt;
      try { await api(`/api/courses/${values.courseId}/contents`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ type: values.type, title: values.title, sortOrder: Number(values.sortOrder), body }) }); status.textContent = ["task", "homework", "test"].includes(values.type) ? "任务已下发，并通知已参加该课程的学生。" : "课程内容已添加。"; event.currentTarget.querySelector('input[name="title"]').value = ""; event.currentTarget.querySelector("textarea").value = ""; }
      catch (error) { status.textContent = error.message; }
    });
    section.querySelector(".backend-certificate-form").addEventListener("submit", async function (event) {
      event.preventDefault(); try { await api("/api/certificates", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) }); status.textContent = "学习证书已签发并通知学生。"; } catch (error) { status.textContent = error.message; }
    });
  }

  function assignmentType(type) {
    return { task: "任务", homework: "作业", test: "测试", video: "视频", material: "资料" }[type] || type;
  }

  function assignmentStatus(item) {
    if (item.submission_status) return submissionStatus(item.submission_status);
    if (Number(item.progress) >= 100) return "已完成";
    if (Number(item.progress) > 0) return "进行中";
    return "待完成";
  }

  function assignmentMeta(item) {
    const body = item.body || {};
    const due = body.dueAt ? " · 截止 " + formatTime(body.dueAt) : "";
    return assignmentType(item.content_type) + " · " + escapeHtml(item.course_title || "") + due + " · " + assignmentStatus(item);
  }

  function renderAssignmentRows(container, assignments, options = {}) {
    rows(container, assignments, function (item) {
      const row = document.createElement("div");
      row.className = "backend-row";
      const person = options.showStudent && item.student_name ? escapeHtml(item.student_name) + " · " : "";
      row.innerHTML = '<div><strong>' + person + escapeHtml(item.title) + '</strong><small>' + assignmentMeta(item) + (item.score === null || item.score === undefined ? "" : " · " + item.score + "分") + '</small>' + (item.teacher_feedback ? '<p class="backend-feedback">教师评语：' + escapeHtml(item.teacher_feedback) + '</p>' : "") + '</div><span>' + Number(item.progress || 0) + '%</span>';
      return row;
    });
  }

  async function renderParentStudent(container, student) {
    container.innerHTML = '<h3>' + escapeHtml(student.display_name) + '的学习情况</h3><div class="backend-stat-grid parent-progress-stats"></div><h3>老师下发任务</h3><div class="backend-list parent-assignments"></div><h3>作业提交</h3><div class="backend-list parent-submissions"></div><h3>学习证书</h3><div class="backend-list parent-certificates"></div>';
    try {
      const [progress, assignments, submissions, certificates] = await Promise.all([api(`/api/progress?studentId=${student.id}`), api(`/api/assignments?studentId=${student.id}`), api(`/api/submissions?studentId=${student.id}`), api(`/api/certificates?studentId=${student.id}`)]);
      const completed = progress.progress.filter(function (item) { return Number(item.progress) >= 100; }).length;
      const minutes = Math.round(progress.progress.reduce(function (total, item) { return total + Number(item.duration_seconds || 0); }, 0) / 60);
      container.querySelector(".parent-progress-stats").innerHTML = '<div class="backend-stat"><strong>' + completed + '</strong><small>已完成内容</small></div><div class="backend-stat"><strong>' + minutes + '</strong><small>学习分钟</small></div>';
      renderAssignmentRows(container.querySelector(".parent-assignments"), assignments.assignments);
      rows(container.querySelector(".parent-submissions"), submissions.submissions, function (item) { const row = document.createElement("div"); row.className = "backend-row"; row.innerHTML = '<div><strong>作业：' + escapeHtml(item.assignment_title) + '</strong><small>' + submissionStatus(item.status) + (item.score === null ? "" : " · " + item.score + "分") + '</small></div><span></span>'; return row; });
      rows(container.querySelector(".parent-certificates"), certificates.certificates, function (item) { const row = document.createElement("div"); row.className = "backend-row"; row.innerHTML = '<div><strong>证书：' + escapeHtml(item.course_title) + '</strong><small>' + escapeHtml(item.certificate_no) + '</small></div><span></span>'; return row; });
    } catch (error) { container.insertAdjacentHTML("beforeend", '<div class="backend-status is-error">' + escapeHtml(error.message) + '</div>'); }
  }

  function renderCourseOrderRows(container, orders, options = {}) {
    rows(container, orders, function (item) {
      const row = document.createElement("div");
      row.className = "backend-row";
      const amount = Number(item.amount_cents || 0) ? "¥" + (Number(item.amount_cents || 0) / 100).toFixed(2) : "线下确认";
      const student = options.showStudent && item.student_name ? escapeHtml(item.student_name) + " · " : "";
      row.innerHTML = '<div><strong>' + student + escapeHtml(item.course_title || item.title || "课程订单") + '</strong><small>' + orderStatus(item.status) + ' · ' + amount + ' · ' + formatTime(item.created_at) + '</small></div><span>' + escapeHtml(item.category || "") + '</span>';
      return row;
    });
  }

  async function renderStudentCourses(container) {
    if (!currentUser) {
      container.innerHTML = '<div class="backend-empty">登录后才能查看课程、报名参加与学习进度。</div><button type="button" class="backend-primary backend-login-gate">登录 / 注册</button>';
      container.querySelector(".backend-login-gate").addEventListener("click", openAccountPanel);
      return;
    }
    container.innerHTML = '<div class="backend-list student-enrollments"></div><h3>可参加课程</h3><div class="backend-list student-course-catalog"></div><div class="backend-status"></div>';
    const status = container.querySelector(".backend-status");
    try {
      const [enrollmentsData, coursesData] = await Promise.all([api("/api/enrollments"), api("/api/courses")]);
      rows(container.querySelector(".student-enrollments"), enrollmentsData.enrollments, function (item) {
        const row = document.createElement("div");
        row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.title) + '</strong><small>' + Number(item.completed_count || 0) + '/' + Number(item.content_count || 0) + ' 内容完成 · 进度 ' + Number(item.progress || 0) + '%</small></div><span>' + escapeHtml(item.category) + '</span>';
        return row;
      });
      rows(container.querySelector(".student-course-catalog"), coursesData.courses, function (item) {
        const contents = item.contents || [];
        const counts = contents.reduce(function (total, content) { total[content.type] = (total[content.type] || 0) + 1; return total; }, {});
        const row = document.createElement("div");
        row.className = "backend-row";
        const price = Number(item.price_cents || 0) ? ' · ¥' + (Number(item.price_cents || 0) / 100).toFixed(2) : ' · 线下确认';
        row.innerHTML = '<div><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.category) + price + ' · 视频' + (counts.video || 0) + ' · 任务' + (counts.task || 0) + ' · 作业' + (counts.homework || 0) + ' · 测试' + (counts.test || 0) + ' · 资料' + (counts.material || 0) + '</small></div>' + (item.enrolled ? '<span>已参加</span>' : '<button type="button">' + (currentUser ? '提交报名申请' : '登录后报名') + '</button>');
        row.querySelector("button")?.addEventListener("click", async function (event) {
          if (!currentUser) { openAccountPanel(); return; }
          event.currentTarget.disabled = true;
          try {
            await api(`/api/courses/${item.id}/orders`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ paymentMethod: "manual_review", amountCents: Number(item.price_cents || 0), contactInfo: { source: "student-dashboard" } }) });
            status.textContent = "课程订单已提交，等待管理员确认后才会开通学习进度。";
            await refreshLearningSummary();
            await renderStudentCourses(container);
          } catch (error) {
            status.className = "backend-status is-error";
            status.textContent = error.message;
            event.currentTarget.disabled = false;
          }
        });
        return row;
      });
    } catch (error) {
      status.className = "backend-status is-error";
      status.textContent = error.message;
    }
  }

  async function renderAdminOperations(main) {
    const section = document.createElement("section"); section.className = "backend-section";
    section.innerHTML = '<h3>内容、绑定与订单审核</h3><h3>课程订单</h3><div class="backend-list admin-course-orders"></div><h3>家长绑定</h3><div class="backend-list admin-links"></div><h3>社区内容</h3><div class="backend-list admin-posts"></div><div class="backend-status"></div>';
    main.appendChild(section); const status = section.querySelector(".backend-status");
    try {
      const [linksData, postsData, courseOrders] = await Promise.all([api("/api/admin/parent-links"), api("/api/admin/posts"), api("/api/course-orders")]);
      rows(section.querySelector(".admin-course-orders"), courseOrders.orders, function (item) {
        const row = document.createElement("div");
        row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.student_name) + ' · ' + escapeHtml(item.course_title) + '</strong><small>' + orderStatus(item.status) + ' · ' + formatTime(item.created_at) + '</small></div>' + (item.status === "paid" ? '<span>已开通</span>' : '<button type="button">确认并开通</button>');
        row.querySelector("button")?.addEventListener("click", async function () {
          await api(`/api/admin/course-orders/${item.id}/status`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "paid" }) });
          status.textContent = "订单已确认，课程已开通。";
          section.remove();
          await renderAdminOperations(main);
        });
        return row;
      });
      rows(section.querySelector(".admin-links"), linksData.links, function (item) { const row = document.createElement("div"); row.className = "backend-row"; row.innerHTML = '<div><strong>家长绑定：' + escapeHtml(item.parent_name) + ' → ' + escapeHtml(item.student_name) + '</strong><small>' + escapeHtml(item.relation) + ' · ' + (item.approved_at ? "已通过" : "待审核") + '</small></div>' + (item.approved_at ? '<span></span>' : '<button type="button">通过</button>'); row.querySelector("button")?.addEventListener("click", async function () { await api(`/api/admin/parent-links/${item.parent_id}/${item.student_id}/approve`, { method: "PATCH" }); await renderAdminOperations(main); section.remove(); }); return row; });
      rows(section.querySelector(".admin-posts"), postsData.posts, function (item) { const row = document.createElement("div"); row.className = "backend-row"; row.innerHTML = '<div><strong>动态：' + escapeHtml(item.display_name) + '</strong><small>' + escapeHtml(item.content).slice(0, 80) + ' · ' + item.status + '</small></div>' + (item.status === "pending" ? '<button type="button">发布</button>' : '<button type="button">隐藏</button>'); row.querySelector("button").addEventListener("click", async function () { await api(`/api/admin/posts/${item.id}/status`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: item.status === "pending" ? "published" : "hidden" }) }); status.textContent = "动态状态已更新。"; row.remove(); }); return row; });
    } catch (error) { status.textContent = error.message; }
  }

  async function studentDashboard(main) {
    main.innerHTML = '<div class="backend-role-summary"><div><h2>' + currentUser.displayName + '</h2><p>' + (currentUser.school || "未填写学校") + '</p></div><span class="backend-role-badge">学生</span></div>' +
      '<section class="backend-section"><h3>学习数据</h3><div class="backend-stat-grid"><div class="backend-stat"><strong>' + currentUser.points + '</strong><small>当前积分</small></div><div class="backend-stat"><strong class="student-progress-count">-</strong><small>学习内容</small></div><div class="backend-stat"><strong class="student-enrollment-count">-</strong><small>参加课程</small></div></div></section>' +
      '<section class="backend-section"><h3>我的研学课程</h3><div class="student-course-panel"></div></section><section class="backend-section"><h3>课程订单</h3><div class="backend-list student-course-orders"></div></section><section class="backend-section"><h3>老师下发任务</h3><div class="backend-list student-assignments"></div></section><section class="backend-section"><h3>我的作业</h3><div class="backend-list student-submissions"></div></section><section class="backend-section"><h3>学习证书</h3><div class="backend-list student-certificates"></div></section>';
    renderCloudTools(main);
    renderStudentCourses(main.querySelector(".student-course-panel"));
    try {
      const [progress, assignments, submissions, certificates, enrollments, courseOrders] = await Promise.all([api("/api/progress"), api("/api/assignments"), api("/api/submissions"), api("/api/certificates"), api("/api/enrollments"), api("/api/course-orders")]);
      main.querySelector(".student-progress-count").textContent = progress.progress.length;
      main.querySelector(".student-enrollment-count").textContent = enrollments.enrollments.length;
      renderAssignmentRows(main.querySelector(".student-assignments"), assignments.assignments);
      renderCourseOrderRows(main.querySelector(".student-course-orders"), courseOrders.orders);
      rows(main.querySelector(".student-submissions"), submissions.submissions, function (item) {
        const row = document.createElement("div"); row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.assignment_title) + '</strong><small>' + submissionStatus(item.status) + (item.score === null ? "" : " · " + item.score + "分") + '</small>' +
          (item.teacher_feedback ? '<p class="backend-feedback">教师评语：' + escapeHtml(item.teacher_feedback) + '</p>' : "") + attachmentLinks(item.files) + '</div><span></span>';
        return row;
      });
      rows(main.querySelector(".student-certificates"), certificates.certificates, function (item) {
        const row = document.createElement("div"); row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.course_title) + '</strong><small>证书编号 ' + escapeHtml(item.certificate_no) + ' · ' + (item.verified ? "已认证" : "待认证") + '</small></div><span></span>';
        return row;
      });
    } catch (error) { main.insertAdjacentHTML("beforeend", '<div class="backend-status is-error">' + error.message + '</div>'); }
  }

  async function teacherDashboard(main) {
    main.innerHTML = '<div class="backend-role-summary"><div><h2>' + currentUser.displayName + '</h2><p>作业批改与课程管理</p></div><span class="backend-role-badge">老师</span></div><section class="backend-section"><h3>已下发任务</h3><div class="backend-list teacher-assignments"></div></section><section class="backend-section"><h3>待批改作业</h3><div class="backend-list teacher-submissions"></div></section><div class="backend-status"></div>';
    renderCloudTools(main);
    renderTeacherManagement(main);
    try {
      const [assignments, data] = await Promise.all([api("/api/assignments"), api("/api/submissions")]);
      renderAssignmentRows(main.querySelector(".teacher-assignments"), assignments.assignments, { showStudent: true });
      rows(main.querySelector(".teacher-submissions"), data.submissions, function (item) {
        const row = document.createElement("article"); row.className = "backend-submission";
        row.innerHTML = '<div class="backend-submission-head"><div><strong>' + escapeHtml(item.student_name) + ' · ' + escapeHtml(item.assignment_title) + '</strong><small>' + submissionStatus(item.status) + ' · 附件' + item.files.length + '个</small></div><button type="button" class="backend-grade-toggle">' + (item.status === "graded" ? "修改批改" : "批改") + '</button></div>' +
          '<p class="backend-submission-text">' + escapeHtml(item.text_content || "未填写文字内容") + '</p>' + attachmentLinks(item.files) +
          '<form class="backend-form backend-grade-form" hidden><label>分数（0-100）<input name="score" type="number" min="0" max="100" step="1" value="' + (item.score ?? 85) + '" required></label><label>教师评语<textarea name="feedback" maxlength="1000" required>' + escapeHtml(item.teacher_feedback || "完成认真，继续保持。") + '</textarea></label><button class="backend-primary" type="submit">保存批改</button><div class="backend-status"></div></form>';
        const form = row.querySelector("form");
        row.querySelector(".backend-grade-toggle").addEventListener("click", function () { form.hidden = !form.hidden; if (!form.hidden) form.querySelector("input").focus(); });
        form.addEventListener("submit", async function (event) {
          event.preventDefault();
          const submit = form.querySelector("button[type=submit]");
          const status = form.querySelector(".backend-status");
          const values = Object.fromEntries(new FormData(form));
          submit.disabled = true;
          status.textContent = "正在保存...";
          try {
            await api(`/api/submissions/${item.id}/grade`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ score: Number(values.score), feedback: values.feedback }) });
            await teacherDashboard(main);
            main.querySelector(".backend-status").textContent = "批改结果已保存并通知学生。";
          } catch (error) { status.className = "backend-status is-error"; status.textContent = error.message; submit.disabled = false; }
        });
        return row;
      });
    } catch (error) { main.querySelector(".backend-status").textContent = error.message; }
  }

  async function parentDashboard(main) {
    main.innerHTML = '<div class="backend-role-summary"><div><h2>' + currentUser.displayName + '</h2><p>查看已绑定学生的学习情况</p></div><span class="backend-role-badge">家长</span></div>' +
      '<section class="backend-section"><h3>绑定学生</h3><form class="backend-form parent-bind"><label>学生邮箱<input type="email" name="studentEmail" required></label><label>关系<input name="relation" value="监护人"></label><button class="backend-primary" type="submit">提交绑定申请</button></form><div class="backend-status"></div></section>' +
      '<section class="backend-section"><h3>我的学生</h3><div class="backend-list parent-students"></div></section>';
    const status = main.querySelector(".backend-status");
    renderCloudTools(main);
    const studentDetail = document.createElement("section"); studentDetail.className = "backend-section parent-student-detail"; main.appendChild(studentDetail);
    main.querySelector(".parent-bind").addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        const data = await api("/api/parent/students", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) });
        status.textContent = data.message;
        parentDashboard(main);
      } catch (error) { status.className = "backend-status is-error"; status.textContent = error.message; }
    });
    try {
      const data = await api("/api/parent/students");
      rows(main.querySelector(".parent-students"), data.students, function (item) {
        const row = document.createElement("div"); row.className = "backend-row";
        row.innerHTML = '<div><strong>' + escapeHtml(item.display_name) + '</strong><small>' + escapeHtml(item.school) + ' · ' + (item.approved_at ? "已绑定" : "等待审核") + '</small></div>' + (item.approved_at ? '<button type="button">查看</button>' : '<span></span>');
        row.querySelector("button")?.addEventListener("click", function () { renderParentStudent(studentDetail, item); });
        return row;
      });
    } catch (error) { status.textContent = error.message; }
  }

  async function adminDashboard(main) {
    main.innerHTML = '<div class="backend-role-summary"><div><h2>' + currentUser.displayName + '</h2><p>用户、内容与平台运营</p></div><span class="backend-role-badge">管理员</span></div><section class="backend-section"><h3>上线检查</h3><div class="backend-list admin-readiness"></div></section><section class="backend-section"><h3>平台概览</h3><div class="backend-stat-grid admin-stats"></div></section><section class="backend-section"><h3>账号审核</h3><div class="backend-list admin-users"></div></section><div class="backend-status"></div>';
    renderCloudTools(main);
    renderTeacherManagement(main);
    renderAdminOperations(main);
    try {
      const [readiness, overview, users] = await Promise.all([api("/api/admin/readiness"), api("/api/admin/overview"), api("/api/admin/users")]);
      rows(main.querySelector(".admin-readiness"), readiness.checks, function (item) {
        const row = document.createElement("div");
        row.className = "backend-row";
        row.innerHTML = '<div><strong>' + item.label + '</strong><small>' + escapeHtml(item.detail) + '</small></div><span>' + (item.ok ? "OK" : "缺失") + '</span>';
        return row;
      });
      const totalUsers = overview.users.reduce(function (total, item) { return total + item.count; }, 0);
      main.querySelector(".admin-stats").innerHTML = '<div class="backend-stat"><strong>' + totalUsers + '</strong><small>用户</small></div><div class="backend-stat"><strong>' + overview.courses + '</strong><small>课程</small></div><div class="backend-stat"><strong>' + overview.errors24h + '</strong><small>24小时错误</small></div><div class="backend-stat"><strong>' + overview.posts.reduce((n,i)=>n+i.count,0) + '</strong><small>社区帖子</small></div>';
      rows(main.querySelector(".admin-users"), users.users, function (item) {
        const row = document.createElement("div"); row.className = "backend-row";
        row.innerHTML = '<div><strong>' + item.display_name + ' · ' + roles[item.role] + '</strong><small>' + item.email + ' · ' + item.status + '</small></div>' + (item.status === "pending" ? '<button type="button">通过</button>' : '<span></span>');
        row.querySelector("button")?.addEventListener("click", async function () {
          await api(`/api/admin/users/${item.id}/status`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ status: "active" }) });
          adminDashboard(main);
        });
        return row;
      });
    } catch (error) { main.querySelector(".backend-status").textContent = error.message; }
  }

  function openAccountPanel() {
    const main = panel(currentUser ? "账号中心" : "登录知行研学", currentUser ? "真实数据已与云端同步" : "学生、老师、家长、管理员统一入口");
    if (!currentUser) return authForm(main);
    if (currentUser.role === "student") studentDashboard(main);
    else if (currentUser.role === "teacher") teacherDashboard(main);
    else if (currentUser.role === "parent") parentDashboard(main);
    else window.location.href = "./admin.html";
  }

  function openCloudTool(tool) {
    if (!currentUser) {
      openAccountPanel();
      return;
    }
    const titles = {
      community: ["云端动态", "发布、评论和审核后的真实社区内容"],
      messages: ["消息中心", "好友、老师、家长和学生之间的真实会话"],
      notifications: ["通知中心", "课程、作业、证书和平台提醒"],
      shop: ["积分商城", "积分兑换和订单记录"],
      settings: ["账号设置", "资料、提醒和偏好设置"]
    };
    const copy = titles[tool] || ["云端功能", "真实数据已与云端同步"];
    const main = panel(copy[0], copy[1]);
    renderCloudTools(main);
    window.setTimeout(function () {
      const button = main.querySelector(`.backend-tool-tabs [data-tool="${tool}"]`);
      if (button) button.click();
    }, 0);
  }

  async function init() {
    accountButton();
    try {
      await api("/api/health");
      backendAvailable = true;
      try { currentUser = (await api("/api/auth/me")).user; } catch (_error) { currentUser = null; }
    } catch (_error) { backendAvailable = false; }
    accountButton();
    await refreshLearningSummary();
    const root = document.getElementById("root");
    if (root) {
      let scheduled = false;
      new MutationObserver(function () {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(function () { scheduled = false; applyLearningSummary(); });
      }).observe(root, { childList: true, subtree: true });
    }
    window.addEventListener("hashchange", function () { requestAnimationFrame(applyLearningSummary); });
  }

  window.zhixingApi = {
    api,
    get user() { return currentUser; },
    get summary() { return learningSummary; },
    openAuth: openAccountPanel,
    openTool: openCloudTool,
    forceLogout,
    async submitHomework({ themeName, title, text, files, contentId }) {
      if (!currentUser) { openAccountPanel(); throw new Error("请先登录学生账号后提交作业"); }
      if (currentUser.role !== "student") throw new Error("只有学生账号可以提交作业");
      const form = new FormData();
      if (contentId) form.append("contentId", contentId);
      form.append("themeName", themeName);
      form.append("contentTitle", title);
      form.append("textContent", text);
      files.forEach(function (file) { form.append("files", file); });
      return api("/api/submissions", { method: "POST", body: form });
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
