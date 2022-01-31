import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import palette from "../styles/palette"
const TitleLink = styled(Link)`
  text-decoration: none;
  h1 {
    margin: 0;
    font-size: 2.375rem;
    font-weight: 700;
    line-height: 1.4;
    word-break: keep-all;
    transition: color 0.3s ease;
    color: ${palette.gray[9]};
  }
  &:hover h1 {
    color: ${palette.indigo[5]};
  }
`
const PostCardBlock = styled.li`
  width: 100%;
  list-style: none;
  margin-bottom: 5rem;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`
const StyledCoverAlt = styled.p`
  line-height: 1.6;
  color: ${palette.gray[7]};
  margin-bottom: 1.25rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`

const Date = styled.p`
  color: ${palette.gray[6]};
`

const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const ReadMore = styled.p`
  color: ${palette.gray[6]};
`;

const PostCard = ({ data }) => {
  return (
    <PostCardBlock key={data.id}>
      <TitleLink to={`/blog/${data.slug}`} activeStyle={`${palette.indigo[6]}`}>
        <HeadLine>
        <h1>{data.frontmatter.title}</h1>
        <ReadMore>{data.timeToRead}min</ReadMore>
        </HeadLine>
        <StyledCoverAlt>{data.frontmatter.coverAlt}</StyledCoverAlt>
        <Date>{data.frontmatter.date}</Date>
      </TitleLink>
    </PostCardBlock>
  )
}

export default PostCard
