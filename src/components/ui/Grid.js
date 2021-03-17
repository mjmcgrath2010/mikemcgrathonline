import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr);`};
`
const Row = styled.div`
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 84px);`};
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.sm};
  grid-template-columns: inherit;
  grid-auto-rows: auto;
  padding: ${({ theme }) => `${theme.spacing.m}`};

  ${({ theme }) => theme.breakpoints.tablet} {
  }

  ${({ theme }) => theme.breakpoints.mobile} {
  }
`
const Item = styled.div`
  display: inherit;
  grid-column: ${({ cols }) => `span ${cols}`};
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: ${({ tabletCols }) => `span ${tabletCols}`};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-column: ${({ mobileCols }) => `span ${mobileCols}`};
  }
`

const Grid = ({ children, className, cols }) => (
  <Container className={className} cols={cols}>
    {children}
  </Container>
)

Grid.Item = Item
Grid.Row = Row

const MyChange = "Test GitHub PR"

Grid.Item.defaultProps = {
  cols: 1,
  mobileCols: "inherit",
  tabletCols: "inherit",
  rows: undefined,
}

Grid.Item.propTypes = {
  cols: PropTypes.number,
  mobileCols: PropTypes.number,
  tabletCols: PropTypes.number,
  rows: PropTypes.number,
}

Grid.defaultProps = {
  className: "",
  cols: 12,
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cols: PropTypes.number,
}

export default Grid
