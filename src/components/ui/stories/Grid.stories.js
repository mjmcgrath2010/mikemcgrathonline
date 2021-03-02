import React from "react"

import Grid from "../Grid"

export default {
  title: "Grid",
  component: Grid,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Grid {...args} />

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
