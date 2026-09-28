---
name: design-tokens
description: >-
  本仓库的设计变量与 antd 主题约束。改颜色、圆角、字体、阴影或 src/theme/theme.ts 时使用。
  触发词：主题、token、设计变量、圆角、色值、深色、浅色。
---

# 设计变量

改主题前读 `docs/主题方案.md` 和 `docs/设计变量`。

- 语义色、文字、边框、填充以设计变量为准。不要用 `docs/全局样式/色彩.md` 的同名变量，编号方向相反。
- 已写入 `src/theme/theme.ts` 的 token 不要在页面里再覆盖一层。
- 主题方案里标成「留给 antd 算法」的 token，不要擅自填稿面色值。要改时同时改 `theme.ts` 和 `docs/主题方案.md`。
- 全局 `borderRadiusLG` 保持算法结果。选择器弹层用 `Select.borderRadiusLG = 4`，只有 `Modal.borderRadiusLG = 8`。
- 默认边框是设计变量 `color-border-3`。
- 深色次强调文字是 `rgba(197, 197, 197, 0.77)`。
