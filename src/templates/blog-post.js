import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Tag from "components/Tag"

// import { patuaFont } from "utils/mixins"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        headProps={{
          title: post.frontmatter.title,
          description: post.frontmatter.description || post.excerpt,
        }}
      >
        <Section skinny>
          <div>
            <Tag noBackground textMuted mRight="1rem">
              {post.frontmatter.date}
            </Tag>
          </div>
          <Title>{post.frontmatter.title}</Title>
          <Body>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Body>
          <hr />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <A to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </A>
              )}
            </li>
            <li>
              {next && (
                <A to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </A>
              )}
            </li>
          </ul>
        </Section>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const Title = styled.h1`
  margin-top: 0.5rem;
`

const Body = styled.div`
  a {
    color: ${props => props.theme.themePrimary};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 125%;
  }

  line-height: 1.5;
`
