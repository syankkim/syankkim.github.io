import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK =
  'https://user-images.githubusercontent.com/28856435/218304344-0f1ab181-9d8b-4774-a01b-d22958637c5f.png'

const ProfileImageWrapper = styled.img`
  width: 270px;
  height: 270px;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 3px dotted #707583;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
