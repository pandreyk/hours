import React, { FC, ForwardedRef, forwardRef } from 'react'
import { Container, InputField } from './styles'

export interface IInput {
  ref?: ForwardedRef<HTMLInputElement>
  value: string
  placeholder?: string
}

export const Input: FC<IInput> = forwardRef(
  ({ placeholder, value, ...rest }, ref) => {
    return (
      <Container>
        <InputField
          ref={ref}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
      </Container>
    )
  },
)
