import React from "react"
import styled from "styled-components"

import HeroSection from "../../../components/HeroSection"
import backgroundImage from "../../../assets/images/hero-background.png"
import AnimatedLogo from "../../../components/AnimatedLogo"
import AnimatedDownIcon from "./AnimatedDownIcon"
import Typography from "../../../components/Typography"
import PublicCommonLayout from "../../../layouts/public/Common"

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 25vh;
    color ${({ theme }) => theme.colors.white_100};

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
