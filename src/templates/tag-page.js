import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Tag from "components/Tag"
import PostDetails from "components/PostDetails"

class TagRoute extends React.Component {
  render() {
    const { postBasePath } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    return (
      <Layout location={this.props.location}>
        <Section thin>
          <h3>
            {totalCount} post{totalCount > 1 && "s"} tagged with “
            {this.props.pageContext.tag}”
          </h3>
          <table>
            <tbody>
              {posts.map(({ node }) => {
                const link = (postBasePath || "") + node.fields.slug
                return (
                  <PostDetails
                    key={link}
                    link={link}
                    title={node.frontmatter.title}
                    description={node.frontmatter.description || node.excerpt}
                    tags={node.frontmatter.tags}
                    date={node.frontmatter.date}
                  />
                )
              })}
            </tbody>
          </table>

          <Section skinny>
            <hr />

            <Nav>
              <li>
                <A to="/tags/">
                  <Arrow>⬅</Arrow>
                  <NavLinkText>Browse all tags</NavLinkText>
                </A>
              </li>
            </Nav>
          </Section>
        </Section>
      </Layout>
    )
  }
}

export default TagRoute

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        postBasePath
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
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
const Arrow = styled.span`
  text-decoration: none;
`

const NavLinkText = styled.span`
  margin: 0 0.25em;
`

const Nav = styled.ul`
  font-size: 13px;
  text-align: center;
  list-style: none;
  padding: 0;

  a {
    padding: 0.25em;
    text-decoration: none;

    &:hover {
      text-decoration: none;

      ${NavLinkText} {
        margin: 0 0.75em;
        transition: margin 0.2s;
        text-decoration: underline;
      }
    }
  }
`
