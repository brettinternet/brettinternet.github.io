import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import { appWidth, headerHeight } from "utils/mixins"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <H1>
        <Link to="/">{siteTitle}</Link>
      </H1>
    </Wrapper>
  </StyledHeader>
)

const StyledHeader = styled.header`
  ${headerHeight}
`

const Wrapper = styled.div`
  ${appWidth}
  padding-top: 15px;
  padding-bottom: 15px;
`

const H1 = styled.h1`
  margin: 0;
  font-size: 16px;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
