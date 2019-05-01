import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import A from "components/Link"
import Tag from "components/Tag"

import { kebabCase } from "utils/string"
import { media, serifFont } from "utils/mixins"

const PostDetails = ({ title, date, link, description, tags }) => (
  <PostRow>
    <DateCell>
      <Tag noBackground textMuted mRight="1rem" noPadding>
        {date}
      </Tag>
    </DateCell>

    <td>
      <Title>
        <A to={link}>{title}</A>
      </Title>
      <Description>
        <small
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Description>

      {tags && tags.length && (
        <Tags>
          {tags.map(tag => (
            <A key={tag} to={`/tags/${kebabCase(tag)}`}>
              <Tag textMuted mRight="0.5rem">
                {tag}
              </Tag>
            </A>
          ))}
        </Tags>
      )}
    </td>
  </PostRow>
)

PostDetails.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default PostDetails

const PostRow = styled.tr`
  td {
    display: block;

    ${media.sm`
      display: table-cell;
      padding: 0.5rem 0;
    `}
  }

  td + td {
    padding-bottom: 1.5em;

    ${media.sm`
      padding-bottom: 0.5rem;
    `}
  }
`

const Title = styled.span`
  ${serifFont};
  font-size: 19px;
  font-weight: bold;
  display: inline-block;
`

const Description = styled.div`
  ${serifFont};
  font-size: 17px;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.neutralPrimaryAlt};
`

const Tags = styled.div`
  a:hover {
    text-decoration: none;
  }
`

const DateCell = styled.td`
  vertical-align: top;

  ${media.sm`
    text-align: right;
  `}
`
