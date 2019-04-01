import React from "react"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"

const NotFoundPage = () => (
  <Layout headProps={{ title: "404: Not found" }} flex>
    <Section flex>
      <StyledMessage>
        <h1>¯\_(ツ)_/¯</h1>
        <p>nothin' found</p>
      </StyledMessage>
    </Section>
  </Layout>
)

const StyledMessage = styled.div`
  text-align: center;
  font-family: monospace;
`

export default NotFoundPage
