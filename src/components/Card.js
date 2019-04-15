import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import A from "components/Link"
import Tag from "components/Tag"

import { serifFont } from "utils/mixins"

const Card = ({ to, href, className, title, description, details, tags }) => (
  <RootA to={to} href={href} className={className}>
    <div>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <Flex>
        {details && <Details>{details}</Details>}
        {tags && (
          <Tags>
            {tags.map((tag, index) => (
              <Tag themed>{tag}</Tag>
            ))}
          </Tags>
        )}
      </Flex>
    </div>
  </RootA>
)

Card.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Card

const RootA = styled(A)`
  /* background: linear-gradient(
      to right top,
      ${({ theme }) => theme.themePrimary},
      ${({ theme }) => theme.themeDark}
    )
    rgb(255, 255, 255); */
  /* background: ${({ theme }) => theme.neutralTertiaryAlt}; */
  display: block;
  color: inherit;
  overflow: hidden;
  padding: 2em;
  box-shadow: 0 13px 27px -5px ${({ theme }) => theme.neutralLighterAlt},
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  transform: translateY(0);
  border-radius: 8px;
  transition: all 200ms;
  border: 1px solid ${({ theme }) => theme.neutralLighter};

  h3 {
    color: ${({ theme }) => theme.black};
    margin: 0 0 0.5em 0;
  }

  p {
    color: ${({ theme }) => theme.neutralSecondary};
    font-size: 15px;
    line-height: 1.3;
    margin: 0;
  }

  &:hover {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 30px 60px -12px ${({ theme }) => theme.neutralLight},
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);

    h3 {
      text-decoration: underline;
    }
  }
`

const Flex = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Details = styled.div`
  color: ${({ theme }) => theme.neutralTertiary};
  font-size: 11px;
  ${serifFont};
  font-weight: 400;
`

const Tags = styled.div`
  & > span {
    margin: 0.25em;
  }
`
