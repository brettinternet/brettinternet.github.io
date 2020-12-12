const path = require('path')
const { URL } = require('url')
const paths = require('../config/paths')

/**
 * Make a date visually understood
 * @param {string} date - date to be formatted
 * @returns {string} Month D, YYYY
 */
exports.formatDate = (date) =>
  new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

/**
 * Relative root directory used to source files in build dir to project root
 * for access to `node_modules` and `src`
 * @param {string} outputPath - page `outputPath` property in the build directory
 * @returns {string} relative path from build dir to root dir, includes trailing slash
 */
exports.getRelativeRoot = (outputPath) =>
  outputPath ? path.relative(path.dirname(outputPath), paths.root) : ''

/**
 * Get the extension
 * @param {string} filename - filename or path
 * @returns {string} extension without 'period' prefix
 */
exports.getFileExtension = (filename) =>
  filename
    ? filename.substr(filename.lastIndexOf('.') + 1, filename.length)
    : filename

/**
 * @typedef {Object} CollectionItem
 * @property {string} CollectionItem.title - item heading
 * @property {string} CollectionItem.date - item publish date
 * @property {Object} CollectionItem.data - item metadata provided within the post
 */

/**
 *
 * @param {CollectionItem} p Collection item to avoid rendering
 * @returns {boolean} whether to include the item in the filter
 */
exports.postsFilter = (p) => !p.data.draft

/**
 * A desc sort callback to be provided to the `Array.prototype.sort` method,
 * sorts by `CollectionItem.date`
 * @param {CollectionItem} a - a collection item provided by Eleventy
 * @param {CollectionItem} b - the next collection item provided by Eleventy
 * @returns the sorted array
 */
exports.sortByDate = (a, b) => {
  const aDate = new Date(a.date)
  const bDate = new Date(b.date)
  if (aDate > bDate) {
    return -1
  }
  if (aDate < bDate) {
    return 1
  }
  return 0
}

/**
 * @typedef {Object[]} SocialLinks
 * @property {string} SocialLinks[].name - text to appear inside link
 * @property {string} SocialLinks[].href - link href
 * @property {string} SocialLinks[].icon - icon name for icon mixin
 */

/**
 * Get a list of social links for rendering with icons
 * @param {Object} usernames
 * @param {string} usernames.twitter - twitter handle
 * @param {string} usernames.github - github username
 * @param {string} usernames.linkedin - linkedin username
 * @returns {SocialLinks} - a list of mapped social links and values
 */
exports.getSocialLinks = ({ twitter, github, linkedin }) => [
  {
    name: 'LinkedIn',
    href: `https://linkedin.com/in/${linkedin}`,
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: `https://github.com/${github}`,
    icon: 'github',
  },
  {
    name: 'Twitter',
    href: `https://twitter.com/${twitter}`,
    icon: 'twitter',
  },
]

/**
 * Eleventy `page` object provides `inputPath` which is a relative directory from project root
 * @param {string} path `page.inputPath` value within Eleventy template
 * @returns {string} absolute path such as `/src/pages/index.pug`
 */
exports.getAbsoluteInputPath = (path) => path.slice(1)

/**
 * Determine if a URL is absolute or relative
 * @source https://stackoverflow.com/a/19709846/6817437
 * @param {string} url - url in question
 * @returns {boolean} true if it's absolute
 */
exports.isAbsoluteUrl = (url) => {
  if (url) {
    const exp = new RegExp('^(?:[a-z]+:)?//', 'i')
    return exp.test(url)
  }
  return url
}

/**
 * Combine the base domain with a pathname for an absolute URL
 * @source https://github.com/11ty/eleventy-plugin-rss/blob/a62d9dfbb32ce2f6b39568062c437e7d2b8631fa/src/absoluteUrl.js
 * @param {string} base - domain name such as `http://example.com`
 * @param {string} pathname - a subdirectory such as `/test/`
 * @returns {string} absolute URL
 */
exports.getAbsoluteUrl = (base, pathname) => new URL(pathname, base).toString()

/**
 * @typedef {Object[]} Collection
 * @property {string} Collection[].name - date published
 * @property {string} SocialLinks[].href - link href
 * @property {string} SocialLinks[].icon - icon name for icon mixin
 */

/**
 * Get the most recent date from a collection of posts
 * @source https://github.com/11ty/eleventy-plugin-rss/blob/a62d9dfbb32ce2f6b39568062c437e7d2b8631fa/.eleventy.js
 * @param {Collection} collection - collection to extract recent date
 * @returns {string} ISO date string
 */
exports.getLastUpdatedDate = (collection) => {
  if (!collection || !collection.length) {
    throw Error('Collection is empty in getLastUpdatedDate argument.')
  }

  /**
   * 2020-09-22T01:28:03+00:00 (dateToISO Eleventy helper)
   * 2020-09-22T01:28:03.826Z (toISOString)
   */
  return new Date(
    Math.max(
      ...collection.map((item) => {
        return item.date
      })
    )
  ).toISOString()
}

/**
 * Get the soft background color assigned to a category
 * These must be explicitly included in tailwind config for purgeCSS whitelisting
 * @param {"project" | "post"} category - a description of the type of content
 * @returns {string} classname assigned to a category (e.g.`bg-blue-200`)
 */
exports.getCategoryBgColor = (category) => {
  switch (category) {
    case 'project':
      return 'bg-green-200'
    case 'deck':
      return 'bg-orange-200'
    case 'meta':
      return 'bg-yellow-200'
    case 'post':
    default:
      return 'bg-blue-200'
  }
}

/**
 * Get the foreground font color assigned to a category
 * These must be explicitly included in tailwind config for purgeCSS whitelisting
 * @param {"project" | "post"} category - a description of the type of content
 * @returns {string} classname assigned to a category (e.g.`text-blue-200`)
 */
exports.getCategoryFgColor = (category) => {
  switch (category) {
    case 'project':
      return 'text-green-600'
    case 'deck':
      return 'text-orange-600'
    case 'meta':
      return 'text-yellow-600'
    case 'post':
    default:
      return 'text-blue-600'
  }
}
