import React from "react"

import TextEditor from "../TextEditor"

export default {
  title: "TextEditor",
  component: TextEditor,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TextEditor {...args} />

//👇 Each story then reuses that template
export const RichTextEditor = Template.bind({})

RichTextEditor.args = {}
