import styled from '@emotion/styled'
import { colors } from '../../themes'

export const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  transition: all 0.5s ease;
  background-color: ${colors.secondaryLight};
`
