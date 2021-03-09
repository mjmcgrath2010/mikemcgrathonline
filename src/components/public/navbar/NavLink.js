import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link, useRouteMatch } from "react-router-dom"

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 55px;
  padding: 0 ${({ theme }) => theme.spacing.m};
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  text-align: left;
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.purple_300};
      color: ${({ theme }) => theme.colors.white_100};
    `}
`

const NavLink = ({ children, path }) => {
  const active = useRouteMatch({ path })

  return (
    <StyledLink active={active} to={path}>
      {children}
    </StyledLink>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}

export default NavLink
