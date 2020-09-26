const { getFileExtension } = require('../data/helpers')

const cn = (className) => {
  return className ? ` ${className}` : ''
}

/**
 * Mimics `includes/mixins/image.pug` in Eleventy templates for blur up/lazy loading
 * @param {string} path absolute path to image from build root
 * @param {string} alt accessibility attribute for image
 * @param {string} [caption] figcaption for the image
 */
exports.image = function (filename, alt, caption, imgClass) {
  let picture
  const src = `~images/${filename}`
  const ext = getFileExtension(filename)
  if (ext === 'gif') {
    picture = `<div class="mediabox">
      <img class="lazyimg lazyload${cn(
        imgClass
      )}" data-src="${src}" loading="lazy" alt="${alt}">
      <noscript>
        <img class="lazyimg lazyload${cn(
          imgClass
        )}" src="${src}" alt="${alt}" loading="lazy">
      </noscript>
    </div>`
  } else {
    const srcXs = `${src}?size=481`
    const srcSm = `${src}?size=640`
    const srcMd = `${src}?size=768`
    const srcLg = `${src}?size=1024`
    const srcXl = `${src}?size=1280`
    const srcLow = `${src}?size=40,quality=10,format=webp`
    picture = `<div class="mediabox">
    <picture>
      <source media="(min-width: 1024px)" data-srcset="${srcXl},format=webp" data-lowsrc="${srcLow}">
      <source media="(min-width: 1024px)" data-srcset="${srcXl}" data-lowsrc="${srcLow}">
      <source media="(min-width: 768px)" data-srcset="${srcLg},format=webp" data-lowsrc="${srcLow}">
      <source media="(min-width: 768px)" data-srcset="${srcLg}" data-lowsrc="${srcLow}">
      <source media="(min-width: 640px)" data-srcset="${srcMd},format=webp" data-lowsrc="${srcLow}">
      <source media="(min-width: 640px)" data-srcset="${srcMd}" data-lowsrc="${srcLow}">
      <source media="(min-width: 481px)" data-srcset="${srcSm},format=webp" data-lowsrc="${srcLow}">
      <source media="(min-width: 481px)" data-srcset="${srcSm}" data-lowsrc="${srcLow}">
      <source media="(min-width: 481px)" data-srcset="${srcXs},format=webp" data-lowsrc="${srcLow}">
      <img class="lazyimg lazyload${cn(
        imgClass
      )}" data-src="${srcXs}" data-lowsrc="${srcLow}" loading="lazy" alt="${alt}">
      <noscript>
        <img class="lazyimg lazyload${cn(
          imgClass
        )}" src="${srcXl}" alt="${alt}" loading="lazy">
      </noscript>
    </picture>
  </div>`
  }

  if (caption) {
    return `<figure>
    ${picture}
    <figcaption class="my-4 text-gray-700 text-sm text-center">${caption}</figcaption>
  </figure>`
  }

  return picture
}
