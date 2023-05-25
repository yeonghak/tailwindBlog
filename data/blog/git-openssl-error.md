---
title: 'OpenSSL SSL_read: Connection was reset, errno 10054'
date: '2023-05-25'
tags: ['git', '报错解决']
draft: false
summary: 'OpenSSL SSL_read: Connection was reset, errno 10054'
---

## 报错

`git push` 时 报错。

```bash
OpenSSL SSL_read: Connection was reset, errno 10054
```

## 解决

### 用户信息问题

查看用户名，邮箱

```bash
git config user.name
git config user.email
```

修改，用户名，邮箱

```bash
git config --global user.name "xxx"
git config --global user.email "xxx"
```

移除仓库，重新添加

```bash
git remote rm origin
git remote add origin https://github.com/XXX
```

### 解除 SSL 认证

```bash
git config --global http.sslVerify "false"
```

### 更新 DNS 缓存

在`cmd`窗口输入

```bash
ipconfig /flushdns
```

文件过大，超过上限，修改为 500MB。

```bash
git config http.postBuffer 5242880003
```
