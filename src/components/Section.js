import styled, { css } from "styled-components"
import PropTypes from "prop-types"

import { appWidth } from "utils/mixins"
import { breakpoints } from "utils/constants"

const Section = styled.section`
  ${appWidth}
  ${props => props.flex && flexStyles}
  ${props => props.thin && thinStyles}
  ${props => props.skinny && skinnyStyles}
  ${props => props.mTop && mTopStyles}
`

Section.propTypes = {
  flex: PropTypes.bool,
  thin: PropTypes.bool,
  skinny: PropTypes.bool,
  mTop: PropTypes.bool,
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

const mTopStyles = css`
  margin-top: 3rem;
`
