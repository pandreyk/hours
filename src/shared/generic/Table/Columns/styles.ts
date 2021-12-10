import styled from '@emotion/styled'

interface ITableBodyStyle {
  width?: string
  minWidth?: string
  maxWidth?: string
  backgroundColor?: string
}

export const ColGroup = styled.colgroup<ITableBodyStyle>``

export const Col = styled.col<ITableBodyStyle>`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};
`
