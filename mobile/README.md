# 知行研学移动端

Android 1.3.19 是官网直接分发的 Release APK，使用独立长期发布证书签名并关闭调试模式。页面运行机制改为事件驱动，停止反复注册 Service Worker、每次启动清缓存和高频整页扫描；社区帖子图片按帖子和位置固定映射，避免重复图像、闪烁及布局抖动。课程设计器安全区和彩色“知行”桌面图标继续保留。已安装 1.3.11—1.3.13 的用户可直接覆盖升级；1.3.10 及更早版本需先卸载旧版。

这是 Capacitor 移动端工程。网页资源会完整打包进应用，不是浏览器快捷方式。GitHub Actions 会在推送 `v*` 标签时构建可安装的 Android APK，并构建 iOS 未签名归档。

本地准备移动端资源：

```bash
cd mobile
npm install
npm run prepare:web
npx cap add android
npx cap sync android
```

Android 正式包必须使用长期保存的发布证书；本地证书保存在被 Git 忽略的 `.android-build-tools/signing` 目录，不能删除或上传到公开仓库。GitHub Actions 发布标签时需要配置 `ANDROID_KEYSTORE_BASE64`、`ANDROID_KEYSTORE_PASSWORD`、`ANDROID_KEY_ALIAS` 和 `ANDROID_KEY_PASSWORD` 四个仓库机密。iOS 必须使用 Apple Developer 证书并通过 TestFlight 或 App Store 分发。
