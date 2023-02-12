import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

// FunctionComponent: 리액트에서의 기본 함수형 컴포넌트 타입
const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Link to="/info/">To Info</Link>
    </div>
  )
}

export default IndexPage
