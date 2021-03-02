import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import NavBar from "../../components/public/navbar"
import Footer from '../../components/public/Footer'

const Container = styled.div``

const PublicCommonLayout = ({ children }) => (
  <div>
    <NavBar />
    <Container>{children}</Container>
    <Footer>
      Hello
    </Footer>
  </div>
)

PublicCommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PublicCommonLayout
