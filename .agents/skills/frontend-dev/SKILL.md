---
name: frontend-dev
description: >-
  本仓库前端开发规范（React 19、TypeScript、Vite、antd 6、CSS Modules）。
  编写、修改或审查 src/ 下的页面、组件、样式、路由、请求与类型时使用。
  触发词：前端、页面、组件、样式、路由、src。
---

# 前端开发规范

改 `src/` 之前先读本规范，并对照同目录已有文件。

## 技术栈

React 19、TypeScript（`strict: true`）、Vite、antd 6、React Router 7、axios、CSS Modules。路径别名 `@/` → `src/`。不引入第二套 UI 库或状态库。ESLint 使用 Airbnb React 规则和 `typescript-eslint` recommended，并在 `eslint.config.js` 里关闭了一批格式规则。格式以 Prettier 和这份 ESLint 配置为准。

## 目录

```
src/
  pages/<page>/index.tsx              # 页面入口，只做组装
  pages/<page>/index.module.css
  pages/<page>/components/<Name>/     # 页面私有组件
  pages/<page>/hooks/
  components/<Name>/                  # 跨页面组件
  services/request.ts
  services/<domain>.ts            # 按后端域封装，由 services/index.ts 再导出
  types/<domain>.ts
  utils/<name>.ts
  assets/
  routes/index.tsx
  theme/theme.ts
  styles/global.css
```

- 目录名小写短横线，集合用复数，如 `components`、`utils`、`assets`。
- 组件目录 PascalCase，入口 `index.tsx`，样式 `index.module.css`。每个组件用自己的样式文件，不共用别人的 `module.css`。
- 引用写到目录，不写 `/index`。同级组件用相对路径，跨目录用 `@/`。
- 组件、页面默认导出。工具函数具名导出。组件导入用大驼峰，实例用小驼峰。
- 图片文件名小写短横线，需要倍率时写成 `logo@2x.png`。
- 页面入口只组装。业务放在页面私有组件里。
- 一个文件尽量只放一个函数组件。如果tsx文件超过 300 行，考虑拆成更小的组件，这不是硬性规定。
- 同一结构出现至少两次、差异能用 props 表达时，抽到 `components/`。



## 命名

- 变量、函数小驼峰。业务函数用动词加名词，如 `attachRoleToUser`。
- 常量、枚举成员全大写下划线，如 `DEFAULT_SIZE`。
- 接口、类型别名、类大驼峰，属性小驼峰。泛型单个参数用 `T`。



## TypeScript

- 禁止 `any`。禁止 `// @ts-ignore`、`// @ts-nocheck`。禁止 `as any`。禁止重复枚举值，禁止连续非空断言 `foo!!!.bar`。
- 能推断的返回值不必再标注。ESLint 关闭了 `explicit-function-return-type`。
- 不确定的外部数据先写成 `unknown`，或断言到已定义的类型，再收窄。
- 只在本文件使用的 props、表单值留在组件文件里。跨组件共享的类型放进 `types/<domain>.ts`。环境声明仍用 `*.d.ts`。
- 异步用 `async/await` 和 `try/catch`，不用 `.then()`。
- 函数组件。Props 用 interface。



## React

- Hooks 只在函数最顶层调用，不放进循环、条件或嵌套函数。
- 列表 `key` 用稳定 ID，不用数组下标。
- 布尔属性为 `true` 时省略取值。无子节点的标签自闭合。
- 可复用的纯函数不要写在组件里，按功能放到 `utils/<name>.ts`。



## 样式

CSS Modules，类名 camelCase。展开书写。少用 `*`，不用 ID 选择器，不用无语义标签选择器。全局、需要表达层级的样式才用 BEM；CSS Modules 里不用 BEM。

颜色、圆角、字号用 antd CSS 变量（`theme.ts` 里 `cssVar: {}`）或主题 token，不在组件里写散落色值。宽高、间距、背景写在 `index.module.css`，不用 `style`。

## 请求

只用 `@/services/request`。业务接口按域写成 `services/<domain>.ts`，调用方直接引用某个 `*.ts`。新增业务错误处理前先看 `docs/初始化说明.md`。校验、请求反馈、省略提示和确认框见 `.agents/skills/frontend-interaction/SKILL.md`。