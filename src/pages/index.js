import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Card from "components/Card"
import NavButton from "components/NavButton"

import { media } from "utils/mixins"
import GithubSvg from "images/icons/github.svg"
import InstagramSvg from "images/icons/instagram.svg"
import TwitterSvg from "images/icons/twitter.svg"
import KeybaseSvg from "images/icons/keybase.svg"
import LinkedinSvg from "images/icons/linkedin.svg"

const icons = {
  linkedin: LinkedinSvg,
  github: GithubSvg,
  twitter: TwitterSvg,
  instagram: InstagramSvg,
  keybase: KeybaseSvg,
}

const IndexPage = ({ data, location }) => {
  const {
    postBasePath,
    projects,
    socialLinks,
    homePageTitle,
    homePageDescription: bio,
  } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges.slice(0, 2)

  return (
    <Layout
      headProps={{
        title: "about",
        keywords: ["about", "brettinternet", "brettgardiner"],
      }}
      location={location}
    >
      <Section thin>
        <h1
          css={`
            margin-top: 0;
          `}
          dangerouslySetInnerHTML={{ __html: homePageTitle }}
        />
        {bio &&
          (Array.isArray(bio) ? (
            bio.map(paragraph => (
              <P dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))
          ) : (
            <P dangerouslySetInnerHTML={{ __html: bio }} />
          ))}
      </Section>

      <Section skinny noPadding>
        <Ul>
          {socialLinks.map(({ href, name }, index) => {
            const Svg = icons[name]
            return (
              <li key={index}>
                <A href={href} aria-label={name}>
                  <Svg height="20" />
                </A>
              </li>
            )
          })}
        </Ul>
      </Section>

      <Section
        thin
        css={`
          padding-bottom: 0;
        `}
      >
        <h3>Featured projects:</h3>
      </Section>

      <Section
        css={`
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        <Cards>
          {projects.slice(0, 2).map((card, index) => (
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
        <CTAWrapper>
          <NavButton
            dir="forward"
            to="/projects"
            css={`
              justify-content: center;
            `}
          >
            Browse
          </NavButton>
        </CTAWrapper>
      </Section>

      <Section
        thin
        css={`
          padding-bottom: 0;
        `}
      >
        <h3>Recent blog posts:</h3>
      </Section>

      <Section
        css={`
          padding-top: 0;
        `}
      >
        <Cards>
          {posts.map(({ node }) => {
            const link = (postBasePath || "") + node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Card
                  to={link}
                  title={node.frontmatter.title || node.fields.slug}
                  description={node.frontmatter.description || node.excerpt}
                  details={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                  css={media.md`
                    height: 265px;
                  `}
                />
              </div>
            )
          })}
        </Cards>
        <CTAWrapper>
          <NavButton
            dir="forward"
            to="/blog"
            css={`
              justify-content: center;
            `}
          >
            View more
          </NavButton>
        </CTAWrapper>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        homePageTitle
        homePageDescription
        postBasePath
        socialLinks {
          name
          href
        }
        projects {
          title
          description
          details
          href
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;

  li {
    display: inline-block;
    a {
      padding: 0.5rem;

      &:hover {
        color: ${props => props.theme.neutralPrimary};

        svg {
          transform: translateY(-1px);
        }
      }

      svg {
        fill: currentColor;
        transition: transform 200ms;
        transform: translateY(0);
      }
    }
  }
`

const P = styled.p`
  line-height: 1.6;
  font-weight: 400;
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

const CTAWrapper = styled.div`
  text-align: center;
  margin: 1em;
`
