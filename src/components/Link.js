import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const _Link = ({ href, to, ...rest }) => {
  const TagName = href && !to ? StyledAnchor : StyledLink
  const props = {
    ...rest,
    to,
    href,
  }
  return <TagName {...props} />
}

_Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
}

export default _Link

const anchorStyles = css`
  text-decoration: none;
  color: ${props => props.theme.themePrimary};

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.themeDarkAlt};
  }
`

const StyledLink = styled(Link)`
  ${anchorStyles};
`

const StyledAnchor = styled.a`
  ${anchorStyles};
`
