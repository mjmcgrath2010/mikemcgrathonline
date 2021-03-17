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
  <Form
    onSubmit={(state) => console.log("success", JSON.stringify(state))}
    cols={2}
    inputs={[
      {
        label: "First",
        name: "first",
        type: "text",
        placeholder: "John",
        cols: 1,
      },
      {
        label: "Last",
        name: "last",
        type: "text",
        placeholder: "Doe",
        cols: 1,
      },
      {
        label: "Email",
        name: "email",
        type: "text",
        placeholder: "johndoe@example.com",
        cols: 2,
      },
    ]}
  >
    <Form.Footer
      submitText="Enter Email"
      onCancel={() => {}}
      cancelText="Nevermind"
    />
  </Form>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})
export const FullFormExample = FullFormTemplate.bind({})

Default.args = {}
FullFormExample.args = {}
