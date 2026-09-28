# AGENTS.md

开始对应工作前先读取 skill，按其中约定实现，不要在对话里复述整份规范。

## Skill 索引


| Skill                | 路径                                               | 何时读取                                      |
| -------------------- | ------------------------------------------------ | ----------------------------------------- |
| frontend-dev         | `.agents/skills/frontend-dev/SKILL.md`           | 编写、修改或审查 `src/` 下的页面、组件、样式、路由、请求与类型     |
| frontend-interaction | `.agents/skills/frontend-interaction/SKILL.md`   | 编写或修改页面交互、表单校验、请求反馈、省略提示、确认框时           |
| design-tokens        | `.agents/skills/design-tokens/SKILL.md`          | 改颜色、圆角、字体、阴影或 `src/theme/theme.ts`      |
| antd-usage           | `.agents/skills/antd-usage/SKILL.md`             | 使用 antd 组件、查组件 API 或组件 token              |
| git-commit           | `.agents/skills/git-commit/SKILL.md`             | 用户要求提交、写 commit message，或提到提交规范时         |


## 约定

- 完成改动后的回复写出「修改」和「影响范围」。修改列出文件和改动内容。影响范围列出因此会变化的页面、公共组件、主题、路由和调用方。
- 主题以 `docs/主题方案.md` 和 `src/theme/theme.ts` 为准。设计变量与全局样式同名时，用设计变量。
- 组件 API 用本地 antd CLI 现查，不要把组件文档抄进仓库。

