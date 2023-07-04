---
title: 优化CSS3动画
date: '2023-07-01'
tags: ['JAVASCRIPT', '网站优化']
draft: false
summary: 优化CSS3动画，减少臃肿的第三方库
---

```html
<img
  src="xxx.png"
  data-ioa="fade-up"
  data-ioa-duration="0.8"
  loading="lazy"
  width="100%"
  height="100%"
/>
```

```css
.ioa-fade-up {
  visibility: hidden;
  opacity: 0;
  transform: translateY(50px);
}
.ioa-fade-up.isVisible {
  visibility: inherit;
  opacity: 1;
  transform: translateY(0);
}

.ioa-fade-down {
  visibility: hidden;
  opacity: 0;
  transform: translateY(-50px);
}
.ioa-fade-down.isVisible {
  visibility: inherit;
  opacity: 1;
  transform: translateY(0);
}

.ioa-slide-left-out {
  visibility: inherit;
  opacity: 1;
}
.ioa-slide-left-out.isVisible {
  transform: translateX(-99.99%);
}

.ioa-slide-right-out {
  visibility: inherit;
  opacity: 1;
}
.ioa-slide-right-out.isVisible {
  transform: translateX(99.99%);
}

.ioa-zoom-in {
  visibility: hidden;
  opacity: 0;
  transform: scale(0.1);
}
.ioa-zoom-in.isVisible {
  visibility: inherit;
  opacity: 1;
  transform: scale(1);
}

.ioa-zoom-out {
  visibility: hidden;
  opacity: 0;
  transform: scale(1.5);
}
.ioa-zoom-out.isVisible {
  visibility: inherit;
  opacity: 1;
  transform: scale(1);
}
```

```javascript
var ioaAnimation = function () {
  var prefix = 'ioa-',
    defaultAnimation = 'fade-up',
    defaultAnimationDealy = 0.1,
    defaultAnimationDuration = 0.5

  var intersectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        animationController(entry.target)
      } else if (entry.intersectionRatio === 0) {
        entry.target.classList.remove('isVisible')
        entry.target.style.transition = 'none'
      }
    })
  })

  var targetList = document.querySelectorAll('*[data-ioa]')
  targetList.forEach(function (el) {
    intersectionObserver.observe(el)
    init(el)
  })

  function init(el) {
    var type = el.getAttribute('data-ioa') || defaultAnimation
    el.classList.add(prefix + type)
  }

  function animationController(el) {
    var options = {
      delay: parseFloat(el.getAttribute('data-ioa-delay')) || defaultAnimationDealy,
      duration: parseFloat(el.getAttribute('data-ioa-duration')) || defaultAnimationDuration,
    }

    var property = 'all ',
      duration = options.duration + 's ',
      delay = options.delay + 's'

    el.style.transition = property + duration + delay
    el.style.webkitTransition = property + duration + delay

    el.classList.add('isVisible')
  }
}
window.addEventListener('load', function () {
  ioaAnimation()
})
```
