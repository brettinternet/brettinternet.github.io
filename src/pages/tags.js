import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Tag from "components/Tag"
import { kebabCase } from "utils/string"

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group

    return (
      <Layout location={this.props.location}>
        <Section skinny>
          <h2>Tags</h2>
          <Tags>
            {allTags.map(tag => (
              <A
                key={tag.fieldValue}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                <Tag textMuted mRight="0.75em" mBottom="0.5em">
                  {tag.fieldValue}
                  {tag.totalCount > 1 && <span> ({tag.totalCount})</span>}
                </Tag>
              </A>
            ))}
          </Tags>

          <hr />

          <Nav>
            <li>
              <A to="/blog/">
                <Arrow>⬅</Arrow>
                <NavLinkText>Browse all posts</NavLinkText>
              </A>
            </li>
          </Nav>
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
