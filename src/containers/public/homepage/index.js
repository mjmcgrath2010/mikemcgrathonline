import React from "react"
import styled from "styled-components"

import HeroSection from "../../../components/HeroSection"
import backgroundImage from "../../../assets/images/hero-background.png"
import AnimatedLogo from "../../../components/AnimatedLogo"

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 25vh;
`

const HomePage = () => {
  return (
    <HeroSection image={backgroundImage}>
      <Container>
        <AnimatedLogo />
      </Container>
    </HeroSection>
  )
}

export default HomePage
