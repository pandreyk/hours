import styled from '@emotion/styled'
import { colors } from 'generic/themes'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Columns = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  background-color: tan;
`

export const PepegaColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 1rem 0.5rem;

  background-color: ${colors.white};
  border: solid 1px ${colors.primaryLight};
  border-radius: 0.5rem;
`

export const PepagaItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 60px;
  z-index: 1;
  background-color: darkcyan;
  border: solid 1px black;
`
