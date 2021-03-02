import React from "react"

import Card from "../Card"

export default {
  title: "Card",
  component: Card,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Card {...args} />

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
