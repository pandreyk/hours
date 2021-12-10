import styled from '@emotion/styled'
import { colors } from 'generic/themes'

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ isActive }) =>
    isActive ? colors.secondaryLight : 'transparent'};
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.black};
  padding: 0.2rem 3rem;

  transition: all 0.3s;
`

export const Icon = styled.span`
  display: flex;
  justify-content: center;
  width: 1.5rem;
`

export const Label = styled.span<ContainerProps>`
  color: ${({ isActive }) => (isActive ? colors.black : colors.secondaryLight)};
  font-family: Roboto-Medium, 'Arial', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-left: 1rem;
`
