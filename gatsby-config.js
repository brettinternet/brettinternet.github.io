const theme = {
  themePrimary: "#1890ff",
  neutralPrimary: "#333333",
}

const siteMetadata = {
  title: `brettinternet`,
  description: `Solving problems with software, and other thoughts`,
  author: `@brettinternet`,
  siteUrl: "https://brettinternet.com",
  siteRepo: "https://github.com/brettinternet/brettinternet.github.io",
  homeCity: "Salt Lake City",
  // https://fonts.google.com/?selection.family=Patua+One|Roboto+Slab:300,400,700
  googleFontLink:
    "https://fonts.googleapis.com/css?family=Patua+One|Roboto+Slab:300,400,700",
  routes: [
    { name: "blog", to: "/blog" },
    { name: "projects", to: "/projects" },
  ],
  postBasePath: "/blog", // + :slug
  socialLinks: [
    { name: "linkedin", href: "https://linkedin.com/in/brettinternet" },
    { name: "github", href: "https://github.com/brettinternet" },
    { name: "twitter", href: "https://twitter.com/brettinternet" },
    { name: "instagram", href: "https://instagram.com/brettinternet" },
    { name: "keybase", href: "https://keybase.io/brettinternet" },
  ],
  projects: [
    {
      title: "Public Notes",
      description:
        "Watch what I'm currently learning, and other references I aggregate over time.",
      details: "brettinternet/public-notes",
      href: "https://github.com/brettinternet/public-notes",
    },
    {
      title: "Dotfiles",
      description:
        "My .files, configs and setup. I love improving my Unix environment.",
      details: "brettinternet/dotfiles",
      href: "https://github.com/brettinternet/dotfiles",
    },
    {
      title: "CV",
      description:
        "I wrote my CV with LaTeX. If you're an employer, check it out!",
      details: "brettinternet/cv",
      href: "https://github.com/brettinternet/cv",
    },
    {
      title: "This blog",
      description:
        "This blog with React, CSS in JS, GraphQL and a static build for speed. 😎",
      details: "brettinternet/brettinternet.github.io",
      href: "https://github.com/brettinternet/brettinternet.github.io",
    },
  ],
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590, // 960
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: theme.neutralPrimary,
        theme_color: theme.themePrimary,
        display: `minimal-ui`,
        icon: `${__dirname}/static/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: `${__dirname}/src`,
        pages: `${__dirname}/src/pages`,
        components: `${__dirname}/src/components`,
        images: `${__dirname}/src/images`,
        utils: `${__dirname}/src/utils`,
        templates: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     // this base query will be merged with any queries in each feed
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           siteUrl
    //           site_url: siteUrl
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] },
    //             filter: {frontmatter: { draft: { ne: true } }}
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 fields { slug }
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: "/rss.xml",
    //         title: "Gatsby RSS Feed",
    //       },
    //     ],
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
  ],
}
