import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import Card from "components/Card"

import { media } from "utils/mixins"

const ProjectsPage = ({ data, location }) => {
  const { projects } = data.site.siteMetadata
  const projectsFound = projects && projects.length

  return (
    <Layout
      headProps={{
        title: "projects",
        keywords: ["projects", "brettinternet", "work"],
      }}
      location={location}
    >
      <Section
        thin
        css={`
          padding-bottom: 0;
        `}
      >
        <h2>Projects:</h2>
      </Section>
      <Section
        css={`
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        <Cards>
          {projectsFound &&
            projects.map((card, index) => (
              <div key={index}>
                <Card
                  {...card}
                  css={media.md`
                    height: 210px;
                  `}
                />
              </div>
            ))}
        </Cards>
      </Section>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          description
          details
          href
        }
      }
    }
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  ${media.md`
    flex-direction: row;

    & > div {
      width: 50%;
    }
    
    a {
      margin: 1em;
    }
  `}
`
