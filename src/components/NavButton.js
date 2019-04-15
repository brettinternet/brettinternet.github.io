import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import A from "components/Link"

const Button = ({ dir, to, href, children, name, className, css }) => {
  const isForward = dir === "forward"
  const isBackward = dir === "backward"
  return (
    <StyledA to={to} href={href} className={className} css={css}>
      {dir && isBackward && (
        <Arrow role="img" aria-label="back arrow">
          ⬅
        </Arrow>
      )}
      <ButtonText>{name || children}</ButtonText>
      {dir && isForward && (
        <Arrow role="img" aria-label="forward arrow">
          ➡
        </Arrow>
      )}
    </StyledA>
  )
}

const NavButton = ({ buttons, ...butonProps }) => {
  return buttons && buttons.length ? (
    <Nav>
      {buttons.map((eachButtonProps, index) => (
        <li key={index}>
          <Button {...eachButtonProps} />
        </li>
      ))}
    </Nav>
  ) : (
    <Button {...butonProps} />
  )
}

const navButtonPropType = PropTypes.shape({
  dir: PropTypes.oneOf(["forward", "backward"]),
})

NavButton.propTypes = {
  buttons: PropTypes.arrayOf(navButtonPropType),
}

export default NavButton

const Arrow = styled.span`
  text-decoration: none;
`

const ButtonText = styled.span`
  margin: 0 0.25em;
`

const Nav = styled.ul`
  font-size: 13px;
  text-align: center;
  list-style: none;
  padding: 0;
`

const StyledA = styled(A)`
  padding: 0.25em;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    text-decoration: none;

    ${ButtonText} {
      margin: 0 0.75em;
      transition: margin 0.2s;
      text-decoration: underline;
    }
  }
`
