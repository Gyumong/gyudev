import * as React from "react"
import styled from "@emotion/styled"
import Layout from "../layout"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <div>반갑 ㅋ</div>
      </Container>
    </Layout>
  )
}

export default IndexPage
