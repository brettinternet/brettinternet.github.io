import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider as StyledTheme } from "styled-components"
import { theme, themeInverted } from "utils/theme"

const defaultTheme = "light"
const ThemeContext = React.createContext(defaultTheme)

export const ThemeProvider = ({ children, inverted }) => (
  <ThemeContext.Provider value={inverted ? "dark" : "light"}>
    <StyledTheme theme={theme}>
      {inverted ? (
        <StyledTheme theme={themeInverted}>{children}</StyledTheme>
      ) : (
        children
      )}
    </StyledTheme>
  </ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  inverted: PropTypes.bool,
}

ThemeProvider.defaultProps = {
  inverted: false,
}

export default ThemeContext
