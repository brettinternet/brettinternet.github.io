/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import StyledTheme, { ThemeInverted } from "components/StyledTheme"
import Head, { HeadPropTypes } from "./Head"
import Header from "components/Header"
import Footer from "./Footer"
import styled, { createGlobalStyle } from "styled-components"
import { reset } from "utils/mixins"

class Layout extends React.Component {
  state = {
    inverted: false,
  }

  toggleInvertedColors = () => this.setState({ inverted: !this.state.inverted })

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
                <ThemeInverted inverted={this.state.inverted}>
                  <>
                    <GlobalStyle />
                    <Header
                      siteTitle={title}
                      location={location}
                      onChangeTheme={this.toggleInvertedColors}
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
