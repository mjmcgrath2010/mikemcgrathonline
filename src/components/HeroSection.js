import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({image, backgroundColor}) => image ? `url(${image}) no-repeat center` : backgroundColor};
  background-size: cover;
  margin: 0;
  position: relative;
  display: block;
`

const HeroContentContainer = styled.div`
 position: absolute;
 display: block;
 top: 0;
 left: 0;
 width: 100vw;
 height: 100vh;
 background: #1110104a;
`

const HeroSection = ({backgroundColor, children, image}) => {
 return (
   <HeroContainer image={image} backgroundColor={backgroundColor}>
    <HeroContentContainer>
     {children}
    </HeroContentContainer>
   </HeroContainer>
 )
}

HeroSection.defaultProps = {
 backgroundColor: '#FFF',
 image: undefined
}

HeroSection.propTypes = {
 backgroundColor: PropTypes.string,
 children: PropTypes.node.isRequired,
 image: PropTypes.string
}

export default HeroSection
