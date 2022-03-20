import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '../themes'

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`

export const InputField = styled.input`
  outline: none;
  padding: 0.4rem 0.2rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-family: Roboto-Medium, sans-serif;
  border: 1px solid ${colors.primary};
  background-color: transparent;

  &:disabled,
  &:disabled + span {
    opacity: 0.7;
  }
`

interface ILabel {
  disabled?: boolean
}

export const Label = styled.label<ILabel>`
  color: ${colors.black};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `}
`

export const ErrorMessage = styled.span`
  color: ${colors.error};
  font-size: 0.8rem;
`
