import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { footerHeight } from "utils/mixins"

const Footer = ({ siteUrl }) => (
  <StyledFooter>
    <span>
      Made with <Heart>❤</Heart> by <a href={siteUrl}>@brettinternet</a>
    </span>
  </StyledFooter>
)

Footer.propTypes = {
  siteUrl: PropTypes.string,
}

export default Footer

const Heart = styled.span`
  color: red;
`

const StyledFooter = styled.footer`
  ${footerHeight}
  color: ${props => props.theme.neutralSecondary};
  text-align: center;
  font-size: 10px;
  width: 100%;
  /*  ...wtf  */
  line-height: 59px;
`
