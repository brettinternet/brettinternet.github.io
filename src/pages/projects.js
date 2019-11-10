import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import Card from "components/Card"

import { media } from "utils/mixins"

import homelabGif from "images/projects/homelab.gif"
import hugoSlidesGif from "images/projects/hugo-slides.gif"
import mpgGif from "images/projects/mpg.gif"

const homelabImageProps = {
  src: homelabGif,
  alt: "homelab",
}

const hugoSlidesImageProps = {
  src: hugoSlidesGif,
  alt: "hugo-slides",
}

const mpgImageProps = {
  src: mpgGif,
  alt: "mpg",
}

export const getProjectImageProps = (name, cb) => {
  switch (name) {
    case homelabImageProps.alt:
      return homelabImageProps
    case hugoSlidesImageProps.alt:
      return hugoSlidesImageProps
    case mpgImageProps.alt:
      return mpgImageProps
    default:
      return cb ? cb(name) : undefined
  }
}

const ProjectsPage = ({ data, location }) => {
  const { projects } = data.site.siteMetadata
  const images = data.projectImages.edges
    .map(({ node }) => {
      return (
        node.childImageSharp && {
          alt: node.name,
          fluid: node.childImageSharp.fluid,
        }
      )
    })
    .filter(Boolean)

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
          {projects.map((projectProps, index) => {
            const { imageName, ...card } = projectProps
            return (
              <div key={index}>
                <Card
                  imageProps={getProjectImageProps(imageName, name =>
                    name ? images.filter(img => img.alt === name)[0] : undefined
                  )}
                  {...card}
                  css={media.md`
                    height: 210px;
                  `}
                />
              </div>
            )
          })}
        </Cards>
      </Section>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsPageQuery {
    site {
      siteMetadata {
        projects {
          title
          description
          details
          href
          imageName
          tags
        }
      }
    }
    projectImages: allFile(filter: { relativePath: { regex: "/projects/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
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
