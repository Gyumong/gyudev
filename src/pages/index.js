import * as React from "react"

import Layout from "../layout"
import { graphql } from "gatsby"
import PostCard from "../components/PostCard"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(node => (
        <PostCard data={node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY년 M월 D일")
          title
          coverAlt
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
