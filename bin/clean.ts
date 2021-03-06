import { remove } from 'fs-extra'
import paths = require('../config/paths')

const queue = [paths.build, paths.tmp]
queue.forEach((dir) => {
  remove(dir, (err) => {
    if (err) {
      console.error(`Unable to remove ${dir}`, err)
    }
  })
})
