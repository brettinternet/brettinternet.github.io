const path = require('path')
const glob = require('glob')
const sharp = require('sharp')
const paths = require('../config/paths')

const images = glob.sync(`${paths.srcImages}/*`)
const imageMetadata = images.map(async (filepath) => sharp(filepath).metadata())

/**
 * @source https://sharp.pixelplumbing.com/api-input#metadata
 * @typedef {Object} MetadataMap where filename is the key (such as `image.png`)
 * @property {number} MetadataMap.width - image width
 * @property {number} MetadataMap.height - image height
 * ...
 */

/**
 * Retrieves meta information about each image in the image directory
 * @returns {MetadataMap}
 */
module.exports = async function getImageMetadata() {
  try {
    const data = await Promise.all(imageMetadata)
    return images.reduce(
      (acc, filepath, index) => ({
        ...acc,
        [path.basename(filepath)]: data[index],
      }),
      {}
    )
  } catch (err) {
    console.error(err)
  }
}
