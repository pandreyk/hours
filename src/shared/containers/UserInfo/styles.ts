import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 6rem;

  > div {
    display: flex;
    max-width: 12rem;
    justify-content: center;
  }

  > div:first-of-type {
    span {
      font-size: 18px;
    }
  }

  > div:last-of-type {
    span {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
`
