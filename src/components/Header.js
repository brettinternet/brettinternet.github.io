import React from "react"
import PropTypes from "prop-types"
import { Link as A } from "gatsby"
import styled, { css } from "styled-components"

import { appWidth, headerHeight, media, headerFont } from "utils/mixins"
import { breakpoints } from "utils/constants"
import Switch from "components/Switch"
import MenuSvg from "images/icons/menu.svg"
import CloseSvg from "images/icons/close.svg"

const activeClassName = "active"
class Header extends React.PureComponent {
  componentDidUpdate(prevProps, prevState) {
    /**
     * Close the mobile menu when the screen is
     * resized past mobile breakpoint
     */
    if (
      this.props.mobileMenuActive &&
      prevProps.windowWidth !== this.props.windowWidth &&
      this.props.windowWidth > breakpoints.sm
    ) {
      this.closeMobileMenu()
    }

    /**
     * Prevent body scroll when mobile overlay is open
     */
    if (prevProps.mobileMenuActive !== this.props.mobileMenuActive) {
      if (this.props.mobileMenuActive) {
        this.props.preventBodyScroll()
      } else {
        this.props.resetBodyScroll()
      }
    }

    /**
     * Close the mobile menu after a route change
     */
    if (
      this.props.mobileMenuActive &&
      prevProps.location &&
      this.props.location &&
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      this.closeMobileMenu()
    }
  }

  openMobileMenu = () => this.props.openMobileMenu()
  closeMobileMenu = () => this.props.closeMobileMenu()

  render() {
    const { siteTitle, routes, onChangeTheme, themeInverted } = this.props
    return (
      <StyledHeader>
        <Nav>
          <Brand>
            <BrandA to="/" activeClassName={activeClassName}>
              {siteTitle}
              {/* {siteTitle.split("").map((letter, index, arr) => {
                const coefficient = themeInverted ? arr.length - index : index
                return (
                  <span
                    key={index}
                    style={{ transition: `color ${(coefficient + 1) * 200}ms` }}
                  >
                    {letter}
                  </span>
                )
              })} */}
            </BrandA>
          </Brand>

          <MobileMenuButton onClick={this.openMobileMenu}>
            <MenuSvg height="20" />
            <span>Menu</span>
          </MobileMenuButton>

          <Menu
            mobileActive={
              this.props.mobileMenuActive ? String(true) : String(false)
            }
          >
            <MobileCloseButton onClick={this.closeMobileMenu}>
              <CloseSvg height="20" />
              <span>Close</span>
            </MobileCloseButton>

            <Ul>
              {this.props.mobileMenuActive && (
                <Li>
                  <StyledA to="/" activeClassName={activeClassName}>
                    Home
                  </StyledA>
                </Li>
              )}
              {routes.map(({ name, to }, index) => (
                <Li key={index}>
                  <StyledA
                    to={to}
                    activeClassName={activeClassName}
                    // transitionMultiplier={(index + 1) * 500}
                  >
                    {name}
                  </StyledA>
                </Li>
              ))}
              <Li
              // style={{ position: "relative" }}
              >
                {/* <span
                style={{
                  position: "absolute",
                  fontSize: "8px",
                  top: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                >
                  lights
                </span> */}
                <StyledSwitch
                  innerLabel={"off"}
                  innerLabelChecked={"on"}
                  // label={themeInverted ? "" : "💡"}
                  alignRight
                  onChange={onChangeTheme}
                  checked={!themeInverted}
                />
              </Li>
            </Ul>
          </Menu>
        </Nav>
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const tabletQuery = media.sm
const brandZIndex = 20
const overlayZIndex = 15
const switchZIndex = 20

const StyledHeader = styled.header`
  ${headerFont};
  ${headerHeight};
`

const Nav = styled.nav`
  ${appWidth}
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${tabletQuery`
    justify-content: flex-start;
    flex-flow: row nowrap;
  `}
`

const Brand = styled.div`
  display: inline-block;
  margin-right: auto;
  font-size: 1.25rem;
  z-index: ${brandZIndex};

  ${tabletQuery`
    margin-right: 1rem;
  `}
`

const BrandA = styled(A).attrs({
  activeClassName,
})`
  text-decoration: none;
  padding: 0.25rem 0;
  color: ${props => props.theme.neutralDark};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 200ms, color 200ms;

  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.themeLighter};
  }

  &:active {
    background-color: ${props => props.theme.themeTertiary};
  }

  &.${activeClassName} {
    background-color: ${props => props.theme.neutralLight};
  }

  & > span {
    color: inherit;
  }
`

const Menu = styled.menu`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-basis: 100%;
  padding: 0;
  margin: 0;

  ${tabletQuery`
    flex-basis: auto;
    opacity: 1;
    transform: scale(1);
    visibility: visible;
    position: static;
    background: none;
  `}

  transform: scale(${props => (props.mobileActive === "true" ? 1 : 0.98)});
  transition: visibility 0.2s ease-out, opacity 0.2s ease-out,
    transform 0.2s ease-out, background 400ms ease-out;
  opacity: ${props => (props.mobileActive === "true" ? 1 : 0)};
  top: 0;
  right: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  visibility: ${props =>
    props.mobileActive === "true" ? "visible" : "hidden"};
  background: ${props => props.theme.white};
  z-index: ${overlayZIndex};
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  text-align: center;
  flex-direction: column;
  width: 100%;

  ${tabletQuery`
    width: auto;
    flex-direction: row;
    margin-right: 0;
    margin-left: auto;
  `}
`

const Li = styled.li`
  ${tabletQuery`
    margin-left: 0.5rem;
  `}
`

const StyledA = styled(A).attrs({
  activeClassName,
})`
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: ${props => props.theme.neutralDark};
  transition: background-color 200ms;
  /* color ${props => props.transitionMultiplier}ms; */
  padding: 1rem 0.5rem;

  &:hover {
    text-decoration: none;
    background-color: ${props => props.theme.themeLight};
  }

  &:active {
    background-color: ${props => props.theme.themeTertiary};        
  }

  &.${activeClassName} {
    background-color: ${props => props.theme.neutralLight};    
  }

  ${tabletQuery`
    display: inline;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 4px;
  `}
`

const StyledSwitch = styled(Switch)`
  font-size: 0.7em;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 18px;
  z-index: ${switchZIndex};

  ${tabletQuery`
    position: static;
    margin: 0;
    z-index: 0;
  `}
`

const resetButton = css`
  background-color: transparent;
  align-items: center;
  padding: 0;
  display: flex;
  border-width: 0;
  cursor: pointer;
  font-size: 0.8rem;

  & > svg {
    color: inherit;
    fill: currentColor;
  }

  ${tabletQuery`
    display: none;
  `}
`

const MobileMenuButton = styled.button`
  color: ${props => props.theme.black};
  ${resetButton};
`

const MobileCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 18px;
  color: ${props => props.theme.black};
  ${resetButton};
`

// const StyledFooter = styled(Footer)`
//   display: inline-block;
//   position: absolute;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
// `
