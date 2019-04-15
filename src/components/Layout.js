import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import StyledTheme, { ThemeInverted } from "components/StyledTheme"
import Head, { HeadPropTypes } from "./Head"
import Header from "components/Header"
import Footer from "./Footer"
import styled, { createGlobalStyle } from "styled-components"
import { reset } from "utils/mixins"
import { setDarkMode, getDarkMode } from "utils/localStorage"

class Layout extends React.PureComponent {
  state = {
    themeInverted: false,
    transitionBody: false,
    windowWidth: undefined,
    noBodyScroll: false,
    mobileMenuActive: false,
  }

  componentDidMount() {
    this.setState({ themeInverted: getDarkMode(), transitionBody: false })
  }

  componentDidUpdate(prevProps, prevState) {
    window.addEventListener("resize", this.handleResize)

    const { themeInverted } = this.state
    if (prevState.themeInverted !== themeInverted) {
      if (themeInverted) setDarkMode(true)
      else setDarkMode()
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = () => this.setState({ windowWidth: window.innerWidth })

  preventBodyScroll = () => this.setState({ noBodyScroll: true })
  resetBodyScroll = () => this.setState({ noBodyScroll: false })

  toggleThemeInversion = () => {
    this.setState({
      themeInverted: !this.state.themeInverted,
      transitionBody: true,
    })
  }

  openMobileMenu = () => this.setState({ mobileMenuActive: true })
  closeMobileMenu = () => this.setState({ mobileMenuActive: false })

  render() {
    const { children, location, headProps, flex } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                author
                siteRepo
                routes {
                  name
                  to
                }
              }
            }
          }
        `}
        render={data => {
          const { title, author, routes, siteRepo } = data.site.siteMetadata
          return (
            <StyledTheme>
              <StyledApp>
                <Head {...headProps} />
                <ThemeInverted inverted={this.state.themeInverted}>
                  <>
                    <GlobalStyle
                      transitionBody={this.state.transitionBody}
                      noBodyScroll={this.state.noBodyScroll}
                    />
                    <Header
                      siteTitle={title}
                      routes={routes}
                      location={location}
                      onChangeTheme={this.toggleThemeInversion}
                      themeInverted={this.state.themeInverted}
                      windowWidth={this.state.windowWidth}
                      preventBodyScroll={this.preventBodyScroll}
                      resetBodyScroll={this.resetBodyScroll}
                      mobileMenuActive={this.state.mobileMenuActive}
                      openMobileMenu={this.openMobileMenu}
                      closeMobileMenu={this.closeMobileMenu}
                    />
                    <Main flex={flex}>{children}</Main>
                    <Footer authorLink={siteRepo} author={author} />
                  </>
                </ThemeInverted>
              </StyledApp>
            </StyledTheme>
          )
        }}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headProps: PropTypes.shape(HeadPropTypes).isRequired,
  location: PropTypes.object.isRequired,
  flex: PropTypes.bool,
}

export default Layout

/**
 * Fancy shit for sticky footer... -_-
 */
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.white};
    color: ${props => props.theme.neutralDark};
    transition: all ${props =>
      props.transitionBody ? "400ms" : "0s"} ease-out;
    overflow-y: ${props => (props.noBodyScroll ? "hidden" : "visible")};
  }

  ${reset}
`

const Main = styled.main`
  flex-grow: 1;
  display: ${props => (props.flex ? "flex" : "block")};
`
