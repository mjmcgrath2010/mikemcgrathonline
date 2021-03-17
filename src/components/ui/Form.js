import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./Button"
import Grid from "./Grid"
import Input from "./Input"

const StyledForm = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.m};
  background: ${({ theme }) => theme.colors.white_100};
`

const StyledFormBody = styled(Grid)`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.m};
`

const Footer = styled(Grid)`
  width: 100%;
`

const FormGroup = styled(Grid.Row)``

const Column = styled(Grid.Item)``

const FormButton = styled(Button)`
  min-width: 144px;
  width: 144px;
  margin: 0 auto;
  max-width: 300px;
  &:nth-child(2) {
    margin-right: ${({ theme }) => theme.spacing.m};
  }
`

const Form = ({ children, cols, inputs, onSubmit }) => {
  const [state, setState] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(state)
  }

  const handleChange = (update) => setState({ ...state, ...update })

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <StyledFormBody cols={cols}>
        <FormGroup>
          {inputs.map(
            ({
              name,
              type,
              label,
              initialValue,
              placeholder,
              cols = 2,
              required,
            }) => {
              return (
                <Column key={name} cols={cols}>
                  <Input.Group>
                    {label && <Input.Label>{label}</Input.Label>}
                    <Input
                      name={name}
                      type={type}
                      initialValue={initialValue}
                      placeholder={placeholder}
                      onChange={handleChange}
                      required={required}
                    />
                  </Input.Group>
                </Column>
              )
            },
          )}
        </FormGroup>
      </StyledFormBody>
      {children}
    </StyledForm>
  )
}

Form.defaultProps = {
  children: null,
  cols: 2,
  onCancel: () => {},
  onSubmit: (state) => {
    console.log(state)
  },
  inputs: [],
}

Form.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number,
  inputs: PropTypes.array,
  onSubmit: PropTypes.func,
}

const FormColumn = ({ children, cols }) => (
  <Column cols={cols}>{children}</Column>
)

FormColumn.defaultProps = {
  cols: 2,
}

FormColumn.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number,
}

const FormFooter = ({ cancelText, children, onCancel, submitText }) => (
  <Footer cols={2}>
    <FormGroup>
      <Column cols={onCancel ? 1 : 2}>
        {onCancel && (
          <FormButton variant="secondary" onClick={onCancel}>
            {cancelText}
          </FormButton>
        )}
      </Column>
      <Column cols={onCancel ? 1 : 2}>
        <FormButton variant="primary" type="submit">
          {submitText}
        </FormButton>
      </Column>
      <Column cols={2}>{children}</Column>
    </FormGroup>
  </Footer>
)

FormFooter.defaultProps = {
  children: null,
  cancelText: "Cancel",
  onCancel: undefined,
  submitText: "Submit",
}

FormFooter.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.node,
  onCancel: PropTypes.func,
  submitText: PropTypes.string,
}

FormColumn.displayName = "Form.Item"
FormFooter.displayName = "Form.Footer"

Form.Group = FormGroup
Form.Item = FormColumn
Form.Footer = FormFooter

export default Form
