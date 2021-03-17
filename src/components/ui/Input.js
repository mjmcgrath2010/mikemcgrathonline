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
  padding-left: ${({ theme }) => theme.spacing.sm};

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
  margin: 0;
  padding: ${({ theme }) => `0 0 ${theme.spacing.sm}`};
  font-family: ${({ theme }) => theme.fontFamilies.sans_100};
`

const StyledInputGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0;
  justify-content: flex-start;
  padding: 0;
`

const Input = ({
  onChange,
  initialValue,
  placeholder,
  type,
  name,
  size,
  required,
}) => {
  const [val, setVal] = useState(initialValue)

  const handleChange = ({ target: { value } }) => {
    setVal(value)
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
      required={required}
    />
  )
}

Input.Group = StyledInputGroup
Input.Label = StyledLabel

Input.defaultProps = {
  onChange: () => {},
  initialValue: "",
  name: "",
  placeholder: "",
  size: "m",
  type: "text",
  required: false,
}

Input.propTypes = {
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l"]),
  type: PropTypes.oneOf(["email", "text", "password"]),
  required: PropTypes.bool,
}

export default Input
