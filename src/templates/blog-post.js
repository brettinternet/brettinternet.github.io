import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Tag from "components/Tag"
import TwitterSvg from "images/icons/twitter.svg"

import { serifFont } from "utils/mixins"
import { kebabCase } from "utils/string"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { siteRepo, postBasePath } = this.props.data.site.siteMetadata
    const { previous, next, slug } = this.props.pageContext
    const { title, description, date, tags } = post.frontmatter

    return (
      <Layout
        location={this.props.location}
        headProps={{
          title,
          description: description || post.excerpt,
        }}
      >
        <Section skinny>
          <div>
            <Tag noBackground textMuted mRight="1rem">
              {date}
            </Tag>
          </div>
          <Title>{title}</Title>
          <Body>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Body>

          <Tags>
            {tags &&
              tags.length &&
              tags.map((tag, index) => (
                <A to={`/tags/${kebabCase(tag)}`}>
                  <Tag key={index} textMuted mRight="0.5rem">
                    {tag}
                  </Tag>
                </A>
              ))}
          </Tags>

          <PostActions>
            <Dot>></Dot>
            <A href={`${siteRepo}/edit/master/content/blog${slug}index.md`}>
              Edit on GitHub
            </A>

            <Dot>·</Dot>
            <A
              href={`https://twitter.com/home?status=${window.location.href}`}
              title="Tweet post"
            >
              <TwitterSvg height="12" />
            </A>
          </PostActions>

          <hr />

          <Nav>
            <li>
              {previous && (
                <A to={(postBasePath || "") + previous.fields.slug} rel="prev">
                  <Arrow>⬅</Arrow>
                  <NavLinkText>{previous.frontmatter.title}</NavLinkText>
                </A>
              )}
            </li>
            <li>
              {next && (
                <A to={(postBasePath || "") + next.fields.slug} rel="next">
                  <NavLinkText>{next.frontmatter.title}</NavLinkText>
                  <Arrow>➡</Arrow>
                </A>
              )}
            </li>
          </Nav>
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
        siteRepo
        postBasePath
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160, format: PLAIN)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

const Title = styled.h1`
  margin: 0.25em 0 0.5em 0;
`

const Body = styled.div`
  ${serifFont};

  a {
    color: ${props => props.theme.themePrimary};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 125%;
  }

  line-height: 1.6;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  figcaption {
    font-size: 0.7em;
    text-align: center;
    margin: auto;
    font-style: italic;
  }
`

const Tags = styled.div`
  a:hover {
    text-decoration: none;
  }
`

const PostActions = styled.div`
  margin-top: 3em;
  text-align: left;
  font-size: 13px;

  a svg {
    fill: currentColor;
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

const Dot = styled.span`
  font-family: monospace;
  margin: 0 0.5em;
`
