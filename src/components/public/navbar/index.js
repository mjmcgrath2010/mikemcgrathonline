import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import NavLink from "./NavLink"

const Nav = styled.nav`
  position: fixed;
  height: 55px;
  width: ${({
    theme: {
      spacing: { m },
    },
  }) => `calc(100% - ${m} - ${m})`};
  z-index: 1000;
  display: flex;
  flex-flow: row wrap;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.colors.white_100};
  padding: ${({
    theme: {
      spacing: { m },
    },
  }) => ` 0 ${m}`};
`

const LeftContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
`

const RightContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
`

const NavBar = () => (
  <Nav>
    <LeftContainer>
      <NavLink path="/" isExact>
        Home
      </NavLink>
      <NavLink path="/about">About</NavLink>
      <NavLink path="/projects">Featured Projects</NavLink>
      <NavLink path="/work-experience">Experience</NavLink>
      <NavLink path="/contact">Contact</NavLink>
    </LeftContainer>
    <RightContainer>
      <NavLink path="/portfolio">Portfolio</NavLink>
      <NavLink path="/blog">Blog</NavLink>
    </RightContainer>
  </Nav>
)

export default NavBar
