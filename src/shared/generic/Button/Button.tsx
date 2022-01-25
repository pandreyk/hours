import React from 'react'
import { Color } from '../themes'
import { StyledButton } from './styles'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: Color
  color?: Color
}

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}
