import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link, useRouteMatch } from "react-router-dom"
import { transparentize } from "polished"

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 55px;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.m};
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  color: ${({ theme }) => theme.colors.purple_500};
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) =>
        transparentize(0.7, theme.colors.purple_300)};
      color: ${({ theme }) => theme.colors.purple_300};
    `}
`

const NavLink = ({ children, isExact, path }) => {
  const active = useRouteMatch({ path, exact: isExact })

  return (
    <StyledLink active={active} to={path}>
      {children}
    </StyledLink>
  )
}

NavLink.defaultProps = {
  isExact: false,
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  isExact: PropTypes.bool,
  path: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}

export default NavLink
