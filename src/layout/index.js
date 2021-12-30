import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Header } from "../components/header"
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
      {children}
    </>
  )
}
export default Layout
