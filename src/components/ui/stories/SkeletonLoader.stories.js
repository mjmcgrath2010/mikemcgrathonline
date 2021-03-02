
import React from 'react';

import SkeletonLoader from '../SkeletonLoader'

export default {
	title: 'SkeletonLoader',
	component: SkeletonLoader,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SkeletonLoader {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
};
