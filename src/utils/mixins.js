import { css } from "styled-components"
import normalize from "utils/normalize"

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
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

  a {
    text-decoration: none;
    color: ${props => props.theme.themePrimary};

    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.themeDarkAlt};
    }

    &:visited {
      color: inherit;
    }
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
