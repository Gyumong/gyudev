import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./index"
import Utterances from "../components/Utterances"
import styled from "@emotion/styled"
import kebabCase from "lodash.kebabcase"
import palette from "../styles/palette"

const PostTitle = styled.h1`
  margin: 0;
`
const PostDate = styled.p`
  margin: 0;
  margin-top: 0.7rem;
  color: ${palette.gray[6]};
  font-size: 0.8rem;
  line-height: 1.6;
`

const ReadMore = styled(PostDate)``

const Tags = styled.div`
  ul {
    margin-top: 0.7rem;
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;

    li {
      display: inline-block;
      margin-right: 1rem;
      text-align: center;
      a {
        display: block;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        text-decoration: none;
        color: black;
        font-size: 0.85rem;
        border-width: 4px;
        border-radius: 0.8rem;
        border: 1px solid ${palette.gray[4]};

        &:hover {
          background-color: ${palette.gray[7]};
          color: ${palette.gray[1]};
          border-color: ${palette.gray[1]};
        }
      }
    }
  }
`

const shortcodes = { Link } // Provide common components here
export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <PostTitle>{mdx.frontmatter.title}</PostTitle>
      <PostDate>{mdx.frontmatter.date}</PostDate>
      <ReadMore>읽는데 {mdx?.timeToRead}분...!</ReadMore>
      <Tags>
        <ul>
          {mdx.frontmatter.tags
            ? mdx.frontmatter.tags.map(tag => (
                <li key={kebabCase(tag)}>
                  <Link to={`/tags/${kebabCase(tag)}`}>{kebabCase(tag)}</Link>
                </li>
              ))
            : null}
        </ul>
      </Tags>

      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Utterances repo="Gyumong/gyudev" theme="github-light" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일")
        tags
      }
      body
    }
  }
`
