const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { get, uniq, kebabCase } = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag-page.js`)

  return graphql(
    `
      {
        site {
          siteMetadata {
            postBasePath
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { draft: { ne: true } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges
    const { postBasePath } = result.data.site.siteMetadata

    posts.forEach((post, index) => {
      const isFirstPost = index === 0
      const isLastPost = index === posts.length - 1
      const previous = isFirstPost
        ? isLastPost
          ? null
          : posts[index + 1].node
        : null
      const next = isFirstPost ? null : posts[index - 1].node

      createPage({
        path: (postBasePath || "") + post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    let tags = []
    posts.forEach(edge => {
      if (get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    tags = uniq(tags)

    tags.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
