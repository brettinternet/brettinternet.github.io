import params from '@params'

import { setup as setupCopyCode } from './copy-code'

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
    // The neutral theme keeps text, nodes, edges, and labels high-contrast
    // across Mermaid diagram types.
    theme: 'neutral',
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
