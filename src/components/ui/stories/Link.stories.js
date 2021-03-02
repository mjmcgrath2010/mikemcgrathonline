import React from "react"

import Link from "../Link"

export default {
  title: "Link",
  component: Link,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Link {...args} />

//👇 Each story then reuses that template
export const Default = Template.bind({})

Default.args = {}
