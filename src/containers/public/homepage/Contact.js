import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Form from "../../../components/ui/Form"
import Typography from "../../../components/ui/Typography"
import Grid from "../../../components/ui/Grid"

const FORM_FIELDS = [
  {
    name: "first",
    label: "First",
    cols: 1,
    required: true,
  },
  {
    name: "last",
    label: "Last",
    cols: 1,
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    cols: 2,
    required: true,
  },
  {
    first: "inquiry",
    label: "Message",
    type: "textarea",
    cols: 2,
    required: true,
  },
]

const Contact = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <>
      <Grid.Row rows={1}>
        <Grid.Item cols={12}>
          <Typography variant="h2">Contact</Typography>
        </Grid.Item>
      </Grid.Row>
      <Grid.Row rows={5}>
        <Grid.Item cols={12}>
          <Form cols={2} onSubmit={handleSubmit} inputs={FORM_FIELDS}>
            <Form.Footer submitText="Message Me" />
          </Form>
        </Grid.Item>
      </Grid.Row>
    </>
  )
}

export default Contact
