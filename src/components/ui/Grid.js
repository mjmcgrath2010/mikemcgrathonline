import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  margin-left: ${({ theme }) => theme.spacing.m};
  margin-right: ${({ theme }) => theme.spacing.m};
  padding-left: ${({ theme }) => theme.spacing.m};
  padding-right: ${({ theme }) => theme.spacing.m};
`

const Row = styled.div`
  display: grid;
  grid-template-columns: ${({ desktopColumns }) =>
    `repeat(${desktopColumns}, 1fr);`};
  grid-template-rows: ${({ desktopRows }) =>
    desktopRows ? `repeat(${desktopRows}, 1fr);` : "auto"} 
  grid-gap: ${({ theme }) => theme.spacing.m};
	
	${({ theme }) => theme.breakpoints.tablet} {
		
	}

  ${({ theme }) => theme.breakpoints.mobile} {
	  
  }
`
const Item = styled.div`
  display: grid;
  grid-column: ${({ cols }) => `span ${cols}`};
  ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: ${({ tabletCols }) => `span ${tabletCols}`};
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    grid-column: ${({ mobileCols }) => `span ${mobileCols}`};
  }
`

const Grid = ({ children }) => <Container>{children}</Container>

Grid.Row = Row
Grid.Item = Item

export default Grid
