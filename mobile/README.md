# 知行研学移动端

Capacitor 原生壳工程。GitHub Actions 会在推送 `v*` 标签时构建 Android APK，并构建 iOS 未签名归档。

Android 需要签名密钥才能发布正式 APK；iOS 必须使用 Apple Developer 证书并通过 TestFlight/App Store，不能直接分发未签名 IPA。
