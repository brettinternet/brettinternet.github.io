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
            projects.slice(0, 2).map((card, index) => (
              <div key={index}>
                <Card {...card} />
              </div>
            ))}
        </Cards>
        {projectsFound && projects.length > 2 && (
          <Cards>
            {projectsFound &&
              projects.slice(2, 4).map((card, index) => (
                <div key={index}>
                  <Card {...card} />
                </div>
              ))}
          </Cards>
        )}
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

  ${media.sm`
    flex-direction: row;

    & > div {
      width: 50%;

      &:first-child a {
        margin-left: 0;
      }

      &:last-child a {
        margin-right: 0;
      }
    }
    
    a {
      margin: 1em;
    }
  `}
`

//// add project images
// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )
// export default Image
