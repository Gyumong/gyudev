import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import palette from "../styles/palette"
const TitleLink = styled(Link)`
  margin: 0;
  font-size: 2.375rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0.75rem;
  word-break: keep-all;
  text-decoration: none;
  transition: color 0.3s ease;
  color: ${palette.gray[9]};
  &:hover {
    color: ${palette.indigo[5]};
  }
`
const PostCardBlock = styled.li`
  width: 100%;
  list-style: none;
`

const Date = styled.p`
  color: ${palette.gray[6]};
`

const PostCard = ({ data }) => {
  return (
    <PostCardBlock key={data.id}>
      <TitleLink to={`/blog/${data.slug}`} activeStyle={`${palette.indigo[6]}`}>
        {data.frontmatter.title}
      </TitleLink>

      <Date>{data.frontmatter.date}</Date>
    </PostCardBlock>
  )
}

export default PostCard
