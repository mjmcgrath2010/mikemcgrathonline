import React from "react"
import styled from "styled-components"

import HeroSection from "../../../components/public/HeroSection"
import backgroundImage from "../../../assets/images/hero-background.png"
import AnimatedLogo from "./AnimatedLogo"
import AnimatedDownIcon from "./AnimatedDownIcon"
import PublicCommonLayout from "../../../layouts/public/Common"

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 25vh;
  color ${({ theme }) => theme.colors.white_100};
  
  ${({ theme }) => theme.breakpoints.mobile} {
    padding-top: 35vh;
  }

`

const HomePage = () => {
  return (
    <PublicCommonLayout>
      <HeroSection image={backgroundImage}>
        <Container>
          <AnimatedLogo />
          <AnimatedDownIcon />
        </Container>
      </HeroSection>
    </PublicCommonLayout>
  )
}

export default HomePage
