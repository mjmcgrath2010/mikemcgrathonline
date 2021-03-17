import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
  display: flex;
  position: relative;
`

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>

export default Footer
