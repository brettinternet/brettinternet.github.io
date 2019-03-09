import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"
import { theme, themeInverted } from "utils/theme"

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

/**
 * @usage Must be a child of the parent ThemeProvider
 */
export const ThemeInverted = ({ children, inverted }) =>
  inverted ? (
    <ThemeProvider theme={themeInverted}>{children}</ThemeProvider>
  ) : (
    children
  )

ThemeInverted.propTypes = {
  inverted: PropTypes.bool,
}

ThemeInverted.defaultProps = {
  inverted: true,
}

export default Theme
