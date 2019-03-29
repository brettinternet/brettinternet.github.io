import React from "react"
import PropTypes from "prop-types"
import { Link as A } from "gatsby"
import styled from "styled-components"

import { appWidth, headerHeight } from "utils/mixins"
import Switch from "components/Switch"

const Header = ({ siteTitle, onChangeTheme, themeInverted }) => (
  <StyledHeader>
    <Nav>
      <Brand>
        <A to="/">{siteTitle}</A>
      </Brand>

      <Menu>
        <UL>
          <LI>
            <StyledA to="/about">About</StyledA>
          </LI>
          <LI>
            <StyledSwitch
              innerLabel={"off"}
              innerLabelChecked={"on"}
              label={themeInverted ? "" : "💡"}
              alignRight
              onChange={onChangeTheme}
              checked={!themeInverted}
            />
          </LI>
        </UL>
      </Menu>
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.header`
  ${headerHeight}
`

const Nav = styled.nav`
  ${appWidth}
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
`

const Brand = styled.div`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.25rem;
`

const Menu = styled.menu`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  margin: 0;
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-left: auto;
`

const LI = styled.li`
  margin-left: 0.5rem;
`

const StyledA = styled(A)`
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme.themePrimary};
  border-radius: 4px;
  transition: background 200ms;

  &:hover {
    text-decoration: none;
    background: ${props => props.theme.themeLighter};
  }
`

const StyledSwitch = styled(Switch)`
  font-size: 0.7em;
`
