// .storybook/preview.js
import { ThemeProvider } from "styled-components"
import theme from "../src/theme/index"
import GlobalStyle from "../src/theme/globalStyles"

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]
