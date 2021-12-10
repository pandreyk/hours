import styled from '@emotion/styled'
import { colors } from 'generic/themes'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 15rem;
  max-width: 20rem;
  height: 100%;
  background-color: ${colors.primary};
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`
