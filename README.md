# 知行研学

面向中小学生、大学生、职业教育、党校干部、企事业单位与普通成年人的研学课程和活动设计应用。

## 在线使用

- 下载中心网址：<https://zhixing-study-zhaoziyuan.netlify.app/download.html>
- 原二维码继续有效：`assets/qr/zhixing-production-url.png`
- 新下载中心：`/download.html`，可选择 Windows、Apple、安卓或网页版

本次 GitHub 下载版不会改变生产网址或二维码。

## 核心能力

- 根据关键字、目的地、适用人群、时长、人数和预算生成研学方案
- 覆盖小学、初中、高中、大学、职业教育、教师、亲子家庭、成人、银龄、企业与党校干部等人群
- 提供红色教育、历史文化、非遗传承、自然生态、科技创新、劳动实践、工业研学、乡村振兴、法治教育、国防教育等丰富课程类型
- 组合实地考察、专题讲授、任务探究、角色模拟、访谈调研、工作坊、志愿服务、行动学习等活动方式
- 输出课程目标、分时日程、具体活动、成果任务、安全提示、物资与预算建议
- 课程库、报名学习、作业评价、证书、消息、社区和后台管理

## 下载运行

在 GitHub 仓库右侧进入 **Releases**，普通用户下载 `Zhixing-Study-Setup-*.zip`，解压后只会得到一个 EXE 安装程序，双击后按照安装向导完成安装。安装程序会创建桌面快捷方式和开始菜单入口。

ZIP 是开发者源码包，不是普通用户安装包。

需要使用源码运行时：

### Windows

双击 `start-windows.cmd`。浏览器会打开 <http://127.0.0.1:4173/#/home>。

### macOS / Linux

安装 Node.js 22 或更高版本，然后在项目目录执行：

```bash
node server.mjs
```

本地下载版可以浏览应用并使用课程方案设计器的本地生成能力。账号、数据库、在线 AI、地图、邮件等完整在线能力需要配置 Netlify 环境，详见 `DEPLOYMENT.md`。

## 本地开发

```bash
npm install
npm test
npm run preview
```

需要联调 Netlify Functions 与数据库时：

```bash
npx netlify dev
```

环境变量模板见 `.env.example`。不要把真实密钥提交到 GitHub。

## GitHub Release

推送 `v*` 标签后，GitHub Actions 会自动创建 Release 并附加可下载 ZIP：

```bash
git tag v1.1.0
git push origin v1.1.0
```

也可以在 Actions 页面手动运行“Build downloadable app”，只生成可下载构建产物而不发布新版本。
