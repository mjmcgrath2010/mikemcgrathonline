import React from "react"

import Grid from "../Grid"

export default {
  title: "Grid",
  component: Grid,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Grid>
    <Grid.Item>Hello</Grid.Item>
  </Grid>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
