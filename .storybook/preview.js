// .storybook/preview.js
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/index'

const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];
