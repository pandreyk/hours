import styled from '@emotion/styled'

interface TableBodyStyle {
  width?: string
  minWidth?: string
  maxWidth?: string
  backgroundColor?: string
}

export const ColGroup = styled.colgroup``

export const Col = styled.col<TableBodyStyle>`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  background-color: ${({ backgroundColor }) => backgroundColor};
`
