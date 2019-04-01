import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Tag = ({ children, themed, noBackground, textMuted, mRight }) => (
  <StyledTag
    themed={themed}
    noBackground={noBackground}
    textMuted={textMuted}
    mRight={mRight}
  >
    <span>{children}</span>
  </StyledTag>
)

Tag.propTypes = {
  themed: PropTypes.bool,
  noBackground: PropTypes.bool,
  textMuted: PropTypes.bool,
  mRight: PropTypes.string,
}

export default Tag

const StyledTag = styled.span`
  /* float: left; */
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  background-color: ${props =>
    props.noBackground
      ? "inherit"
      : props.themed
      ? props.theme.themeDarker
      : props.theme.neutralLight};
  min-width: 20px;
  max-width: 100%;
  min-height: 20px;
  padding: 2px 6px;
  line-height: 16px;
  color: ${props =>
    props.textMuted
      ? props.theme.neutralSecondary
      : props.themed
      ? props.theme.white
      : props.theme.black};
  font-size: 10px;
  white-space: nowrap;
  margin-right: ${props => (props.mRight ? props.mRight : "0px")};

  & > span {
    flex-grow: 1;
    flex-shrink: 1;
  }

  &:hover {
    background-color: ${props =>
      props.noBackground
        ? "inherit"
        : props.themed
        ? props.theme.themeDark
        : props.theme.neutralQuaternaryAlt};
    text-decoration: none;
  }

  &:active {
    background-color: ${props =>
      props.noBackground
        ? "inherit"
        : props.themed
        ? props.theme.themeDarkAlt
        : props.theme.neutralQuaternary};
  }
`
