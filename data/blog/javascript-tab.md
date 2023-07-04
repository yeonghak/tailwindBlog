---
title: 原生JS实现Tab选项卡
date: '2023-07-03'
tags: ['JAVASCRIPT']
draft: false
summary: 原生JS实现Tab选项卡
---

```html
<div class="eTab">
  <ul>
    <li class="selected"><a href="#tab1">tab1</a></li>
    <li><a href="#tab1">tab2</a></li>
    <li><a href="#tab1">tab3</a></li>
  </ul>
</div>
<div id="tab1" class="show">tab1</div>
<div id="tab2">tab2</div>
<div id="tab3">tab3</div>
```

```javascript
function sibling(s) {
  // get siblings nodes
  let siblingsArr = []
  let b = s.parentNode.children
  for (let i = 0, bl = b.length; i < bl; i++) {
    if (b[i] !== s) {
      siblingsArr.push(b[i])
    }
  }
  return siblingsArr
}

const handleTab = function () {
  const findTabs = document.querySelectorAll('.eTab')

  if (findTabs && findTabs.length >= 1) {
    findTabs.forEach(function (value) {
      const findAnchors = value.querySelectorAll('a')

      findAnchors.forEach(function (el) {
        el.addEventListener('click', (event) => {
          const findSiblingsLis = sibling(event.target.parentElement)
          findSiblingsLis.forEach(function (el) {
            el.classList.remove('selected')
          })
          event.target.parentElement.classList.add('selected')

          const findTabConts = document.querySelector(event.target.getAttribute('href'))
          const findSiblingsTabs = sibling(findTabConts)
          findSiblingsTabs.forEach(function (el) {
            el.classList.remove('show')
          })
          findTabConts.classList.add('show')

          event.preventDefault()
        })
      })
    })
  }
}
handleTab()
```
