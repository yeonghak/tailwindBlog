---
title: JS随机打乱数组
date: '2023-06-30'
tags: ['javascript', '随机', '数组']
draft: false
summary: JS随机打乱数组
---

## 方法 1：随机抽取法, 时间复杂度 O(n^2)

```javascript
function randomSortArray(arr) {
  var stack = []
  while (arr.length) {
    //Math.random()：返回 [0,1) 之间的一个随机数
    var index = parseInt(Math.random() * arr.length) // 利用数组长度生成随机索引值
    stack.push(arr[index]) // 将随机索引对应的数组元素添加到新的数组中
    arr.splice(index, 1) // 删除原数组中随机生成的元素
  }
  return stack
}
var arr = [1, 2, 3, 4, 5, 6]
var res = randomSortArray(arr)
console.log(res) // [ 5, 2, 4, 6, 3, 1 ]
```

## 方法 2：时间复杂度 O(n)

```javascript
function randomSortArray2(arr) {
  var len = arr.length
  //首先从最大的数开始遍历，之后递减
  for (var i = len - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1)) //随机索引值randomIndex是从0-arr.length中随机抽取的，因为Math.floor()方法是向下取整的，所以这里是i+1
    //下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置
    var temp = arr[randomIndex]
    arr[randomIndex] = arr[i]
    arr[i] = temp
  }
  //每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面
  return arr
}
var arr = [1, 2, 3, 4, 5, 6]
var res = randomSortArray2(arr)
console.log(res) // [ 1, 3, 5, 2, 4, 6 ]
```

## 方法 3

```javascript
// 方法3
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5)
}
```
