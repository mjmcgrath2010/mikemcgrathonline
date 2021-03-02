
import React from 'react';

import Input from '../Input'

export default {
	title: 'Input',
	component: Input,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
};
