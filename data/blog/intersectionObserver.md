---
title: 进入视窗检测
date: '2023-07-01'
tags: ['JAVASCRIPT']
draft: false
summary: 使用IntersectionObserver， 判断元素是否进入可是窗口内
---

```html
<div class="wrap">
  <div style="height:686px;"></div>
  <div class="box" style="height:200px; background-color:#000;"></div>
</div>
<span class="ratio"></span>
```

```css
* {
  margin: 0;
  padding: 0;
}
.wrap {
  background-color: #fff;
}
.wrap.isShow {
  background-color: #ccc;
}

.ratio {
  position: fixed;
  right: 10px;
  bottom: 10px;
  color: #fff;
}
```

```javascript
function observer() {
  var intersectionObserver = new IntersectionObserver(function (entries) {
    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    if (entries[0].intersectionRatio > 0) {
      console.log('Loaded new items')
      document.querySelector('.wrap').classList.add('isShow')
    } else {
      console.log('Not Loaded new items')
      document.querySelector('.wrap').classList.remove('isShow')
    }
    document.querySelector('.ratio').innerText = entries[0].intersectionRatio
  })

  // start observing
  intersectionObserver.observe(document.querySelector('.box'))
}
observer()

window.addEventListener('scroll', function () {
  observer()
})
```
