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

  colorLink: '#3491FA',
  colorLinkHover: '#5DA7FB',
  colorLinkActive: '#3188EB',

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

  colorLink: '#5AAAFB',
  colorLinkHover: '#469AFA',
  colorLinkActive: '#7DC1FC',

  colorText: '#F6F6F6',
  colorTextSecondary: 'rgba(197, 197, 197, 0.77)',
  colorTextTertiary: '#929293',
  colorTextQuaternary: '#5F5F60',

  colorBorder: '#4B4B4D',
};

const componentToken = {
  Modal: {
    borderRadiusLG: 8,
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
    ...lightColorToken,
  },
  components: componentToken,
};

export const darkTheme: ThemeConfig = {
  cssVar: {},
  algorithm: theme.darkAlgorithm,
  token: {
    ...sizeToken,
    ...darkColorToken,
  },
  components: componentToken,
};
