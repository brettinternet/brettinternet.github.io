import React from "react"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"

import { sansSerifFont } from "utils/mixins"

const NotFoundPage = () => (
  <Layout headProps={{ title: "404: Not found" }} flex>
    <Section flex>
      <StyledMessage>
        <h1>¯\_(ツ)_/¯</h1>
        <p>
          <i>nothin' found</i>
        </p>
      </StyledMessage>
    </Section>
  </Layout>
)

const StyledMessage = styled.div`
  text-align: center;
  ${sansSerifFont};

  p {
    font-size: 12px;
  }
`

export default NotFoundPage
