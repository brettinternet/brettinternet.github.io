import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import { appWidth } from "utils/mixins"
import { breakpoints } from "utils/constants"

const Section = styled.section`
  padding-top: 1em;
  padding-bottom: 1em;
  ${appWidth}
  ${({ flex }) => flex && flexStyles}
  ${({ thin }) => thin && thinStyles}
  ${({ skinny }) => skinny && skinnyStyles}
`

Section.propTypes = {
  flex: PropTypes.bool,
  thin: PropTypes.bool,
  skinny: PropTypes.bool,
}

export default Section

const flexStyles = css`
  display: flex;
  align-items: center;
`

const thinStyles = css`
  max-width: ${breakpoints.sm}px;
`

const skinnyStyles = css`
  max-width: ${breakpoints.xs}px;
`
