import styled from '@emotion/styled'

export const Container = styled.div``

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  > div:first-of-type > span {
    font-size: 20px;
  }

  > * {
    margin: 1rem 0;
  }
`

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
