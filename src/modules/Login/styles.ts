import styled from '@emotion/styled'

const DivAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  //display: flex;
  //justify-content: center;
  //align-items: center;
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  > * {
    margin: 1rem 0;
  }
`

export const BackgroundTop = styled(DivAbsolute)``

export const BackgroundBottom = styled(DivAbsolute)``

export const LogoWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;

  > img {
    width: 7rem;
  }
`

export const Content = styled(DivAbsolute)`
  display: flex;
  justify-content: center;
  align-items: center;
`
