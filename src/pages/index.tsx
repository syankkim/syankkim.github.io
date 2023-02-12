import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Footer from 'components/Common/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

// FunctionComponent: 리액트에서의 기본 함수형 컴포넌트 타입
const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
}

export default IndexPage
