import * as React from "react"
import styled from "@emotion/styled"
import Layout from "../layout"
import { Link, graphql } from "gatsby"
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const PostCard = styled.article`
  width: 100%;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        {data.allMdx.nodes.map(node => (
          <PostCard key={node.id}>
            <h2>
              <StyleLink to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </StyleLink>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </PostCard>
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
