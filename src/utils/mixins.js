import { css } from "styled-components"
import normalize from "utils/normalize"
import { breakpoints } from "utils/constants"
import prismTheme from "./prism-theme"

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
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
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

export const serifFont = css`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-style: normal;
`

export const headerFont = css`
  font-family: "Patua One", cursive;
  font-style: normal;
`

export const sansSerifFont = css`
  font-family: Helvetica, Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
`

export const reset = css`
  ${normalize};
  ${prismTheme};

  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    ${sansSerifFont};
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${headerFont}
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  blockquote {
    padding: 1rem;
    border: 5px solid ${({ theme }) => theme.neutralLighterAlt};
    font-size: 80%;
    ${sansSerifFont};
    line-height: 1.4;
    margin: 1rem 0;
  }

  pre code {
    background-color: transparent;
  }

  hr {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.neutralLight};
    margin-block-start: 2em;
    margin-block-end: 2em;
  }
`
