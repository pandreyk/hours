import styled from '@emotion/styled'
import { colors } from 'generic/themes'

export const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  transition: background-color 0.5s ease;
  background-color: ${colors.secondaryLight};
`
