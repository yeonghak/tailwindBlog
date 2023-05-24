---
title: 常用GIT规范
date: '2023-05-24'
tags: ['git', 'conventions', 'commitlint']
draft: false
summary: Git 分支命名规范，Git 提交信息规范
---

## Git 分支命名规范

```bash
type/package?/name

ex)
feat/client/typo
fix/server/type-error
docs/client/readme
```

### Type

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## Git 提交信息规范

```bash
type(pagename|scope?): subject

body?

footer?
```

### Scope

- animations
- common
- compiler
- compiler-cli
- core
- elements
- forms
- http
- language-service
- platform-browser
- platform-browser-dynamic
- platform-server
- platform-webworker
- platform-webworker-dynamic
- router
- service-worker
- upgrade

## 参考

- https://commitlint.js.org/#/
- https://www.conventionalcommits.org/en/v1.0.0/
- https://github.com/conventional-changelog/commitlint
