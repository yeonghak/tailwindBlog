---
title: 背景图懒加载
date: '2023-07-04'
tags: ['懒加载', '网站优化']
draft: false
summary: 背景图懒加载
---

```html
<div class="lazy-bg"></div>
```

```css
.lazy-bg {
  background-image: none !important;
}
```

```javascript
var lazyBackground = function () {
  var className = 'lazy-bg'

  var intersectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.remove(className)
          intersectionObserver.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '300px' }
  )

  var targetList = document.querySelectorAll('.' + className)
  targetList.forEach(function (el) {
    intersectionObserver.observe(el)
  })
}

window.addEventListener('load', function () {
  lazyBackground()
})
```
