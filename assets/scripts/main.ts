import 'lazysizes'
import params from '@params'

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
