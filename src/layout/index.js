import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Header } from "../components/header"
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      {children}
    </>
  )
}
export default Layout
