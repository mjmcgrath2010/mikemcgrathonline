import breakpoints from "./breakpoints"
import colors from "./colors"
import spacing from "./spacing"
import typography from "./typography"

const theme = {
  boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.36)",
  breakpoints,
  colors,
  spacing,
  ...typography,
}

export default theme
