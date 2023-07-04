---
title: 模拟异步操作
date: '2023-07-04'
tags: ['JAVASCRIPT', '异步']
draft: false
summary: 在javascript中，模拟异步操作，加入等待时间
---

```javascript
const sleep = async (time: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
const fetchSearchAllPosts = async (keyword: string): Promise<IPost[]> => {
  await sleep(2000)

  const res = await fetch(`${baseUrl}/posts?title_like=${keyword.trim()}&_sort=id&_order=desc`)
  if (!res.ok) {
    throw new Error('Failed to search data')
  }
  return res.json()
}
```
