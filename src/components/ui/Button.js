import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const baseStyles = css`
  padding: ${({
    theme: {
      spacing: { s, m },
    },
  }) => `${s} ${m}`};
`

const primary = css`
  ${baseStyles};
`

const secondary = css`
  ${baseStyles};
`

const VARIANTS = {
  primary,
  secondary,
}

const StyledButton = styled.button`
  ${({ variant }) => VARIANTS[variant] || VARIANTS.primary}
`

const Button = ({ children, onClick, variant }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  onClick: () => {},
  variant: "primary",
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
}
export default Button
