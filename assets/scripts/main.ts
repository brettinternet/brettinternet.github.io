import params from '@params'

import { setup as setupCopyCode } from './copy-code'
import { setup as setupLazyImages } from './lazy-images'

setupLazyImages()
setupCopyCode()

if (!params.isProd) {
  // biome-ignore lint: dev only
  console.info('params', params)
}

if (params.comments) {
  import('giscus')
}

if (params.mermaid && window.mermaid) {
  window.mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
  })
}
