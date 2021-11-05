import React, { ReactNode } from 'react'
import { StyledButton } from './styles'

interface IButton {
  children: string | ReactNode;
  inverted?: boolean;
}

export const Button: React.FC<IButton> = ({ children, inverted }) => {
  return <StyledButton inverted={inverted}>{children}</StyledButton>
}
