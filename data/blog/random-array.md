---
title: 随机打乱数组
date: '2023-06-30'
tags: ['随机', '数组']
draft: false
# summary: Example of a markdown file with code blocks and syntax highlighting
---

```javascript
var arr = [1, 2, 3]
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
console.log(shuffle(arr))
```
