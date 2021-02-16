import React from 'react'
import styled, {keyframes} from 'styled-components'

import { ReactComponent as HeroLogo } from '../assets/images/hero-logo.svg'

const firstM = keyframes`
	from {
		transform: translateX(385px);
	}
	75% {
		transform: translateX(385px);
	}
	to {
		transform: translateX(0px);
	}
`

const lastM = keyframes`
	from {
		transform: translateX(-50px);
	}
	75% {
		transform: translateX(-50px);
	}
	to {
		transform: translateX(0px);
	}
`

const leftCarret = keyframes`
	from,
	75% {
		transform: translateX(10px);
	}
	to {
		transform: translateX(0);
	}
`
const right = keyframes`
 	from,
	75% {
		transform: translateX(175px);
	}
	to {
		transform: translateX(0);
	}
`

const fadeInName = keyframes`
	to {
		opacity: 1;
		visibility: visible;
	}
`

const Logo = styled(HeroLogo)`
	height: 125px;
	width: auto;
	display: block;
	margin: 15% auto 0;

	
	#first-m {
		animation: ${firstM} 2s forwards linear;
	}
	
	#title,
	#first,
	#last {
		opacity: 0;
		visibility: hidden;
		animation: ${fadeInName} 1s 2s forwards linear;
	}
	
	#last-m {
		animation: ${lastM} 2s forwards linear;
	}
	
	#left-carret {
		animation: ${leftCarret} 2s forwards linear;
	}
	
	#slash,
	#right-carret {
	 animation: ${right} 2s forwards linear;
	}
`

const AnimatedLogo = () => <Logo />

export default AnimatedLogo
