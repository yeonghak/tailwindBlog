---
title: Swiper延迟初始化
date: '2023-07-01'
tags: ['Swiper', 'javascript', '网站优化']
draft: false
summary: Swiper延迟初始化
---

```javascript
function swiperLazyInit() {
  var swiperList = document.querySelectorAll('.swiper-lazy-init')
  if (swiperList && swiperList.length > 0) {
    var swiperObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            init(entry.target)
            swiperObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '100px' }
    )

    swiperList.forEach(function (swiper) {
      swiperObserver.observe(swiper)
    })
  }

  function init(container) {
    if (container.classList.contains('swiper-container-initialized') === false) {
      var key = container.getAttribute('data-swiper-key')
      new Swiper(container, swiperOptions[key])
    }
  }

  var swiperOptions = {
    prdSwiper: {
      slidesPerView: 2,
      spaceBetween: 0,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1025: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    },
  }
}

window.addEventListener('load', function () {
  swiperLazyInit()
})
```
