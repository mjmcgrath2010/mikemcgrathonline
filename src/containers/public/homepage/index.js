import React from 'react'
import styled, {keyframes} from 'styled-components'
import HeroSection from '../../../components/HeroSection'
import backgroundImage from '../../../assets/images/hero-background.png'
import { ReactComponent as HeroLogo } from '../../../assets/images/hero-logo.svg'

const firstM = keyframes`
	from {
		transform: translateX(385px);
	}
	50% {
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
	50% {
		transform: translateX(-50px);
	}
	to {
		transform: translateX(0px);
	}
`

const leftCarret = keyframes``
const rightCarret = keyframes``
const slash = keyframes``

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
		animation: ${firstM} 1s forwards linear;
	}
	
	#title,
	#first,
	#last {
	opacity: 0;
		visibility: hidden;
	animation: ${fadeInName} 1s 1s forwards linear;
	}
	
	#last-m {
		animation: ${lastM} 1s forwards linear;
	}
	
	#left-carret {}
	
	#slash {}
	
	#right-carret {}
`

const HomePage = () => {
	return (
		<HeroSection image={backgroundImage}>
			<Logo />
		</HeroSection>
	)
}


export default HomePage
