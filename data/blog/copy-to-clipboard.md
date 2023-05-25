---
title: "navigator.clipboard: Cannot read properties of undefined (reading 'writeText')"
date: '2023-05-23'
tags: ['javascript', '报错解决']
draft: false
summary: 在 Chrome 的 DevTools 控制台下执行 navigator.clipboard 返回 undefined
---

## 报错

在执行复制到粘贴板的时候，

```javascript
navigator.clipboard.writeText(textInput.current.textContent)
```

控制台报错显示不能读取未定义的属性(`writeText`)

```
Cannot read properties of undefined (reading 'writeText')
```

## 原因

浏览器禁用了非安全域的 `navigator.clipboard` 对象，哪些地址是安全的呢？

安全域包括本地访问与开启 TLS 安全认证的地址，如 `https` 协议的地址、`127.0.0.1` 或 `localhost` 。

## 解决

所以本文就是作一个兼容写法，在安全域下使用 `navigator.clipboard` 提升效率，非安全域退回到 `document.execCommand('copy');` 保证功能可用。

```javascript
function copyToClipboard(textToCopy) {
  // navigator clipboard 需要https等安全上下文
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard 向剪贴板写文本
    return navigator.clipboard.writeText(textToCopy)
  } else {
    // 创建text area
    let textArea = document.createElement('textarea')
    textArea.value = textToCopy
    // 使text area不在viewport，同时设置不可见
    textArea.style.position = 'absolute'
    textArea.style.opacity = 0
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    return new Promise((res, rej) => {
      // 执行复制命令并移除文本框
      document.execCommand('copy') ? res() : rej()
      textArea.remove()
    })
  }
}
```
