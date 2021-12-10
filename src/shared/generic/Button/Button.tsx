import React from 'react'
import { StyledButton } from './styles'
import { Color } from '../themes'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: Color
  color?: Color
}

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}
