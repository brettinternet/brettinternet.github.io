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

// https://spencermortensen.com/articles/email-obfuscation/
document
  .querySelectorAll<HTMLAnchorElement>('a.href-conversion')
  .forEach((anchor) => {
    const value = anchor.dataset.href
    if (value) {
      anchor.setAttribute('href', value)
    }
    delete anchor.dataset.href
    anchor.classList.remove('href-conversion')
  })
