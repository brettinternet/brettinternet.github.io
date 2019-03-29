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
  }

  componentDidMount() {
    this.setState({ themeInverted: getDarkMode() })
  }

  componentDidUpdate(prevProps, prevState) {
    const { themeInverted } = this.state
    if (prevState.themeInverted !== themeInverted) {
      if (themeInverted) setDarkMode(true)
      else setDarkMode()
    }
  }

  toggleThemeInversion = () => {
    this.setState({
      themeInverted: !this.state.themeInverted,
    })
  }

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
                siteUrl
              }
            }
          }
        `}
        render={data => {
          const { title, siteUrl, author } = data.site.siteMetadata
          return (
            <StyledTheme>
              <StyledApp>
                <Head {...headProps} />
                <ThemeInverted inverted={this.state.themeInverted}>
                  <>
                    <GlobalStyle />
                    <Header
                      siteTitle={title}
                      location={location}
                      onChangeTheme={this.toggleThemeInversion}
                      themeInverted={this.state.themeInverted}
                    />
                    <Main flex={flex}>{children}</Main>
                    <Footer siteUrl={siteUrl} author={author} />
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
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.white};
    color: ${props => props.theme.neutralDark};
    transition: color 200ms, background 200ms;
  }

  ${reset}
`

const Main = styled.main`
  flex-grow: 1;
  display: ${props => (props.flex ? "flex" : "block")};
`
