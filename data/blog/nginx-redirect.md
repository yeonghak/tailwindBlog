---
title: Nginx 301 重定向
date: '2023-07-02'
tags: ['nginx']
draft: false
summary: Nginx 301 重定向
---

```conf
#REWRITE-START
if ($host ~ '^www.xxx.net'){
    return 301 https://www.xxx.com$request_uri;
}

if ($host ~ '^xxx.net'){
    return 301 https://www.xxx.com$request_uri;
}
#REWRITE-END
```
