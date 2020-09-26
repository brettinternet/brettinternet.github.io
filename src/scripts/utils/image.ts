import 'lazysizes/plugins/native-loading/ls.native-loading'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/blur-up/ls.blur-up'
import lazySizes from 'lazysizes'

Object.assign(lazySizes.cfg, {
  init: false,
  loadMode: 1,
})

lazySizes.init()
