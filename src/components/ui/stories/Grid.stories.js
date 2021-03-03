import React from "react"

import Grid from "../Grid"
import Card from "../Card"

export default {
  title: "Grid",
  component: Grid,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Grid {...args}>
    <Grid.Row>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
      <Grid.Item>
        <Card>Hello</Card>
      </Grid.Item>
    </Grid.Row>
  </Grid>
)

//👇 Each story then reuses that template
export const GridLayout = Template.bind({})

GridLayout.args = {}
