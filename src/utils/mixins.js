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

export const appWidth = css`
  max-width: ${breakpoints.md}px;
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

export const sourceSansFont = css`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
`

export const patuaFont = css`
  font-family: "Patua One", cursive;
  font-style: normal;
`

export const reset = css`
  ${normalize}

  body {
    ${sourceSansFont}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${patuaFont}
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  code {
    background-color: ${props => props.theme.neutralLighterAlt};
  }

  pre {
    padding: 1rem;
    background-color: ${props => props.theme.neutralLighterAlt};
    word-wrap: normal;
    border-radius: 4px;
  }

  pre code {
    background-color: transparent;
  }

  hr {
    border: none;
    border-bottom: 1px solid ${props => props.theme.neutralLight};
    margin-block-start: 3em;
    margin-block-end: 3em;
  }
`
