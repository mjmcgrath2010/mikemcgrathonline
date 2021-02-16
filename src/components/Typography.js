import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const BaseCss = css`
  font-family: ${({ theme }) => theme.fontFamily.sans_100};
  color: ${({ theme }) => theme.colors.black_300};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
`
const paragraph = css`
  ${BaseCss};
  font-size: ${({ theme }) => theme.fontSize.m};
`

const span = css`
  ${paragraph}
`

const HeadingBaseCss = `
	font-family: ${({ theme }) => theme.fontFamily.sans_200};
	color: ${({ theme }) => theme.colors.purple_400}
`

const h1 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight[600]};
`

const h2 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSize.l};
`
const h3 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSize.m};
`
const h4 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSize.m};
`
const h5 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSize.m};
`
const h6 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSize.m};
`

const VARIANTS = {
  paragraph,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

const StyledTypography = styled.p`
  ${({ variant }) =>
    VARIANTS[variant] ? VARIANTS[variant] : VARIANTS.paragraph}
`

const Typography = ({ children, className, variant }) => (
  <StyledTypography className={className} variant={variant}>
    {children}
  </StyledTypography>
)

Typography.defaultProps = {
  className: "",
  variant: "paragraph",
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "paragraph",
    "span",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ]),
}
