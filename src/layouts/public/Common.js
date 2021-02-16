import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import NavBar from "./navbar"

const Container = styled.div``

const PublicCommonLayout = ({ children }) => (
  <div>
    <NavBar />
    <Container>{children}</Container>
  </div>
)

PublicCommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PublicCommonLayout
