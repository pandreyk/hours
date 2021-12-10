import styled from '@emotion/styled'
import { colors } from '../themes'

export const Container = styled.div`
  display: inline-flex;
  letter-spacing: 1px;
  flex-direction: column;
  position: relative;
`

export const InputField = styled.input`
  outline: none;
  padding: 0.4rem 0.2rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-family: Roboto-Medium, sans-serif;
  border: 1px solid ${colors.primary};
  background-color: transparent;
`

export const Label = styled.label`
  color: ${colors.black};
`
