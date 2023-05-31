---
title: Next.js如何接入百度统计
date: '2023-05-29'
tags: ['next js', '百度统计']
draft: false
summary: Next.js如何接入百度统计
---

Next.js 是一个非常优秀的 React 服务端渲染解决方案。一般做服务端渲染，大多数因素都是为了 SEO，既然做了 SEO，那么肯定会嵌入一些网站统计代码，本文将介绍如何在 Next.js 内使用百度统计代码。

## 嵌入统计代码

next.js 并没有像其他 react 框架一样有一个 `index.html` 入口，那么统计代码该放在哪个地方呢？next.js 官方提供了这两个入口可以放置一些全局的代码：自定义 `Document` 或者自定义 `App`。

Nextjs 官方文档

- https://nextjs.org/docs/advanced-features/custom-document
- https://nextjs.org/docs/advanced-features/custom-app

虽然这两个地方都可以放置，但我还是喜欢放在 `App` 内，`_app.js`代码如下：

```jsx
import React from 'react'
import { Head } from 'next/document'

function MyApp({ Component, pageProps }) {
  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?你的代码";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`,
    }
  }

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

然后我们回到浏览器，访问页面，看到会有一个`hm.gif`的请求，就说明代码集成没问题了。

那么到这里就结束了吗？显然没有。我们发现第一次进入页面的时候确实有`hm.gif`这个请求，但是在页面切换的时候，并没有这个请求。说明页面的切换并没有被统计进去，那是为什么呢？

因为 Next.js 路由采用的是前端路由，所以整个应用出来第一次是服务端渲染出来的，后面的都是在客户端渲染的，本质上还是一个单页面应用，而百度统计代码并没有很好的适配单页面应用，所以我们需要自己处理这部分逻辑。

## 解决路由切换时统计并不生效问题

Next Router 设计了这个几个事件：

- https://nextjs.org/docs/api-reference/next/router#routerevents

这里我们主要使用`routeChangeComplete`这个事件，这个事件会在路由切换完成后触发，因此我们在这里加上手动埋点。代码依旧在`_app.js`中

```jsx
import { Router } from 'next/router'
Router.events.on('routeChangeComplete', (url) => {
  try {
    window._hmt.push(['_trackPageview', url])
  } catch (e) {
    console.error(e)
  }
})
```

再回到浏览器中，就能看到页面切换时也有 `hm.gif` 这个请求了。

至此，百度统计的代码就加完了。

转载：[陌上小筑](https://www.lingjie.tech)
