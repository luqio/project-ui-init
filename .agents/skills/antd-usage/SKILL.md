---
name: antd-usage
description: >-
  本仓库使用 antd 6 的方式。写 antd 组件、查 props、查组件 token 时使用。
  触发词：antd、Button、Form、Modal、Select、Table、主题组件。
---

# antd 用法

写组件前用本地 `@ant-design/cli` 查当前版 API，不要凭记忆：

```bash
antd info Button --format json
antd token Button --format json
antd demo Button basic --format json
```

CLI 未安装时执行 `npm install -g @ant-design/cli`。

- 从 `antd` 包根导入组件，从图标包导入图标。不要在页面里再次引入 `antd/dist/reset.css`。
- 主题只通过 `ConfigProvider` 使用 `lightTheme` 或 `darkTheme`。
- 表单使用 `Form.Item` 的 `name`。反馈、确认框、省略提示的用法见 `.agents/skills/frontend-interaction/SKILL.md`。
- 组件外观优先改 `src/theme/theme.ts` 的组件 token。覆盖规则见 `docs/主题方案.md`。
