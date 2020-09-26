declare module 'lazysizes' {
  /**
   * @docs https://github.com/aFarkas/lazysizes#js-api
   */
  export const cfg: {
    loadMode: number
    init: boolean
  }

  export const init: () => void
}

declare module 'lazysizes/plugins/object-fit/ls.object-fit' {}
declare module 'lazysizes/plugins/parent-fit/ls.parent-fit' {}
declare module 'lazysizes/plugins/blur-up/ls.blur-up' {}
declare module 'lazysizes/plugins/native-loading/ls.native-loading' {}
