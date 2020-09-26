const { JSDOM } = require('jsdom')

/**
 * Returns RSS-ready HTML
 * @param {string} originalHtml - html fragment to parse
 * @returns {string} trasnformed HTML
 */
const processRssTemplate = (html) => {
  const dom = new JSDOM(html)

  const imageBlocks = dom.window.document.getElementsByClassName('mediabox')
  Array.from(imageBlocks).forEach((div) => {
    const templateImg = div.querySelector('noscript img')
    const img = dom.window.document.createElement('img')
    img.src = templateImg.src
    img.alt = templateImg.alt
    div.parentNode.replaceChild(img, div)
  })

  return dom.window.document.body.innerHTML
}

class Feed {
  data() {
    return {
      permalink: 'feed.json',
    }
  }

  render(data) {
    const { site, helpers, collections } = data
    const posts = collections.archive
      .filter(helpers.postsFilter)
      .sort(helpers.sortByDate)

    return JSON.stringify({
      updated: helpers.getLastUpdatedDate(posts),
      posts: posts.map((p) => ({
        slug: p.fileSlug,
        title: p.data.title,
        id: helpers.getAbsoluteUrl(site.url, p.url),
        link: p.url,
        description: p.data.description,
        date: p.date,
        content: processRssTemplate(p.data.content || p.templateContent),
        authors: p.data.authors,
        contributors: p.data.contributors,
      })),
    })
  }

  getImage(p) {
    if (p.data.image) {
      return p.data.image
    }
  }
}

class Empty {
  data() {
    return {
      permalink: false,
    }
  }
}

module.exports = process.env.NODE_ENV === 'production' ? Feed : Empty

// const parse5 = require('htmlparser2')
// const { find } = require('lodash')

// /**
//  * Returns RSS-ready HTML
//  * @param {string} originalHtml - html fragment to parse
//  * @returns {string} trasnformed HTML
//  */
// exports.processRssTemplate = (originalHtml) => {
//   let html = originalHtml

//   const documentFragment = parse5.parseFragment(html, {
//     sourceCodeLocationInfo: true,
//     scriptingEnabled: false,
//   })

//   if (documentFragment.childNodes && documentFragment.childNodes.length) {
//     documentFragment.childNodes.forEach((childNode) => {
//       const isImageBlock =
//         childNode.attrs &&
//         find(childNode.attrs, { name: 'class', value: 'mediabox' })
//       if (isImageBlock) {
//         const picture = find(childNode.childNodes, { nodeName: 'picture' })
//         const noscript = find(picture.childNodes, { nodeName: 'noscript' })
//         const img = find(noscript.childNodes, { nodeName: 'img' })
//         const { value: src } = find(img.attrs, { name: 'src' }) || {}
//         const { value: alt } = find(img.attrs, { name: 'alt' }) || {}
//         if (src) {
//           const imageSnippet = `<img src="${src}"${
//             alt ? ` alt="${alt}"` : ''
//           } />`
//           const start = childNode.sourceCodeLocation.startOffset
//           const end = childNode.sourceCodeLocation.endOffset
//           html = html.substring(0, start) + imageSnippet + html.substring(end)
//         }
//       }
//     })
//   }

//   return html
// }
