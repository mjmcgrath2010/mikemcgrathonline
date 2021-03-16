import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white_100};
  height: 100%;
  width: auto;
  overflow: hidden;
  display: block;
  position: relative;
`

const ContentContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacing.m};
  display: block;
`
const Card = ({ children, className }) => (
  <Container className={className}>
    <ContentContainer>{children}</ContentContainer>
  </Container>
)

Card.defaultProps = {
  className: "",
}

Card.propTypes = {
  /**
   * Children to be rendered
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional - can be used to extend base styles
   */
  className: PropTypes.string,
}

export default Card
