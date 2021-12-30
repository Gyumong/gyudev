import * as React from "react"
import styled from "@emotion/styled"
import Layout from "../layout"
import { graphql } from "gatsby"
import PostCard from "../components/PostCard"
const Container = styled.ul`
  margin: 3rem auto;
  width: 34.5rem;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        {data.allMdx.nodes.map(node => (
          <PostCard data={node} />
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default IndexPage
