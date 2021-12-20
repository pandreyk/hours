import styled from '@emotion/styled'
import { colors } from 'generic/themes'

interface ITableStyle {
  height?: string
  isHorizontalScroll?: boolean
  isDragging?: boolean
}

export const Holder = styled.div<ITableStyle>`
  overflow-x: auto;
  cursor: ${({ isHorizontalScroll, isDragging }) =>
    !isHorizontalScroll ? 'default' : isDragging ? 'grabbing' : 'grab'};
  background-color: ${colors.secondaryLight};
  border: solid 1px ${colors.primary};
  height: ${({ height }) => height};
`

export const StyledTable = styled.table<ITableStyle>`
  border-collapse: collapse;
  white-space: nowrap;
  width: 100%;
  table-layout: fixed;

  a {
    text-decoration: none;
  }
`
