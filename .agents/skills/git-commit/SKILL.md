---
name: git-commit
description: >-
  按团队约定写 git commit。用户要求提交、写 commit message、或提到提交规范、
  conventional commit、type(scope)、chandao 时使用。
  触发词：提交、commit、提交规范、conventional commit、chandao。
---

# Git 提交规范

用户要求提交时按本文件写 message，不要另起一套。

## 格式

```
<type>(<scope>): <subject>
// <类型>[可选范围]: <描述>
// 描述包含‘需求/bug的id号+标题’
// 例: fix(scheduler): chandao#177, 排期页面缺少时间过滤功能

<body>

<footer>
```

- **subject**：含需求 / bug 的 id 号 + 标题。有禅道单写 `chandao#<id>, <标题>`。没有单号不要编，只写标题。
- **body**（选填）：为什么改、改了什么、思路、用法。
- **footer**（选填）：备注。
- `scope` 可选，跟改动面走，如 `frontend` / `scheduler` / `ui`。

## 类型

| type | 含义 |
| --- | --- |
| feat | 新功能 |
| fix | 修复 |
| docs | 文档变更 |
| style | 代码风格变动（不影响逻辑） |
| refactor | 重构（不是新功能也不是修 bug） |
| perf | 性能优化 |
| test | 添加或修改测试 |
| chore | 构建流程、依赖、工具 |
| init | 初始化 |

## 写法

- 一条提交只覆盖一类主因；拆分和修 bug 搅在一起时，subject 写主因，body 点出其余。
- 用 HEREDOC 传 `-m`，不要 `-i`。
- 不改 git config，不跳 hook，不 force push，用户没要求就不 push。
