import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ThemeContext from "components/ThemeContext"
import { media } from "utils/mixins"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Tag from "components/Tag"
import TwitterSvg from "images/icons/twitter.svg"
import NavButton from "components/NavButton"
import Utterances from "components/Utterances"

import { serifFont } from "utils/mixins"
import { kebabCase } from "utils/string"

class BlogPostTemplate extends React.Component {
  render() {
    const { location, data } = this.props
    const post = data.markdownRemark
    const { siteRepo, postBasePath, utterances } = data.site.siteMetadata
    const { previous, next, slug } = this.props.pageContext
    const { title, description, date, tags } = post.frontmatter

    return (
      <Layout
        location={location}
        headProps={{
          title,
          description: description || post.excerpt,
        }}
      >
        <Section thin>
          <div>
            <Tag
              noBackground
              textMuted
              mRight="1rem"
              style={{ paddingLeft: 0 }}
            >
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
              tags.map(tag => (
                <A key={tag} to={`/tags/${ kebabCase(tag) }`}>
                  <Tag themed mRight="0.5rem">
                    {tag}
                  </Tag>
                </A>
              ))}
          </Tags>

          <PostActions>
            <div>
              <Dot
                css={`
                  margin-left: 0;
                `}
              >
                >
              </Dot>
              <A href={`${ siteRepo }/edit/source/content/blog${ slug }index.md`}>
                Edit on GitHub
              </A>

              <Dot>·</Dot>
              <A
                href={`https://twitter.com/home?status=${ location.href }`}
                title="Tweet post"
              >
                <TwitterSvg height="12" />
              </A>
            </div>

            <NavButton
              buttons={[
                ...(previous
                  ? [{
                    dir: "backward",
                    rel: "prev",
                    to: (postBasePath || "") + previous.fields.slug,
                    name: previous.frontmatter.title,
                    css: `font-size: 13px;`,
                  }]
                  : []),
                ...(next
                  ? [{
                    dir: "forward",
                    rel: "next",
                    to: (postBasePath || "") + next.fields.slug,
                    name: next.frontmatter.title,
                    css: `font-size: 13px;`,
                  }]
                  : []),
              ]}
            />
          </PostActions>
        </Section>

        <hr />

        <Section>
          {utterances && (
            <ThemeContext.Consumer>
              {theme => (
                <Utterances
                  repo={utterances.repo}
                  issueTerm="pathname"
                  label={utterances.label}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          )}
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
        utterances {
          repo
          label
        }
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
  ${serifFont };

  a {
    color: ${props => props.theme.themePrimary };

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
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 3em;
  font-size: 13px;

  a svg {
    fill: currentColor;
  }

  & > ul {
    display: none;

    ${media.xs`
      display: block;
    `}
  }
`

const Dot = styled.span`
  font-family: monospace;
  margin: 0 0.5em;
`
