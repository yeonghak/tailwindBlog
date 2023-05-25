---
title: 'autoprefixer: Replace color-adjust to print-color-adjust'
date: '2023-05-25'
tags: ['next-js', '报错解决']
draft: false
summary: NextJS中autoprefixer的color-adjust相关报错
---

## 报错

NextJS 中 autoprefixer 的 color-adjust 相关报错，

```bash
autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated
```

## 解决

```bash
npm install autoprefixer@10.4.5 --save-exact
```
