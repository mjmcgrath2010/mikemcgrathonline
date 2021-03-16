import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./Button"
import Grid from "./Grid"

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
  &:nth-child(2) {
    margin-right: ${({ theme }) => theme.spacing.m};
  }
`

FormGroup.displayName = "Form.Group"

const Form = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <StyledForm method="POST" onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  )
}

Form.defaultProps = {
  onSubmit: () => {},
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
}

const FormBody = ({ children, cols }) => (
  <StyledFormBody cols={cols}>{children}</StyledFormBody>
)

FormBody.defaultProps = {
  cols: 2,
}

FormBody.propTypes = {
  children: PropTypes.node,
  cols: PropTypes.number,
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
FormBody.displayName = "Form.Body"
FormColumn.displayName = "Form.Item"
FormFooter.displayName = "Form.Footer"

Form.Body = FormBody
Form.Group = FormGroup
Form.Item = FormColumn
Form.Footer = FormFooter

export default Form
