// .storybook/storybookTheme.js

import { create } from "@storybook/theming"

import theme from "../src/theme"
import brandImage from "../src/assets/images/logo-colored.png"

export default create({
  base: "light",

  colorPrimary: theme.colors.primary,
  colorSecondary: theme.colors.secondary,

  // UI
  appBg: theme.colors.white_100,
  appContentBg: theme.colors.white_200,
  appBorderColor: theme.colors.white_100,
  appBorderRadius: 4,

  // Typography
  fontBase: theme.fontFamilies.sans_100,
  fontCode: "monospace",

  // Text colors
  textColor: theme.colors.black_500,
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: theme.colors.white_200,
  barSelectedColor: theme.colors.white_100,
  barBg: theme.colors.primary,

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Mike McGrath - Component Library",
  brandUrl: "https://mikemcgrathonline.us",
  brandImage,
})
