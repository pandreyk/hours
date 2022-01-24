import styled from '@emotion/styled'
import { colors } from '../themes'

export const TabsContainer = styled.div`
  background-color: ${colors.secondaryLight};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`

export const StyledTab = styled.div`
  display: block;
  background-color: ${colors.secondaryLight};
  padding: 2rem 0 0;
  height: 100%;
  border: solid 1px ${colors.black};
  border-top: none;
`
