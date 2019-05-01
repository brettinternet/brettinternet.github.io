import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Tag = ({
  className,
  style,
  children,
  themed,
  noBackground,
  textMuted,
  mRight,
  mBottom,
  noPadding,
}) => (
  <StyledTag
    className={className}
    style={style}
    themed={themed}
    noBackground={noBackground}
    textMuted={textMuted}
    mRight={mRight}
    mBottom={mBottom}
    noPadding={noPadding}
  >
    <span>{children}</span>
  </StyledTag>
)

Tag.propTypes = {
  style: PropTypes.object,
  themed: PropTypes.bool,
  noBackground: PropTypes.bool,
  textMuted: PropTypes.bool,
  mRight: PropTypes.string,
  mBottom: PropTypes.string,
}

export default Tag

const StyledTag = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  background-color: ${({ noBackground, themed, theme }) =>
    noBackground ? "inherit" : themed ? theme.themeDarker : theme.neutralLight};
  min-width: 20px;
  max-width: 100%;
  min-height: 20px;
  padding: ${({ noPadding }) => (noPadding ? 0 : "2px 6px")};
  line-height: 16px;
  color: ${({ textMuted, themed, theme }) =>
    textMuted ? theme.neutralSecondary : themed ? theme.white : theme.black};
  white-space: nowrap;
  margin-right: ${({ mRight }) => (mRight ? mRight : "0px")};
  margin-bottom: ${({ mBottom }) => (mBottom ? mBottom : "0px")};
  font-size: 11px;

  & > span {
    flex-grow: 1;
    flex-shrink: 1;
  }

  transition: background-color 150ms, color 150ms;

  &:hover {
    background-color: ${({ noBackground, themed, theme }) =>
      noBackground
        ? "inherit"
        : themed
        ? theme.themeDark
        : theme.neutralQuaternaryAlt};
    text-decoration: none;
  }

  &:active {
    background-color: ${({ noBackground, themed, theme }) =>
      noBackground
        ? "inherit"
        : themed
        ? theme.themeDarkAlt
        : theme.neutralQuaternary};
  }
`
