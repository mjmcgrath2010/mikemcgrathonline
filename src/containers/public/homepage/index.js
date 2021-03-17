import React from "react"
import styled from "styled-components"

import HeroSection from "../../../components/public/HeroSection"
import backgroundImage from "../../../assets/images/hero-background.png"
import AnimatedLogo from "./AnimatedLogo"
import AnimatedDownIcon from "./AnimatedDownIcon"
import PublicCommonLayout from "../../../layouts/public/Common"
import Grid from "../../../components/ui/Grid"
import Typography from "../../../components/ui/Typography"
import Contact from "./Contact"

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
      <Grid>
        <Grid.Row rows={4}>
          <Grid.Item cols={4} mobileCols={12}>
            <Typography variant="h2">About Me</Typography>
          </Grid.Item>
          <Grid.Item cols={8} mobileCols={12}>
            <Typography variant="h4">My Name is Mike</Typography>
          </Grid.Item>
        </Grid.Row>
        <Grid.Row rows={4}>
          <Contact />
        </Grid.Row>
      </Grid>
    </PublicCommonLayout>
  )
}

export default HomePage
