const fs = require('fs')
const path = require('path')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItFootnote = require('markdown-it-footnote')
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
    .use(markdownItFootnote)
    .disable('code')
    .render(text)

module.exports = (config) => {
  config.addPlugin(require('./img-dim'))
  config.addPlugin(require('./json-ld'))
  // config.addPlugin(require('./optimize-html'))
  // config.addPlugin(require('./apply-csp'))

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
      .use(markdownItFootnote)
      .disable('code') // disables indented code blocks
  )

  /**
   * Custom collections
   * @source https://www.11ty.dev/docs/collections/#collection-api-methods
   */
  const customCategories = ['archive', 'drawer', 'meta']
  customCategories.forEach((name) => {
    config.addCollection(name, (collectionApi) =>
      collectionApi
        .getAll()
        .filter(
          (item) =>
            'categories' in item.data && item.data.categories.includes(name)
        )
    )
  })

  config.addShortcode('image', shortcodes.image)

  config.setBrowserSyncConfig({
    callbacks: {
      ready: (_err, browserSync) => {
        const content_404 = fs.readFileSync(
          path.resolve(paths.build, '404.html')
        )

        browserSync.addMiddleware('*', (_req, res) => {
          res.write(content_404)
          res.end()
        })
      },
    },
    ui: false,
    ghostMode: false,
  })

  return {
    templateFormats: ['md', 'pug', 'js'],
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
