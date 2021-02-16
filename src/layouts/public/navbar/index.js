import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Nav = styled.nav`
  position: fixed;
  height: 55px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.colors.white_100};
  padding: ${({
    theme: {
      spacing: { m },
    },
  }) => ` 0 ${m}`};
`

const NavBar = (props) => <Nav>NavBar</Nav>

export default NavBar
