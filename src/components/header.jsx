import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 42px;
  height: 60px;
  z-index: 1000;
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  align-items: center;
  justify-content: space-between;
  background-color: hsla(0, 0%, 100%, 0.8);
  backdrop-filter: blur(8px);

  @media screen and (max-width: 720px) {
    padding: 0 24px;
  }
`
const StyledMainLink = styled(Link)`
  font-weight: 700 ;
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
