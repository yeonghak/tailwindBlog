---
title: 'Input elements should have autocomplete attributes'
date: '2023-05-30'
tags: ['react', '报错解决']
draft: false
summary: 'Input elements should have autocomplete attributes'
---

## 报错

input 元素出现警告

```jsx
<TextField id="password" type="password" label="password" />
```

```bash
[DOM] Input elements should have autocomplete attributes (suggested: "current-password")
```

## 解决

虽然这些警告不会影响代码的运行，但终归是个警告，最好处理一下，处理方法我们可以在 input 中加上 autocomplete 这个属性

```jsx
<TextField id="password" type="password" label="password" autoComplete="off" />
```
