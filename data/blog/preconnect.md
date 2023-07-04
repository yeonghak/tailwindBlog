---
title: 预链接
date: '2023-07-04'
tags: ['preconnect', '网站优化']
draft: false
summary: 预链接
---

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="font"
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
/>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="preload"
  as="style"
  onload="this.onload=null; this.rel='stylesheet'"
  crossorigin
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"
/>
```
