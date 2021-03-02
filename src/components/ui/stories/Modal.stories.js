import React from "react"

import Modal from "../Modal"

export default {
  title: "Modal",
  component: Modal,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Modal {...args} />

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
