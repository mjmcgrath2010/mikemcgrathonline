import React from "react"
import styled from "styled-components"

import Card from "../Card"
import Grid from "../Grid"

export default {
  title: "Card",
  component: Card,
  argTypes: {
    children: {
      type: "string",
    },
  },
}

const StyledGrid = styled(Grid)``

const StyledCard = styled(Card)`
  border: 1px solid #000000;
`
//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <StyledGrid cols={3}>
    <Grid.Row rows={5}>
      <Grid.Item />
      <Grid.Item>
        <Card {...args} />
      </Grid.Item>
      <Grid.Item />
    </Grid.Row>
  </StyledGrid>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
