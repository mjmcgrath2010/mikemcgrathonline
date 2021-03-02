import React from "react"

import Button from "../Button"

export default {
  title: "Button",
  component: Button,
  args: {
    onClick: () => alert("Click"),
  },
  argTypes: {
    children: { control: "text" },
    className: { control: false },
    onClick: { control: false },
    variant: {
      control: false,
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.storyName = "Primary Button"

Primary.args = {
  children: "Primary Button",
  variant: "primary",
}

export const Secondary = Template.bind({})

Secondary.storyName = "Secondary Button"

Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
}
