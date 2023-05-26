---
title: 'react版本markdown编辑器md-editor-rt，支持ssr'
date: '2023-05-26'
tags: ['markdown', 'editor', 'react']
draft: false
summary: react版本markdown编辑器md-editor-rt，支持ssr
---

## Intro

<a target="_blank" href="https://imzbf.github.io/md-editor-rt/en-US/demo">demo</a>,
<a target="_blank" href="https://github.com/imzbf/md-editor-rt">github</a>

## Install

```shell
yarn add md-editor-rt
```

## Usage

```jsx
import React, { useState } from 'react'
import { MdEditor } from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'

export default () => {
  const [text, setText] = useState('hello md-editor-rt!')
  return <MdEditor modelValue={text} onChange={setText} />
}
```

## Preview Only

```jsx
import React, { useState } from 'react'
import { MdPreview, MdCatalog } from 'md-editor-rt'
import 'md-editor-rt/lib/preview.css'

export default () => {
  const [id] = useState('preview-only')
  const [scrollElement] = useState(document.documentElement)
  const [text] = useState('hello md-editor-rt！')

  return (
    <>
      <MdPreview editorId={id} modelValue={text} />
      <MdCatalog editorId={id} scrollElement={scrollElement} />
    </>
  )
}
```
