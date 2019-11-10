import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { theme } from "utils/theme"

import Image from "gatsby-image"
import A from "components/Link"
import Tag from "components/Tag"

import { serifFont } from "utils/mixins"

const Card = ({
  to,
  href,
  className,
  title,
  description,
  details,
  tags,
  imageProps,
}) => {
  return (
    <RootA to={to} href={href} className={className} withImage={!!imageProps}>
      {imageProps && (
        <ImageContainer>
          {imageProps.src ? (
            <StyledImage {...imageProps} />
          ) : (
            <StyledGatsbyImage {...imageProps} />
          )}
        </ImageContainer>
      )}
      <Wrapper>
        {title && <h3>{title}</h3>}
        <Body>{description && <p>{description}</p>}</Body>
        <Flex>
          {details && <Details>{details}</Details>}
          {tags && (
            <Tags>
              {tags.map(tag => (
                <Tag key={tag} themed interactive={false}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          )}
        </Flex>
      </Wrapper>
    </RootA>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  imageProps: PropTypes.object,
}

export default Card

const Details = styled.div`
  font-size: 11px;
  ${serifFont};
  font-weight: 400;
`

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: all 200ms;
  filter: brightness(40%);
`

const StyledGatsbyImage = styled(Image)`
  ${imageStyles};
`

const StyledImage = styled.img`
  ${imageStyles};
`

const RootA = styled(A)`
  display: block;
  position: relative;
  color: inherit;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px ${({ theme }) => theme.neutralLighterAlt},
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  transform: translateY(0);
  border-radius: 8px;
  transition: all 200ms;
  border: 1px solid ${({ theme }) => theme.neutralLighter};

  h3 {
    margin: 0 0 0.5em 0;
  }

  p {
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

    p {
      text-decoration: none;
    }

    ${StyledGatsbyImage}, ${StyledImage} {
      width: 102%;
      height: 102%;
      filter: brightness(50%) blur(2px);
    }
  }

  ${({ withImage }) =>
    withImage
      ? css`
          h3 {
            color: ${theme.neutralLighter};
          }

          p {
            color: ${theme.neutralLighterAlt};
          }

          ${Details} {
            color: ${theme.neutralQuaternaryAlt};
          }
        `
      : css`
          h3 {
            color: ${theme.black};
          }

          p {
            color: ${theme.neutralSecondary};
          }

          ${Details} {
            color: ${theme.neutralTertiary};
          }
        `}
`

const Wrapper = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const ImageContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

const Flex = styled.div`
  margin-top: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Body = styled.div`
  flex: 1;
`

const Tags = styled.div`
  & > span {
    margin: 0.25em;
  }
`
