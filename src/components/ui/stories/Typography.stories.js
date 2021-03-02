
import React from 'react';

import Typography from '../Typography'


export default {
	title: 'Typography',
	component: Typography,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Typography {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
	variant: 'p'
};
