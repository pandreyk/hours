import React from 'react'
import { Title } from 'generic/Title'
import { Container } from './styles'

interface UserInfoProps {
  name?: string
  role?: string
}

const UserInfo: React.FC<UserInfoProps> = ({ name, role }) => {
  return (
    <Container>
      <Title as="span" color="secondaryLight">
        {name}
      </Title>
      <Title as="span" color="secondary">
        {role}
      </Title>
    </Container>
  )
}

export default UserInfo
