---
title: 视频懒加载
date: '2023-07-04'
tags: ['懒加载', '网站优化']
draft: false
summary: 视频懒加载
---

```html
<video
  class="lazy"
  autoplay
  muted
  loop
  playsinline
  width="610"
  height="254"
  poster="one-does-not-simply.jpg"
>
  <source data-src="one-does-not-simply.webm" type="video/webm" />
  <source data-src="one-does-not-simply.mp4" type="video/mp4" />
</video>
```

```javascript
document.addEventListener('DOMContentLoaded', function () {
  var lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'))

  if ('IntersectionObserver' in window) {
    var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source]
            if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
              videoSource.src = videoSource.dataset.src
            }
          }

          video.target.load()
          video.target.classList.remove('lazy')
          lazyVideoObserver.unobserve(video.target)
        }
      })
    })

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo)
    })
  }
})
```
