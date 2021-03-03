import React from "react"

import Grid from "../Grid"

export default {
  title: "Grid",
  component: Grid,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Grid {...args}>
    <Grid.Row rows={3}>
      <Grid.Item>Hello</Grid.Item>
      <Grid.Item>Hello</Grid.Item>
      <Grid.Item>Hello</Grid.Item>
      <Grid.Item>Hello</Grid.Item>
      <Grid.Item>Hello</Grid.Item>
      <Grid.Item>Hello</Grid.Item>
      <Grid.Item>Hello</Grid.Item>
    </Grid.Row>
  </Grid>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
