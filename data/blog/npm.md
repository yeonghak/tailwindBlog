---
title: npm常用命令
date: '2023-05-23'
tags: ['npm']
draft: false
summary: npm常用命令
---

## 查看全局已安装

查看全局已安装（-g 的意思是 global 全局的意思）

```bash
npm ls -g
```

会发现，会把包的所有依赖也显示出来

加上层级控制显示深度：--depth 0

```bash
npm ls -g --depth 0
```

这样就只会查到安装的包，并不会查到包的依赖。

## 查看项目中已安装

查看当前项目已安装包（项目跟目录必须有 package.json 文件）

```bash
npm ls
```

同样也是会把所有包的依赖显示出来。同上，加上 --depth 0 就好了。

```bash
npm ls --depth 0
```

如果只想显示生产环境依赖的包

```bash
npm ls --depth 0 --prod
```

只显示开发环境依赖的包

```bash
npm ls --depth 0 --dev
```
