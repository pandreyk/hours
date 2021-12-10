import React, { CSSProperties, ElementType, ReactNode } from 'react'
import { Color } from '../themes'
import { Container, Heading } from './styles'

export interface ITitle {
  children: ReactNode
  as?: ElementType
  style?: CSSProperties
  color?: Color
  upperCase?: boolean
}

export const Title: React.FC<ITitle> = ({
  children,
  as,
  style,
  color,
  upperCase,
}) => {
  return (
    <Container style={style}>
      <Heading as={as} color={color} upperCase={upperCase}>
        {children}
      </Heading>
    </Container>
  )
}
