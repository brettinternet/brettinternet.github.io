import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"

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
  const socialLinks = data.site.siteMetadata.socialLinks
  return (
    <Layout
      headProps={{
        title: "",
        keywords: ["about", "brettinternet", "brettgardiner"],
      }}
      location={location}
      flex
    >
      <StyledSection>
        <Ul>
          {socialLinks.map(({ href, name }, index) => {
            const Svg = icons[name]
            return (
              <li key={index}>
                <A href={href}>
                  <Svg height="20" />
                </A>
              </li>
            )
          })}
        </Ul>
      </StyledSection>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        socialLinks {
          name
          href
        }
      }
    }
  }
`

const StyledSection = styled(Section)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        transition: color 200ms;
      }

      svg {
        fill: currentColor;
      }
    }
  }
`
