import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.purple_100};
  width: 90%;
  margin: 0 auto;
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.m};
  border-radius: 4px;
  line-height: 2;
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  outline: none;
  color: ${({ theme }) => theme.colors.black_300};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black_100};
  }
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.black_300};
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  width: 90%;
  margin: 0 auto;
  padding: 0.5em 1em;
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
`

const StyledInputGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const Input = ({ onChange, placeholder, type, name, size }) => {
  return (
    <StyledInput
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type="text"
      size={size}
    />
  )
}

Input.Group = StyledInputGroup
Input.Label = StyledLabel

Input.defaultProps = {
  onChange: () => {},
  name: "",
  placeholder: "",
  size: "m",
}

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l"]),
}

export default Input
