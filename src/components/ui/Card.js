import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white_100};
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: ${({
    theme: {
      spacing: { m },
    },
  }) => m};
`
const Card = ({ children }) => <Container>{children}</Container>

Card.propTypes = {
  /**
   * Children to be rendered
   */
  children: PropTypes.node.isRequired,
}

export default Card
