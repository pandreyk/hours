import styled from '@emotion/styled'
import { colors } from '../themes'

interface ITableStyle {
  height?: string
  isHorizontalScroll?: boolean
  isDragging?: boolean
}

export const Holder = styled.div<ITableStyle>`
  overflow: auto;
  cursor: ${({ isHorizontalScroll, isDragging }) =>
    !isHorizontalScroll ? 'default' : isDragging ? 'grabbing' : 'grab'};
  background-color: ${colors.secondaryLight};
  border: solid 1px ${colors.primary};
  border-bottom: none;
  box-shadow: inset 0 -1px 0 ${colors.primary}; // its border bottom;
  height: ${({ height }) => height || '100%'};
  min-height: 120px;
  transition: all 0.4s;
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
