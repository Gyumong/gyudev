import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const HeaderBlock = styled.div`
  display: flex;
  padding: 1rem 3rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: space-between;
`
const StyledMainLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const StyledSubMenuBlock = styled.div`
  display: flex;
  align-items: center;
`

const StyledSubLink = styled(StyledMainLink)`
  color: rgb(180, 180, 180);
  &:first-of-type {
    margin-right: 1rem;
  }
  &:hover {
    color: rgb(90, 90, 90);
  }
`

export const Header = ({ title, social }) => {
  //   const isRoot = location.pathname === rootPath
  return (
    <HeaderBlock>
      <StyledMainLink to={`/`}>{title}</StyledMainLink>
      <StyledSubMenuBlock>
        <StyledSubLink to={social?.github} rel="noopener" target="_blank">
          Github
        </StyledSubLink>
        <StyledSubLink to={social?.tistory} rel="noopener" target="_blank">
          Tistory
        </StyledSubLink>
      </StyledSubMenuBlock>
    </HeaderBlock>
  )
}
