import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { transparentize } from "polished"

const BaseStyles = css`
  padding: ${({
    theme: {
      spacing: { sm, m },
    },
  }) => `${sm} ${m}`};
  color: ${({ theme }) => theme.colors.white_100};
  border-radius: 4px;
  border: none;
  min-width: 88px;
  cursor: pointer;
  background: ${({ theme, variant }) => theme.colors[variant]};
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize]};

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background: ${({ theme, variant }) =>
      transparentize(0.2, theme.colors[variant] || theme.colors.primary)};
  }
`
const primary = css``
const secondary = css``
const success = css``
const info = css``
const warning = css`
  color: ${({ theme }) => theme.colors.black_300};
`
const error = css``

const VARIANTS = {
  primary,
  secondary,
  success,
  info,
  warning,
  error,
}

const StyledButton = styled.button`
  ${BaseStyles};
  ${({ variant }) => VARIANTS[variant]};
`

const Button = ({ children, className, onClick, fontSize, variant, type }) => (
  <StyledButton
    className={className}
    onClick={onClick}
    fontSize={fontSize}
    variant={variant}
    type={type}
  >
    {children}
  </StyledButton>
)

Button.defaultProps = {
  className: "",
  fontSize: "s",
  type: "button",
  variant: "primary",
}

Button.propTypes = {
  /**
   Text or element to be rendered
   */
  children: PropTypes.node.isRequired,
  /**
   Optional - used to override an existing styles
   */
  className: PropTypes.string,
  /**
   onClick handler
   */
  onClick: PropTypes.func.isRequired,
  /**
   Determines the buttons font size, options:
   */
  fontSize: PropTypes.oneOf(["s", "m", "l"]),
  /**
   Sets HTML `type` attribute, options:
   */
  type: PropTypes.oneOf(["button", "submit"]),
  /**
   Specifies which style will be applied, options:
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]),
}
export default Button
