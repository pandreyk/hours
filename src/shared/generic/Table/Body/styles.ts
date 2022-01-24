import styled from '@emotion/styled'
import { colors } from '../../themes'

interface TableBodyStyle {
  align?: string
  overflow?: string
  width?: string
  minWidth?: string
  title?: string
  isVerticalScroll?: boolean
}

export const Body = styled.tbody``

export const Row = styled.tr<TableBodyStyle>`
  box-shadow: inset 0 -1px 0 ${colors.primary}; // its border
`

export const Cell = styled.td<TableBodyStyle>`
  padding: 0.7rem 1rem;
  position: relative;
  border-left: solid 1px ${colors.primary};
  border-right: solid 1px ${colors.primary};
  outline: none;
  white-space: nowrap;
  font-size: 1.1rem;
  color: ${colors.black};
  text-decoration: none;
  text-align: start;
  line-height: 1.5rem;
  font-weight: lighter;

  :first-of-type,
  :last-of-type {
    border: none;
  }

  & > button {
    margin: 0;
  }
`

export const CellContainer = styled.div<TableBodyStyle>`
  &,
  a {
    display: flex;
    overflow: ${({ overflow }) => overflow || 'auto'};
    align-items: center;
    justify-content: ${({ align }) => align || 'normal'};
  }
`

export const CellSpan = styled.span<TableBodyStyle>`
  white-space: nowrap;
  overflow: ${({ overflow }) => overflow || 'hidden'};
  text-overflow: ellipsis;
  cursor: default;
`
