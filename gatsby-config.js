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
  homePageTitle: `
  Hi! I'm Brett
  <span role="img" aria-label="hand wave" style="margin-left:0.5rem;">
    👋
  </span>
  `,
  /**
   * @TODO make this into markdown
   */
  homePageDescription: [
    `I thrive on finding better solutions to challenging tasks and learning new technologies. Whether science, tech, or dinner table discussion, I enjoy dissecting, improving, and creating.`,
    // `I <a href="https://github.com/brettinternet/homelab">self-host various projects</a> that I admire because I am passionate about solving problems with software. I <a href="https://github.com/brettinternet/cv">work</a>.`,
  ],
  utterances: {
    repo: "brettinternet/brettinternet.github.io",
    label: "💬 Comments",
  },
  homeCity: "Salt Lake City",
  // https://fonts.google.com/?selection.family=Patua+One|Roboto+Slab:300,400,700
  googleFontLink:
    "https://fonts.googleapis.com/css?family=Patua+One|Roboto+Slab:300,400,700",
  routes: [
    { name: "blog", to: "/blog/" },
    { name: "projects", to: "/projects/" },
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
      title: "My Homelab",
      description:
        "Container orchestration, VPS bastion server via Terraform and WireGuard VPN. See what I self-host.",
      details: "brettinternet/homelab",
      href: "https://github.com/brettinternet/homelab",
      imageName: "homelab",
    },
    {
      title: "Hugo-Slides",
      description:
        "Make your own library of slides, with client sync and other features.",
      details: "brettinternet/hugo-slides",
      href: "https://brettinternet.com/hugo-slides/",
      imageName: "hugo-slides",
    },
    {
      title: "Slides",
      description: "My slides for talks and show-and-tell.",
      details: "brettinternet/slides",
      href: "https://brettinternet.com/slides/",
    },
    {
      title: "Gatsby Themes",
      description:
        "A collection of my Gatsby themes and components for reuse and sharing.",
      details: "brettinternet/gatsby-themes",
      href: "https://brettinternet.com/gatsby-themes/",
    },
    {
      title: "mpg ⛽",
      description: "Mileage stats on my 2000 Toyota 4Runner",
      details: "brettinternet/mpg",
      href: "https://brettinternet.com/mpg/",
      imageName: "mpg",
    },
    {
      title: "Public Notes",
      description:
        "Watch what I'm currently learning, and other references I aggregate over time. 📎",
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
        "I wrote my CV with LaTeX. If you're an employer, check it out! 📄",
      details: "brettinternet/cv",
      href: "https://github.com/brettinternet/cv",
    },
    {
      title: "Hackintosh",
      description:
        "PC hardware + macOS: my hardware, setup, troubleshooting, and Kernel Extensions 💻",
      details: "brettinternet/hackintosh",
      href: "https://github.com/brettinternet/hackintosh",
      imageName: "hackintosh",
      tags: ["Archived"],
    },
    {
      title: "This blog",
      description: "Markdown, React, CSS in JS, and GraphQL 😎",
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
        icon: `${__dirname}/src/images/logo.png`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // this base query will be merged with any queries in each feed
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              postBasePath
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    site.siteMetadata.postBasePath +
                    edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    site.siteMetadata.postBasePath +
                    edge.node.fields.slug,
                  categories: edge.node.frontmatter.tags,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                }
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {frontmatter: { draft: { ne: true } }}
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-91007995-3`,
      },
    },
    "gatsby-plugin-twitter",
  ],
}
