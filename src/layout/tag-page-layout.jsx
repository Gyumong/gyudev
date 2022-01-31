import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "./index"
import styled from "@emotion/styled"
import palette from "../styles/palette"

const ListStyle = styled.ul`
    list-style: none;
    text-decoration: none;

`

const ListLinkStyle = styled(Link)`
text-decoration: none;
h1 {
    margin: 0;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.75rem;
    word-break: keep-all;
    transition: color 0.3s ease;
    color: ${palette.gray[9]};
  }
  &:hover h1 {
    color: ${palette.indigo[5]};
  }
`
const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const siteTitle = data.site.siteMetadata.title
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{tagHeader}</h1>
      <ListStyle>
        {edges.map(({ node }) => {
          const { slug } = node
          const { title } = node?.frontmatter
          return (
            <li key={slug}>
              <ListLinkStyle
                activeStyle={`${palette.indigo[6]}`}
                to={`/blog/${slug}`}
              >
                <h1>{title}</h1>
              </ListLinkStyle>
            </li>
          )
        })}
      </ListStyle>
      <ListLinkStyle to="/tags" activeStyle={`${palette.indigo[6]}`}>
        <h1>All tags</h1>
      </ListLinkStyle>
    </Layout>
  )
}

export default Tags

export const PageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          slug

          frontmatter {
            title
          }
        }
      }
    }
  }
`
