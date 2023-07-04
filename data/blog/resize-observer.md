---
title: 检测元素大小变化
date: '2023-07-01'
tags: ['JAVASCRIPT']
draft: false
summary: 使用ResizeObserver， 检测元素大小变化
---

```javascript
// resize observer
function resizeObserver() {
  const targets = document.querySelectorAll('.resizeObserver')

  targets.forEach((target) => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        init(entry, target)
      })
    })
    ro.observe(target)
  })

  function init(entry, target) {
    const { width, height } = entry.contentRect
    console.log(width, height)
  }
}
window.addEventListener('load', function () {
  resizeObserver()
})
```
