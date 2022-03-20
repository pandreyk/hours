import React, { forwardRef, ForwardedRef, InputHTMLAttributes } from 'react'
import { Container, ErrorMessage, InputField, Label } from './styles'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: ForwardedRef<HTMLInputElement>
  touched?: boolean
  error?: boolean
  label?: string
}

export const Input: React.FC<IInput> = forwardRef(
  ({ touched, error, label, name, disabled, ...rest }, ref) => {
    return (
      <Container>
        <Label htmlFor={name} disabled={disabled}>
          {label}
        </Label>
        <InputField ref={ref} disabled={disabled} id={name} {...rest} />
        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    )
  },
)
