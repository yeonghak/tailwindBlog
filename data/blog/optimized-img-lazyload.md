---
title: 图片懒加载
date: '2023-07-01'
tags: ['JAVASCRIPT', '懒加载', '网站优化']
draft: false
summary: 图片懒加载
---

```javascript
function imgLazyLoading() {
  const images = document.querySelectorAll('[data-src]')
  const config = {
    rootMargin: '0px 0px 100px 0px',
    threshold: 0,
  }
  let loaded = 0

  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`Image ${entry.target.src} is in the viewport!`)
        preloadImage(entry.target)
        self.unobserve(entry.target)
      }
    })
  }, config)

  images.forEach((image) => {
    observer.observe(image)
  })

  function preloadImage(img) {
    const src = img.getAttribute('data-src')
    if (!src) {
      return
    }
    img.src = src
    _updateMonitoring()
  }

  function _updateMonitoring() {
    loaded += 1
    console.log(`Image ${loaded} loaded successfully`)
  }
}
window.addEventListener('load', function () {
  imgLazyLoading()
})
```

```css
img.lazy {
  background: url('加载中图片') no-repeat center center;
}
```

```html
<img
  class="lazy"
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII="
  data-src="origin url"
/>
```
