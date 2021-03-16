import React from "react"
import styled from "styled-components"

import Input from "../Input"
import Card from "../Card"

export default {
  title: "Input",
  component: Input,
}

const StyledCard = styled(Card)`
  width: 400px;
  height: auto;
`
//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <StyledCard>
    <Input {...args} />
  </StyledCard>
)
const TemplateWithLabel = (args) => (
  <StyledCard>
    <Input.Group>
      <Input.Label>Hello</Input.Label>
      <Input {...args} />
    </Input.Group>
  </StyledCard>
)

//👇 Each story then reuses that template
export const Default = Template.bind({})
export const TextInputWithLabel = TemplateWithLabel.bind({})

Default.args = {}
TextInputWithLabel.args = {}
