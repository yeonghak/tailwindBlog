---
title: JSX次数循环
date: '2023-07-02'
tags: ['jsx']
draft: false
summary: JSX次数循环
---

## 方法 1

```jsx
{[...new Array(3).keys()].map((_, index) => (
  <div>循环3次</div>
))}
//return [undefined, undefined, undefined]
```

## 方法 2

```jsx
{[...new Array(10)].map((_, index) => (
  <div>循环10次</div>
))}
//return [0, 1, 2]
```