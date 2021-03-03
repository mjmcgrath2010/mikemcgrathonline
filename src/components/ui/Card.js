import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white_100};
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: block;
  position: relative;
`

const ContentContainer = styled.div`
  width: ${({ theme }) =>
    `calc(100% - ${theme.spacing.m} - ${theme.spacing.m})`};
  height: ${({ theme }) =>
    `calc(100% - ${theme.spacing.m} - ${theme.spacing.m})`};
  padding: ${({ theme }) => theme.spacing.m};
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
