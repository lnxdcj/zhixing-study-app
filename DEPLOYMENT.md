# 知行研学上线说明

## 当前已完成

- Netlify 生产站点与 Functions 已部署
- 数据库迁移 `0001` 到 `0009` 已执行
- 游客、学生、家长、老师、管理员权限已接通
- 课程、视频/资料、报名订单、作业提交、批改、证书、消息、社区审核流程已接通
- 游客不会看到个人学习进度、代办、消息、排行榜“我”等数据

## 生产环境变量

在 Netlify 项目 `zhixing-study-zhaoziyuan` 的 **Project configuration → Environment variables** 中配置：

| 变量 | 用途 | 必需 |
| --- | --- | --- |
| `OPENAI_API_KEY` | AI 导游真实回答 | AI 导游需要 |
| `AMAP_WEB_SERVICE_KEY` | 高德 Web 服务 | 地址搜索/路径服务需要 |
| `AMAP_JS_KEY` | 高德 JS 地图 | 地图交互需要 |
| `AMAP_JS_SECURITY_CODE` | 高德安全密钥 | 使用安全代理时需要 |
| `WECHAT_PAY_MCH_ID` 或 `ALIPAY_APP_ID` | 在线支付 | 在线支付需要 |
| `SMS_PROVIDER`、`SMS_API_KEY` | 短信验证码 | 短信登录需要 |
| `RESEND_API_KEY`、`EMAIL_FROM` | 邮箱验证、找回密码 | 邮件安全流程需要 |
| `ADMIN_MFA_SECRET` | 管理员二次验证码 | 管理员 MFA 需要 |
| `ALERT_WEBHOOK_URL` | 错误/安全告警推送 | 异常告警需要 |
| `BLOB_READ_WRITE_TOKEN` 或对象存储变量 | 作业附件、视频文件 | 大文件生产存储需要 |

未配置支付时，系统使用管理员人工审核订单；未配置对象存储时，系统使用数据库文件回退；未配置 AI 时，AI 导游会明确提示服务未配置，不会伪造“真实 AI”结果。

## 安全能力

- 登录、注册、找回密码均按 IP/邮箱限流
- 邮箱验证令牌和密码重置令牌只保存哈希，且有过期时间和一次性消费限制
- 配置 `ADMIN_MFA_SECRET` 后，管理员登录会要求 30 秒轮换的 6 位二次验证码
- 管理员可通过 `/api/admin/security` 查看错误、审计、限流和登录事件
- `security-monitor` 定时函数每天检查错误、限流与待审核账号；配置 `ALERT_WEBHOOK_URL` 后会推送告警
- Netlify Database 负责在线数据库托管；正式上线仍应在 Netlify/数据库提供商侧开启自动备份和保留策略

## 演示账号

快捷演示账号使用独立密码：

- 学生：`demo.student@zhixing.study` / `DemoStudent#26A`
- 家长：`demo.parent@zhixing.study` / `DemoParent#26B`
- 老师：`demo.teacher@zhixing.study` / `DemoTeacher#26C`
- 管理员：`demo.admin@zhixing.study` / `AdminZx#26D`

其余展示账号及各自密码见 `showcase-accounts.md`。

正式上线前应替换为真实账号，并关闭或隐藏演示账号入口。

## 数据库迁移

Netlify 部署时会自动执行 `netlify/database/migrations` 下的迁移。新增迁移必须使用递增编号，禁止修改已经执行过的历史迁移文件。
