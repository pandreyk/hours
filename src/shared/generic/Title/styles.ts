import styled from '@emotion/styled'
import { Color, colors } from '../themes'

interface ITitleStyle {
  color?: Color
  upperCase?: boolean
}

export const Container = styled.div`
  overflow: auto;
  display: flex;
`

export const Heading = styled.span<ITitleStyle>`
  color: ${({ color }) => colors[color || 'black']};
  text-transform: ${({ upperCase }) => (upperCase ? 'uppercase' : 'normal')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
