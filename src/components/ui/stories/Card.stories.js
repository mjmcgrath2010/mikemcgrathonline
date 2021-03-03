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
//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <StyledGrid cols={3}>
    <Grid.Item />
    <Grid.Item>
      <Card {...args} />
    </Grid.Item>
    <Grid.Item />
  </StyledGrid>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
