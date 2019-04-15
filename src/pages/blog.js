import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import PostDetails from "components/PostDetails"

const BlogPage = ({ data, location }) => {
  const { postBasePath } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout
      headProps={{
        title: "blog",
        keywords: ["blog", "brettinternet", "brettgardiner"],
      }}
      location={location}
    >
      <Section thin>
        <table>
          <tbody>
            {posts.map(({ node }) => {
              const link = (postBasePath || "") + node.fields.slug
              return (
                <PostDetails
                  key={node.fields.slug}
                  title={node.frontmatter.title || node.fields.slug}
                  date={node.frontmatter.date}
                  link={link}
                  description={node.frontmatter.description || node.excerpt}
                  tags={node.frontmatter.tags}
                />
              )
            })}
          </tbody>
        </table>
      </Section>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        postBasePath
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
