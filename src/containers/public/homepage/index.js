import React from 'react'

import HeroSection from '../../../components/HeroSection'
import backgroundImage from '../../../assets/images/hero-background.png'
import AnimatedLogo from '../../../components/AnimatedLogo'

const HomePage = () => {
	return (
		<HeroSection image={backgroundImage}>
			<AnimatedLogo />
		</HeroSection>
	)
}


export default HomePage
