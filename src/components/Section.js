import styled, { css } from "styled-components"

import { appWidth } from "utils/mixins"

const FlexStyles = css`
  display: flex;
  align-items: center;
`

const Section = styled.section`
  ${appWidth}
  ${props => props.flex && FlexStyles}
`

export default Section
