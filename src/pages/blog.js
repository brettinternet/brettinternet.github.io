import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Tag from "components/Tag"
import styled from "styled-components"

const BlogPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  console.log("posts: ", posts)
  return (
    <Layout
      headProps={{
        title: "blog",
        keywords: ["blog", "brettinternet", "brettgardiner"],
      }}
      location={location}
    >
      <Section thin mTop>
        <table>
          <tbody>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const tags = node.frontmatter.tags
              return (
                <PostRow key={node.fields.slug}>
                  <DateCell>
                    <Tag noBackground textMuted mRight="1rem">
                      {node.frontmatter.date}
                    </Tag>
                  </DateCell>

                  <td>
                    <Title>
                      <A style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </A>
                    </Title>
                    <Description>
                      <small
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Description>
                    <Tags>
                      {tags &&
                        tags.length &&
                        tags.map((tag, index) => (
                          <A to={`/tags/${tag}`}>
                            <Tag key={index} textMuted mRight="0.5rem">
                              {tag}
                            </Tag>
                          </A>
                        ))}
                    </Tags>
                  </td>
                </PostRow>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const PostRow = styled.tr`
  & > td {
    padding: 0.5rem 0;
  }
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
`

const Description = styled.div`
  margin: 0.5rem 0;
`

const Tags = styled.div`
  a:hover {
    text-decoration: none;
  }
`

const DateCell = styled.td`
  vertical-align: top;
  text-align: right;
`
