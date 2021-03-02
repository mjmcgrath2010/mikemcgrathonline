// .storybook/storybookTheme.js

import { create } from '@storybook/theming';

import theme from '../src/theme'
import brandImage from '../src/assets/images/logo-colored.png'

export default create({
	base: 'light',

	colorPrimary: theme.colors.blue_300,
	colorSecondary: theme.colors.purple_300,

	// UI
	appBg: theme.colors.white_100,
	appContentBg: theme.colors.white_100,
	appBorderColor: theme.colors.white_200,
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: 'monospace',

	// Text colors
	textColor: theme.colors.black_500,
	textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	barTextColor: theme.colors.white_200,
	barSelectedColor: theme.colors.white_100,
	barBg: theme.colors.purple_300,

	// Form colors
	inputBg: 'white',
	inputBorder: 'silver',
	inputTextColor: 'black',
	inputBorderRadius: 4,

	brandTitle: 'Mike McGrath - Component Library',
	brandUrl: 'https://mikemcgrathonline.us',
	brandImage
});
