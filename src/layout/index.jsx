import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from '../components/footer'
import { Header } from "../components/header"
import SEO from '../components/seo'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 24px;`;

const Container = styled.div`
  margin-top :8rem;
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
    <Wrapper>
    <SEO/>
      <Header
        title={data.site.siteMetadata.title}
        social={data.site.siteMetadata.social}
      />
      <Container>{children}</Container>
      <Footer/>
    </Wrapper>
  )
}
export default Layout
