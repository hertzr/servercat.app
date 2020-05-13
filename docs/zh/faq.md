---
path: "/zh/faq"
date: "2019-05-04"
title: "ServerCat FAQ"
---

### ServerCat 是如何工作的，会在服务器上安装程序吗？

ServerCat 通过 SSH 直接读取 Linux 的 <code>/proc</code> 文件系统来获得系统的运行状态。
不依赖任何第三方工具，也不会在服务器上残留任何文件。

### 为何无法显示 macOS/FreeBSD/*** 的运行状态？

ServerCat 大部分数据依赖 Linux 内核的 <code>/proc</code> 子系统，在其它平台上由于没有同类的内核统计机制，暂时无法显示所有指标。


### 我的数据安全吗？

数据保存在本地的 App 沙盒中，敏感信息（Key 和 密码）会经 AES 加密保存。

### 数据同步安全吗？

数据同步使用 Apple iCloud 的服务，数据（敏感信息同样会经过 AES 加密）直接传到 iCloud 服务器上，不会经过任何第三方服务器。

### ServerCat 与 HyperApp 有何区别？

HyperApp 是作者开发的另外一个自动安装应用的 iOS App，自带了预配置的一些 Docker 镜像，来帮助用户快捷的部署应用。
但由于某些原因导致其在中国区不可用。
<br/>
ServerCat 不再提供预配置的应用部署服务，定位于专业的运维工具。
