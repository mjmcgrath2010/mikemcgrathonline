import React from 'react'
import styled from 'styled-components'
import HeroSection from '../../../components/HeroSection'
import backgroundImage from '../../../assets/images/hero-background.png'
import { ReactComponent as HeroLogo } from '../../../assets/images/hero-logo.svg'

const Logo = styled(HeroLogo)`
	height: 125px;
	width: auto;
	display: block;
	margin: 15% auto 0;
	
	#title {}
	
	#first {}
	
	#last {}
	
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
