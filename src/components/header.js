import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const HeaderBlock = styled.h1`
  margin-top: 0;
  border-bottom: none;
  font-weight: 900;
  font-size: 48px;
  letter-spacing: -2px;
`
const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

export const Header = ({ title }) => {
  //   const isRoot = location.pathname === rootPath
  return (
    <HeaderBlock>
      <StyledLink to={`/`}>{title}</StyledLink>
    </HeaderBlock>
  )
}
