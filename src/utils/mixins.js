import { css } from "styled-components"
import normalize from "utils/normalize"
import { breakpoints } from "utils/constants"

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

/**
 * @todo: fonts not working...
 */

export const openSansFont = css`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
`

export const patuaFont = css`
  font-family: "Patua One", cursive;
  font-style: normal;
`

export const reset = css`
  body {
    ${openSansFont}
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  ${normalize}
`

export const appWidth = css`
  max-width: 960px;
  padding: 0 15px;
  margin: 0 auto;
`

const shelfHeight = css`
  height: 60px;
`

export const headerHeight = css`
  ${shelfHeight}
`

export const footerHeight = css`
  ${shelfHeight}
`
