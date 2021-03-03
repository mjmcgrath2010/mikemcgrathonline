import React from "react"

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

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Grid cols={3}>
    <Grid.Item />
    <Grid.Item>
      <Card {...args} />
    </Grid.Item>
    <Grid.Item />
  </Grid>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
