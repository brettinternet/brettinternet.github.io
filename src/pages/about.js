import React from "react"

import Layout from "components/layout"
import Section from "components/Section"

const AboutPage = ({ location }) => (
  <Layout
    headProps={{
      title: "",
      keywords: ["about", "brettinternet", "brettgardiner"],
    }}
    location={location}
  >
    <Section>about!</Section>
  </Layout>
)

export default AboutPage
