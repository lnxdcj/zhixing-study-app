# 知行研学移动端

Android 1.3.6 已内置详细智能规划，并将登录 / 注册按钮调整到与品牌标题同一行高度；无需联网即可生成方案。本次不代表在线登录已完成适配，也不代表已完成真机验收或正式上架。

这是 Capacitor 移动端工程。网页资源会完整打包进应用，不是浏览器快捷方式。GitHub Actions 会在推送 `v*` 标签时构建可安装的 Android APK，并构建 iOS 未签名归档。

本地准备移动端资源：

```bash
cd mobile
npm install
npm run prepare:web
npx cap add android
npx cap sync android
```

Android 工作流当前生成由 Android 调试证书签名、可直接安装测试的 APK。正式上架前应配置长期保存的发布签名密钥。iOS 必须使用 Apple Developer 证书并通过 TestFlight 或 App Store 分发，不能直接安装未签名 IPA。
