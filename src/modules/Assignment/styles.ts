import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  height: 65vh;
`

export const PepegaColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 1rem;
  background-color: blue;
`

export const PepagaItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 60px;
  z-index: 1;
  margin: 1rem 0;
  background-color: darkcyan;
  border: solid 1px black;
`
