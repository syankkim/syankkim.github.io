import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

const ProfileImageWrapper = styled(GatsbyImage)`
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

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
