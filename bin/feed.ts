/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
import { sep, basename, resolve } from 'path'
import { existsSync, writeFileSync } from 'fs'
import { URL } from 'url'
import { Feed } from 'feed'
import { Author } from 'feed/lib/typings'
import { JSDOM, DOMWindow } from 'jsdom'
import { glob } from 'glob'
import { find, head } from 'lodash'
import * as paths from '../config/paths'
/* eslint-disable @typescript-eslint/no-var-requires */
const feedData = require(`${paths.tmp}/feed.json`)
const site = require('../data/site')
/* eslint-enable @typescript-eslint/no-var-requires */

const port = process.env.PORT || 3000
const siteUrl =
  process.env.NODE_ENV === 'production' ? site.url : `http://localhost:${port}`

type PostData = {
  slug: string
  title: string
  id: string
  link: string
  description: string
  date: string
  content: string
  authors?: Author[]
  contributors?: Author[]
}

type FeedData = {
  updated: string
  posts: PostData[]
}

const { updated: lastUpdated, posts } = feedData as FeedData

const defaultAuthor = {
  name: site.author.name,
}

/**
 * Get basename without extension
 * @source https://stackoverflow.com/a/4250408/6817437
 */
const getBasename = (pathname: string) => {
  return pathname.replace(/\.[^/.]+$/, '')
}

/**
 * Include domain name in absolute URL
 */
const getAbsoluteUrl = (pathname: string, base: string = siteUrl): string =>
  new URL(pathname, base).toString()

/**
 * Get build's HTML pages relative to build directory
 */
const getRelativeHtmlPages = () => {
  const absolutePaths = glob.sync(`${paths.build}/**/*.html`)
  return absolutePaths.map((file) => {
    const pathArr = file.split(sep)
    return pathArr.slice(pathArr.indexOf(basename(paths.build)) + 1).join(sep)
  })
}

type ImageAttr = {
  src: string
  alt?: string
}

/**
 * Get `ImageAttr` list from a document's `img` tags with the `article` block
 */
const getImgAttrs = (window: DOMWindow): ImageAttr[] => {
  const imgs = window.document.querySelectorAll<HTMLImageElement>('article img')
  return Array.from(imgs)
    .filter((i) => !!i.getAttribute('src'))
    .map((img) => ({
      src: img.getAttribute('src') as string,
      alt: img.getAttribute('alt') || undefined,
    }))
}

/**
 * Get `ImageAttr` from the meta image for this page
 */
const getMetaImageAttr = (window: DOMWindow): ImageAttr | undefined => {
  const metaImage = window.document.querySelector(
    "head meta[property='og:image']"
  )
  const metaImageAlt = window.document.querySelector(
    "meta[property='og:image:alt']"
  )
  const src = metaImage?.getAttribute('content')
  if (src) {
    return {
      src,
      alt: metaImageAlt?.getAttribute('content') || undefined,
    }
  }
}

/**
 * Get all `ImageAttr` for an article
 */
const getImageAttrsFromFile = async (slug: string): Promise<ImageAttr[]> => {
  const buildHtmls = getRelativeHtmlPages()
  const file = find(buildHtmls, (f) => f.includes(slug))
  if (file) {
    const dom = await JSDOM.fromFile(resolve(paths.build, file))
    const metaImageAttr = getMetaImageAttr(dom.window)
    return (metaImageAttr ? [metaImageAttr] : []).concat(
      getImgAttrs(dom.window)
    )
  }

  return []
}

/**
 * Find `ImageAttr` in `ImageAttr[]`
 */
const findImage = (
  imageAttrs: ImageAttr[],
  image: ImageAttr
): ImageAttr | undefined => {
  if (image && image.src) {
    const { src, alt } = image
    const srcNoExt = getBasename(src)
    return find(imageAttrs, (i) => {
      const shortSrc = getBasename(i.src)
      if (shortSrc.includes(srcNoExt)) {
        return true
      }
      if (i.alt && i.alt === alt) {
        return true
      }
      return false
    })
  }
}

/**
 * Replace matching `ImageAttr` from `ImageAttr[]`
 */
const transformContent = (content: string, imageAttrs: ImageAttr[]) => {
  const frag = JSDOM.fragment(`<div>${content}</div>`)
  const imgs = frag.querySelectorAll('img')
  Array.from(imgs).forEach((img) => {
    const matchedImageAttr = findImage(imageAttrs, {
      src: img.src,
      alt: img.alt,
    })
    if (matchedImageAttr) {
      img.src = getAbsoluteUrl(matchedImageAttr.src)
    }
  })
  return frag.firstElementChild?.outerHTML
}

/**
 * Write content to build directory
 */
const writeFeed = (filename: string, output: string) => {
  try {
    writeFileSync(`${paths.build}/${filename}`, output)
  } catch (err) {
    console.error(err)
  }
}

const main = async (): Promise<void> => {
  const feed = new Feed({
    title: site.title,
    description: site.description,
    id: site.url,
    link: site.url,
    updated: new Date(lastUpdated),
    language: 'en',
    favicon: `${site.url}/favicon.ico`,
    copyright: 'brett',
    generator: `https://github.com/${site.githubRepo}`,
    feedLinks: {
      rss: `${site.url}/rss`,
    },
    author: defaultAuthor,
  })

  if (posts) {
    await Promise.all(
      posts.map(
        async ({
          slug,
          title,
          id,
          description,
          link,
          content,
          date,
          authors,
          contributors,
        }) => {
          const imageAttrs = await getImageAttrsFromFile(slug)
          const mainImage = head(
            imageAttrs.filter(({ src }) => !src.includes('.svg'))
          )
          const contentWithImages = transformContent(content, imageAttrs)
          feed.addItem({
            title,
            id,
            link: getAbsoluteUrl(link),
            description,
            date: new Date(date),
            image: mainImage && {
              url: getAbsoluteUrl(mainImage.src),
              title: mainImage.alt,
            },
            author: authors ? authors.concat([defaultAuthor]) : undefined,
            contributor: contributors,
            content: contentWithImages,
          })
        }
      )
    )
  }

  writeFeed('rss.xml', feed.rss2())
}

if (existsSync(paths.build)) {
  main().catch(console.error)
}
