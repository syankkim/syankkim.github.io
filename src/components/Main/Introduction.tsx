import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const Background = styled.div`
  width: 100%;
  //   background-image: linear-gradient(60deg, #e9d5ca 20%, #363062 100%);
  background-color: #707583;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 60px;
  margin: 150px auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    margin: 130px auto;
  }
`
const SubTitle = styled.div`
  margin: 30px 0 0 50px;
  font-size: 18px;
  font-weight: 600;
  color: #45362e;

  @media (max-width: 768px) {
    margin: 15px 0 0 20px;
    font-size: 15px;
    font-weight: 400;
    color: #f0e5de;
  }
`
const Title = styled.div`
  margin: 10px 0 0 50px;
  font-size: 35px;
  font-weight: 900;
  color: #f0e5de;
  border-bottom: solid 2px #f0e5de;

  @media (max-width: 768px) {
    margin: 10px 0 0 20px;
    font-size: 25px;
    color: #45362e;
    border-bottom: solid 2px #45362e;
  }
`
const Introduction: FunctionComponent = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <div>
          <SubTitle>
            <div>Perfection is achieved,</div>
            <div>not when there is nothing more to add,</div>
            <div>But when there is nothing left to take away.</div>
          </SubTitle>
          <Title>Backend developer syankkim.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
