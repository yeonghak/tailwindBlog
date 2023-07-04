---
title: JS获取URL参数
date: '2023-07-01'
tags: ['JAVASCRIPT']
draft: false
summary: JS获取URL参数
---

```javascript
/**
 * document.location.href split
 * return array Param
 */
var getQueryString = function (sKey) {
  var sQueryString = document.location.search.substring(1)
  var aParam = {}

  if (sQueryString) {
    var aFields = sQueryString.split('&')
    var aField = []
    for (var i = 0; i < aFields.length; i++) {
      aField = aFields[i].split('=')
      aParam[aField[0]] = aField[1]
    }
  }

  aParam.page = aParam.page ? aParam.page : 1
  return sKey ? aParam[sKey] : aParam
}
```
