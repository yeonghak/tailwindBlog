---
title: 原生JS获取相邻兄弟元素
date: '2023-07-03'
tags: ['JAVASCRIPT']
draft: false
summary: 原生JS实现Tab选项卡
---

```javascript
function sibling(s) {
  let siblingsArr = []
  let b = s.parentNode.children
  for (let i = 0, bl = b.length; i < bl; i++) {
    if (b[i] !== s) {
      siblingsArr.push(b[i])
    }
  }
  return siblingsArr
}
```
