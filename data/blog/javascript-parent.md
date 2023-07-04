---
title: 原生JS获取父级元素
date: '2023-07-02'
tags: ['JAVASCRIPT']
draft: false
summary: 原生JS获取父级元素
---

```javascript
// 方法1
function getParents(el, parentSelector) {
  if (parentSelector === undefined) {
    parentSelector = document
  }
  var parents = []
  var p = el.parentNode

  while (p !== parentSelector) {
    var o = p
    parents.push(o)
    p = o.parentNode
  }
  parents.push(parentSelector)
  return parents
}

var a = getParents(e.target)

// 方法二
//common getParents
function getParents(elem, callback) {
  // Setup variables
  let parents = []
  let parent = elem.parentNode
  let index = 0

  // Make sure callback is valid
  if (typeof callback !== 'function') {
    callback = null
  }

  // Get matching parent elements
  while (parent && parent !== document) {
    // If using a selector, add matching parents to array
    // Otherwise, add all parents
    if (callback) {
      if (callback(parent, index, elem)) {
        parents.push(parent)
      }
    } else {
      parents.push(parent)
    }

    // Jump to the next parent node
    index++
    parent = parent.parentNode
  }

  return parents
}

// 方法三
var getParentsBak = function (elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1
      }
  }

  // Set up a parent array
  var parents = []

  // Push each parent element to the array
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem)
      }
      continue
    }
    parents.push(elem)
  }

  // Return our parent array
  return parents
}
```
