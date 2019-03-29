import React from "react"
import styled from "styled-components"

import Layout from "components/layout"
import Section from "components/Section"
import A from "components/Link"
import GithubSvg from "images/icons/github.svg"
import InstagramSvg from "images/icons/instagram.svg"
import TwitterSvg from "images/icons/twitter.svg"
import KeybaseSvg from "images/icons/keybase.svg"
import LinkedinSvg from "images/icons/linkedin.svg"

const socials = [
  { href: "https://linkedin.com/in/brettinternet", Svg: LinkedinSvg },
  { href: "https://github.com/brettinternet", Svg: GithubSvg },
  { href: "https://twitter.com/brettinternet", Svg: TwitterSvg },
  { href: "https://instagram.com/brettinternet", Svg: InstagramSvg },
  { href: "https://keybase.io/brettinternet", Svg: KeybaseSvg },
]

const AboutPage = ({ location }) => (
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
        {socials.map(({ href, Svg }, index) => (
          <li key={index}>
            <A href={href}>
              <Svg height="20" />
            </A>
          </li>
        ))}
      </Ul>
    </StyledSection>
  </Layout>
)

export default AboutPage

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
