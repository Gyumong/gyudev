import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from '../components/footer'
import { Header } from "../components/header"
import SEO from '../components/seo'
const Container = styled.ul`
  margin: 2.5rem auto;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  padding-top: 3rem;
`

const Layout = ({ children }) => {
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
    <SEO/>
      <Header
        title={data.site.siteMetadata.title}
        social={data.site.siteMetadata.social}
      />
      <Container>{children}</Container>
      <Footer/>
    </>
  )
}
export default Layout
