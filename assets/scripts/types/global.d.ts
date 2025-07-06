import type { LazySizesConfigPartial } from 'lazysizes'

declare global {
  type Options = {
    startOnLoad: boolean
    // https://mermaid.js.org/config/theming.html
    theme: 'default' | 'neutral' | 'dark' | 'forest' | 'base'
  }

  interface Window {
    mermaid?: {
      initialize: (options: Options) => void
    }
    lazysizes: {
      cfg: LazySizesConfigPartial
    }
  }
}
