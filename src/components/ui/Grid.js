import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  margin-left: ${({ theme }) => theme.spacing.m};
  margin-right: ${({ theme }) => theme.spacing.m};
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr);`};
  grid-template-rows: ${({ rows }) =>
    rows ? `repeat(${rows}, 1fr);` : "auto"};

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

const Grid = ({ children, className, cols, rows }) => (
  <Container className={className} cols={cols} rows={rows}>
    {children}
  </Container>
)

Grid.Item = Item

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
  rows: undefined,
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
}

export default Grid
