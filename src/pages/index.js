import React, { useMemo } from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import PostCard from "../components/PostCard"
import uniq from "lodash.uniq"

const IndexPage = ({ data }) => {
  const tags = useMemo(
    () => uniq(data?.allMdx?.nodes.map(node => node?.frontmatter?.tags)),
    []
  )

  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <PostCard data={node} key={node.id} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { tags: { ne: null } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY년 M월 D일")
          title
          coverAlt
          tags
        }
        id
        slug
        timeToRead
      }
    }
  }
`

export default IndexPage
