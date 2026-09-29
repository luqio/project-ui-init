---
name: frontend-interaction
description: >-
  本仓库前端交互约定。编写或修改页面交互、表单校验、请求反馈、省略提示、确认框时使用。
  触发词：交互、校验、message、Tooltip、确认框、复制、省略。
---

# 前端交互

写页面交互前先读本规范。反馈组件用 antd，API 按 `antd-usage` 现查。

## 反馈分层

同一次操作只用一种反馈。

- 校验留在控件下方，走 `Form.Item` 的错误提示。字段错误不弹 `message`。
- 请求失败用 `message.error`，在页面全局弹出。文案优先用 `getErrorMessage`（`@/utils/error`）取出的接口错误；没有则用一句说明这次操作失败的话。
- 复制、保存、提交、删除等一次动作的成功，用 `message.success`。可以同时改图标或按钮文案，提示不能只靠图标。
- 空数据用空状态，不弹 `message`。

`message` 从 `App.useApp()` 取，不用静态 `message`。根组件在 `ConfigProvider` 内包一层 antd `App`，这样提示能吃到当前主题。

## 表单和弹层

- 新表单用 antd `Form`、`Input`、`Button`。提交前 `validateFields`，滚到第一个错误字段。
- 请求发出后，触发这次请求的按钮进入 `loading`，结束前不能再次提交。
- 弹层里提交失败：弹层保持打开，用 `message.error`。成功后再关弹层，并 `message.success`。
- 表单弹层写 `styles={{ body: { padding: 0 } }}`。非表单内容区默认是 `16px 0`，见 `docs/主题方案.md`。
- 创建、编辑类表单弹层写 `maskClosable={false}`，不允许点遮罩关闭。
- Modal 默认垂直居中，由根 `ConfigProvider` 的 `modal.centered` 统一打开，业务里一般不用再写 `centered`。

## 危险操作

- 删除、停用等不可逆操作，先用 `Modal.confirm`。确认按钮写具体动作，例如「删除」。
- 用户取消则不发请求。

## 列表

- 加载中用表格或容器的 `loading`。没有数据用空状态。
- 列表请求失败用 `message.error`。

## 省略与说明

- 单行超出省略的文本，用 `Tooltip` 展示全文。判断实际溢出再包，没超出不加。表格单元格、标题、单行说明同样适用。
- 纯图标按钮用 `Tooltip` 或 `aria-label` 说明动作。旁边已有可见文字时，图标不再重复提示。
- 没权限、没选中、条件不满足时用 `disabled`，并用 `Tooltip` 写原因。不为解释禁用去弹 `message`。
