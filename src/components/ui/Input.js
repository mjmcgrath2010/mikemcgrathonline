import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.purple_100};
  border-radius: 4px;
  padding: 0.5em 1em;
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

const Input = ({ onChange, placeholder, type, name }) => {
  return (
    <>
      <StyledInput
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </>
  )
}

Input.defaultProps = {
  onChange: () => {},
  name: "",
  placeholder: "",
  type: "text",
}

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "radio", "checkbox", "select"]),
}

export default Input
