import params from '@params'

if (!params.isProd) {
  console.info('params', params)
}

if (params.mermaid && window.mermaid) {
  window.mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
  })
}
