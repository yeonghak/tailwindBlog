---
title: 'execa@7.1.1: The engine "node" is incompatible with this module'
date: '2023-05-26'
tags: ['npm', '报错解决']
draft: false
summary: '安装npm包时，显示node版本不兼容'
---

## 报错

```bash
execa@7.1.1: The engine "node" is incompatible with this module
```

## 解决

### 方案 1

卸载 node 重装指定版本范围的

https://nodejs.cn/

### 方案 2

忽略错误后重新 yarn install

```bash
yarn config set ignore-engines true
```
