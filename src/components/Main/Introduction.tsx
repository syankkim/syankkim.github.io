import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #e9d5ca 20%, #363062 100%);
  //   background-color: #4d4c7d;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 130px;
  margin: 100px auto;
`
const SubTitle = styled.div`
  margin: 90px 0 0 50px;
  font-size: 20px;
  font-weight: 400;
  color: #827397;
`
const Title = styled.div`
  margin: 5px 0 0 50px;
  font-size: 35px;
  font-weight: 700;
  color: #e9d5ca;
`
const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>Hello</SubTitle>
          <Title>Backend developer syankkim.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
