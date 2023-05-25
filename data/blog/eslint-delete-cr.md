---
title: 'Delete CR eslint(prettier/prettier)'
date: '2023-05-25'
tags: ['eslint', 'prettier', '报错解决']
draft: false
summary: 'OpenSSL SSL_read: Connection was reset, errno 10054'
---

## 报错

```bash
Delete CR eslint(prettier/prettier)
```

## 解决

eslint 配置文件中添加设置

```javascript
"endOfLine": "auto"
```

参考：https://firsteast.tistory.com/148
