---
title: 图片加载失败处理
date: '2023-07-02'
tags: ['JAVASCRIPT']
draft: false
summary: 图片加载失败处理
---

```javascript
$(window).load(function () {
  $('img').each(function ($i, $item) {
    var $img = new Image()
    $img.onerror = function () {
      $item.src = 'xxx.gif'
    }
    $img.src = this.src
  })
})
;(function () {
  var selector = 'img'
  var errorImage = 'xxx.gif'
  var pass = ['']

  function isPass(el) {
    if (el.tagName !== 'IMG') {
      return true
    }
    var src = el.getAttribute('src')
    if (!src) {
      return true
    }
    if (pass.includes(src)) {
      return true
    }
    return false
  }

  window.addEventListener('load', function () {
    var list = document.querySelectorAll(selector)
    list.forEach(function (el) {
      el.onerror = function () {
        el.src = errorImage
      }
      if (isPass(el)) return
      if (el.complete) {
        if (typeof el.naturalHeight === 'undefined' || el.naturalHeight === 0) {
          el.src = errorImage
        }
      }
    })
  })
})()
```
