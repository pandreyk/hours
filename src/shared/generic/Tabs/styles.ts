import styled from '@emotion/styled'
import { colors } from '../themes'

export const StyledTab = styled.div`
  background-color: ${colors.secondaryLight};
  padding: 1rem 0 0;
  border: solid 1px ${colors.black};
  border-top: none;
`

export const TabsContainer = styled.div`
  background-color: ${colors.secondaryLight};
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`
