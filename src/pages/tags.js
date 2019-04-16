import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import NavButton from "components/NavButton"
import Tag from "components/Tag"

import { kebabCase } from "utils/string"

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group

    return (
      <Layout
        headProps={{
          title: "tags",
          keywords: ["tags", "brettinternet"],
        }}
        location={this.props.location}
      >
        <Section skinny>
          <h2>Tags</h2>
          <Tags>
            {allTags.map(tag => (
              <A
                key={tag.fieldValue}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                <Tag themed mRight="0.75em" mBottom="0.5em">
                  {tag.fieldValue}
                  {tag.totalCount > 1 && <span> ({tag.totalCount})</span>}
                </Tag>
              </A>
            ))}
          </Tags>

          <hr />

          <div
            css={`
              text-align: center;
            `}
          >
            <NavButton dir="backward" rel="prev" to="/blog/">
              Browse all posts
            </NavButton>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default TagsPageRoute

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

const Tags = styled.div`
  a:hover {
    text-decoration: none;
  }
`
