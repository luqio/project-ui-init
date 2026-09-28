# project-init

React 19、TypeScript、antd 6 的前端初始化仓库。浅色和深色主题在 `src/theme/theme.ts`。

## 脚本

```bash
npm install
npm run dev
```

开发地址是 `http://localhost:3002`。

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地开发 |
| `npm run build` | `tsc` 后打包 |
| `npm run lint` | ESLint |
| `npm run preview` | 预览构建结果 |

## 文档

| 文档 | 内容 |
| --- | --- |
| [初始化说明](docs/初始化说明.md) | 技术栈、目录、相对 my-react-app 的取舍 |
| [主题方案](docs/主题方案.md) | 已写入的 token、留给 antd 算法的结果、待设计确认的覆盖 |
| [设计规范](docs/README.md) | 设计变量与全局样式原文 |

改颜色、圆角、字号时先改 `src/theme/theme.ts`，并同步 `docs/主题方案.md`。页面里不要写散落的色值。

## 模型

仓库约定在 [AGENTS.md](AGENTS.md)。
