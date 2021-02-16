import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import { ReactComponent as DownIcon } from "../../../assets/images/down-arrow.svg"

const pulse = keyframes`
  from {
    transform: scale(1);
  }
  25% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`

const circleAnimation = keyframes`
   50% {
    opacity: 0;
   }
   to {
    transform: translateY(0);
    opacity: 1;
  }
`

const arrowAnimation = keyframes`
	to {
		opacity: 1;
	}
`

const Icon = styled(DownIcon)`
  width: 80px;
  margin: 0 auto;
  cursor: pointer;
  position: absolute;
  display: block;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: calc(50% - 40px);
  animation: ${pulse} 1.5s 3.5s ease infinite;
  #circle {
    opacity: 0;
    transform: translateY(100%);
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${circleAnimation} 0.5s 2s linear forwards;
  }

  #arrow {
    opacity: 0;
    animation: ${arrowAnimation} 0.5s 2.5s linear forwards;
  }
`
const AnimatedDownIcon = ({ onClick, className }) => (
  <Icon className={className} onClick={onClick} />
)

AnimatedDownIcon.defaultProps = {
  className: "",
  onClick: () => {},
}

AnimatedDownIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default AnimatedDownIcon
