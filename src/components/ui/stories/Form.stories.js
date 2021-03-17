import React from "react"

import Form from "../Form"
import Input from "../Input"

export default {
  title: "Form",
  component: Form,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Form {...args} />

const FullFormTemplate = (args) => (
  <Form onSubmit={() => alert("success")}>
    <Form.Body
      cols={2}
      inputs={[
        {
          label: "Email",
          name: "email",
          type: "text",
          initialValue: undefined,
          placeholder: "johndoe@example.com",
          cols: 2,
          onChange: () => {},
        },
      ]}
    />
    <Form.Footer submitText="Enter Email" />
  </Form>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})
export const FullFormExample = FullFormTemplate.bind({})

Default.args = {}
FullFormExample.args = {}
