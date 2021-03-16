import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const BaseCss = css`
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  color: ${({ theme }) => theme.colors.black_300};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`
const p = css`
  ${BaseCss};
  font-size: ${({ theme }) => theme.fontSizes.m};
`

const span = css`
  ${p}
`

const HeadingBaseCss = css`
  font-family: ${({ theme }) => theme.fontFamilies.sans_200};
  color: ${({ theme }) => theme.colors.purple_400};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
  margin: 0;
`

const h1 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights[800]};
`

const h2 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights[700]};
`
const h3 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`
const h4 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSizes.m};
`
const h5 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSizes.m};
`
const h6 = css`
  ${HeadingBaseCss};
  font-size: ${({ theme }) => theme.fontSizes.m};
`

const VARIANTS = {
  p,
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
  <StyledTypography as={variant} className={className} variant={variant}>
    {children}
  </StyledTypography>
)

Typography.defaultProps = {
  className: "",
  variant: "p",
}

Typography.propTypes = {
  /**
   Optional - used to override existing styles
   */
  className: PropTypes.string,
  /**
   Text to be rendered
   */
  children: PropTypes.string.isRequired,
  /**
   DOM element to be rendered, options:
   */
  variant: PropTypes.oneOf(["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"]),
}

export default Typography
