/**
 * @WIP
 * possible replacement? https://www.npmjs.com/package/gifsicle
 * or the imagemin abstraction of gifsicle
 */
import * as sharp from 'sharp'
import { glob } from 'glob'
import { basename } from 'path'
import { existsSync, mkdirSync, copySync } from 'fs-extra'
import paths = require('../config/paths')

const gifs = glob.sync(`${paths.srcImages}/*.gif`)

if (!existsSync(paths.tmp)) {
  mkdirSync(paths.tmp)
}

gifs.forEach((gifPath) => {
  const filename = basename(gifPath)
  const filepath = `${paths.tmp}/${filename}`
  if (!existsSync(filepath)) {
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/ccebb665b78ce7ae7030ef80ddba608ab076797d/types/sharp/index.d.ts#L615
    // @ts-ignore
    sharp(gifPath, { animated: true })
      // @ts-ignore
      .gif({ pageHeight: 80, delay: [500] })
      .toFile(filepath, (err: Error, info: string) => {
        if (err?.message.includes('class "magicksave" not found')) {
          console.log(
            "You must install 'libvips' in order to transform gifs with Sharp."
          )
          if (!existsSync(filepath)) {
            copySync(gifPath, filepath)
          }
        } else if (err) {
          throw err
        }
        if (info) {
          console.log(info)
        }
      })
  }
})
