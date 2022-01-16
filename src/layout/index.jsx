import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Header } from "../components/header"
import styled from "@emotion/styled"

const Container = styled.ul`
  margin: 3rem auto;
  max-width: 34.5rem;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  padding-top: 3rem;
`

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            github
            tistory
          }
        }
      }
    }
  `)
  return (
    <>
      <Header
        title={data.site.siteMetadata.title}
        social={data.site.siteMetadata.social}
      />
      <Container>{children}</Container>
    </>
  )
}
export default Layout
