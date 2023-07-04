---
title: Recoil Duplicate atom key
date: '2023-07-04'
tags: ['Recoil', '报错解决']
draft: false
summary: Recoil Duplicate atom key 报错解决
---

## 方法 1：.env 文件修改

```
RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false
```

## 方法 2：代码修改

```javascript:configs/recoil.ts
import { RecoilEnv } from 'recoil'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
```

```javascript:App.tsx
import './configs/recoil'

function App() {
  return <RecoilRoot></RecoilRoot>
}
```

参考：https://tesseractjh.tistory.com/310