const toml = require('toml')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const {
  pairedShortcode: eleventyHighlighter,
} = require('@11ty/eleventy-plugin-syntaxhighlight')
const paths = require('./paths')
const shortcodes = require('./shortcodes')

const highlight = (content, args) => {
  if (args) {
    const [lang, ...highlightNumbers] = args.split(' ')
    return eleventyHighlighter(content, lang, highlightNumbers.join(' '))
  }
}

const markdownFilter = (text, options) =>
  markdownIt(
    Object.assign(
      {
        html: true,
        linkify: true,
        typographer: true,
        highlight,
      },
      options
    )
  )
    .use(markdownItAnchor)
    .disable('code')
    .render(text)

module.exports = (config) => {
  config.addDataExtension('toml', (contents) => toml.parse(contents))
  config.setFrontMatterParsingOptions({
    engines: {
      toml: toml.parse.bind(toml),
    },
  })

  config.setPugOptions({
    filters: {
      markdown: markdownFilter,
    },
  })

  config.addPlugin(syntaxHighlight)
  config.setLibrary(
    'md',
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: true,
    })
      .use(markdownItAnchor)
      .disable('code') // disables indented code blocks
  )

  /**
   * Custom collections
   * @source https://www.11ty.dev/docs/collections/#collection-api-methods
   */
  config.addCollection('archive', (collectionApi) =>
    collectionApi
      .getAll()
      .filter(
        (item) =>
          'categories' in item.data && item.data.categories.includes('archive')
      )
  )

  config.addCollection('drawer', (collectionApi) =>
    collectionApi
      .getAll()
      .filter(
        (item) =>
          'categories' in item.data && item.data.categories.includes('drawer')
      )
  )

  config.addShortcode('image', shortcodes.image)

  return {
    dir: {
      /**
       * @note apparently this must be a relative path
       * @issue https://github.com/11ty/eleventy/issues/1409
       */
      input: './src/pages',
      output: paths.tmp,
      // these must be relative paths to `input`
      includes: '../includes',
      layouts: '../includes/layouts',
      data: '../../data',
    },
  }
}
