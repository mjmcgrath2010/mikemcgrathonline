import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.purple_100};
  width: ${({ theme }) => `calc(100% - 2px - ${theme.spacing.m})`};
  margin: 0 auto;
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.m};
  border-radius: 4px;
  line-height: 2;
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  outline: none;
  color: ${({ theme }) => theme.colors.black_300};
  padding-left: ${({ theme }) => theme.spacing.m};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.black_100};
    padding-left: ${({ theme }) => theme.spacing.m};
  }
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.black_300};
  font-size: ${({ theme, size }) => theme.fontSizes[size] || theme.fontSizes.m};
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
  width: 90%;
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing.m} 0`};
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
`

const StyledInputGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0;
  justify-content: flex-start;
  padding: 0;
`

const Input = ({ onChange, initialValue, placeholder, type, name, size }) => {
  const [val, setVal] = useState(initialValue)

  const handleChange = ({ target: { value, name } }) => {
    setVal({ [name]: value })
    onChange({ [name]: value })
  }

  return (
    <StyledInput
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      type={type}
      size={size}
      value={val}
    />
  )
}

Input.Group = StyledInputGroup
Input.Label = StyledLabel

Input.defaultProps = {
  onChange: () => {},
  initialValue: undefined,
  name: "",
  placeholder: "",
  size: "m",
}

Input.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l"]),
}

export default Input
