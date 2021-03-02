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

export const Success = Template.bind({})

Success.storyName = "Success Button"

Success.args = {
  children: "Success Button",
  variant: "success",
}

export const Info = Template.bind({})

Info.storyName = "Info Button"

Info.args = {
  children: "Info Button",
  variant: "info",
}

export const Warning = Template.bind({})

Warning.storyName = "Warning Button"

Warning.args = {
  children: "Warning Button",
  variant: "warning",
}

export const Error = Template.bind({})

Error.storyName = "Error Button"

Error.args = {
  children: "Error Button",
  variant: "error",
}
