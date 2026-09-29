import { theme, type ThemeConfig } from 'antd';

/**
 * 已定稿并写入 ThemeConfig 的部分。
 * 未写入的覆盖项、以及仍由 antd 算法生成的 token，见 docs/主题方案.md。
 */
const sizeToken = {
  fontSize: 14,
  controlHeight: 36,
  controlHeightSM: 32,
  controlHeightLG: 44,
  borderRadius: 4,
  /** 算法在基圆角为 4 时得到 1，稿面极小场景要求 2 */
  borderRadiusXS: 2,
};

/** 正文 PingFang SC。后面保留 antd 默认备用栈，系统没有该字体时仍能显示 */
const fontToken = {
  fontFamily:
    "'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  /** 标题和选中项。antd 默认是 600，正文保持 400 */
  fontWeightStrong: 500,
};

const lightColorToken = {
  colorPrimary: '#5555F7',
  colorPrimaryHover: '#7777F9',
  colorPrimaryActive: '#4D4DDE',
  colorPrimaryBg: '#F6F6FF',
  colorPrimaryBgHover: '#E6E6FE',
  colorPrimaryBorder: '#CCCCFD',

  colorSuccess: '#22D13B',
  colorSuccessHover: '#4EDA62',
  colorSuccessActive: '#20C437',
  colorSuccessBg: '#E9FAEB',
  colorSuccessBgHover: '#C1F2C9',
  colorSuccessBorder: '#7BE48A',

  colorWarning: '#FF9000',
  colorWarningHover: '#FF9A2E',
  colorWarningActive: '#F08700',
  colorWarningBg: '#FFF7E8',
  colorWarningBgHover: '#FFE4BA',
  colorWarningBorder: '#FFCF8B',

  colorError: '#ED3A2B',
  colorErrorHover: '#F16155',
  colorErrorActive: '#DF3728',
  colorErrorBg: '#FDEBEA',
  colorErrorBgHover: '#F8B0AA',
  colorErrorBorder: '#F48980',

  /** 链接色跟主色，不再单独维护 link-* */
  colorLink: '#5555F7',
  colorLinkHover: '#7777F9',
  colorLinkActive: '#4D4DDE',

  colorText: '#1D2129',
  colorTextSecondary: '#4E5969',
  colorTextTertiary: '#86909C',
  colorTextQuaternary: '#C9CDD4',

  /** 设计变量 color-border-3 */
  colorBorder: '#DFE1E5',
};

const darkColorToken = {
  colorPrimary: '#7B7FF9',
  colorPrimaryHover: '#6161F7',
  colorPrimaryActive: '#979EFA',
  colorPrimaryBg: '#160B77',
  colorPrimaryBgHover: '#281FA2',
  colorPrimaryBorder: '#413CCC',

  colorSuccess: '#27C346',
  colorSuccessHover: '#1DB440',
  colorSuccessActive: '#50D266',
  colorSuccessBg: '#046625',
  colorSuccessBgHover: '#0A802D',
  colorSuccessBorder: '#129A37',

  colorWarning: '#FF9626',
  colorWarningHover: '#FF8D1F',
  colorWarningActive: '#FFB357',
  colorWarningBg: '#793004',
  colorWarningBgHover: '#A64B0A',
  colorWarningBorder: '#D26913',

  colorError: '#F76965',
  colorErrorHover: '#F54E4E',
  colorErrorActive: '#F98D86',
  colorErrorBg: '#770611',
  colorErrorBgHover: '#A1161F',
  colorErrorBorder: '#CB2E34',

  /** 链接色跟主色，不再单独维护 link-* */
  colorLink: '#7B7FF9',
  colorLinkHover: '#6161F7',
  colorLinkActive: '#979EFA',

  colorText: '#F6F6F6',
  colorTextSecondary: 'rgba(197, 197, 197, 0.77)',
  colorTextTertiary: '#929293',
  colorTextQuaternary: '#5F5F60',

  colorBorder: '#4B4B4D',
};

const componentToken = {
  Modal: {
    borderRadiusLG: 8,
    /** 弹层内容区四周内边距 */
    contentPadding: 24,
    /** 标题 16px × 1.375 = 22px 行高 */
    titleFontSize: 16,
    titleLineHeight: 1.375,
    /** 标题区到内容区 */
    headerMarginBottom: 24,
    /** 非表单内容区。表单弹层用 styles.body.padding 盖回 0 */
    bodyPadding: '16px 0',
    /** 内容区到底部按钮 */
    footerMarginTop: 24,
    /** 信息 / 成功 / 警告 / 错误等确认弹框，按钮区同上 */
    confirmBtnsMarginTop: 24,
  },
  Select: {
    borderRadiusLG: 4,
  },
};

export const lightTheme: ThemeConfig = {
  cssVar: {},
  algorithm: theme.defaultAlgorithm,
  token: {
    ...sizeToken,
    ...fontToken,
    ...lightColorToken,
  },
  components: componentToken,
};

export const darkTheme: ThemeConfig = {
  cssVar: {},
  algorithm: theme.darkAlgorithm,
  token: {
    ...sizeToken,
    ...fontToken,
    ...darkColorToken,
  },
  components: componentToken,
};
