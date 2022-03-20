import React from 'react'
import Navbar from 'containers/Navbar'
import { Container, Body, LeftSide, Content } from './styles'

const PageLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Body>
        <LeftSide>
          <Navbar />
        </LeftSide>
        <Content>{children}</Content>
      </Body>
    </Container>
  )
}

export default PageLayout
