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

const Button = ({ children, onClick, fontSize, variant }) => (
  <StyledButton onClick={onClick} fontSize={fontSize} variant={variant}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  onClick: () => {},
  fontSize: "s",
  variant: "primary",
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  fontSize: PropTypes.oneOf(["s", "m", "l"]),
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
