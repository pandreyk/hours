import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors } from '../../themes'

interface ITableBodyStyle {
  align?: string
  overflow?: string
  width?: string
  minWidth?: string
  title?: string
  isVerticalScroll?: boolean
}

export const Body = styled.tbody<ITableBodyStyle>``

export const Row = styled.tr<ITableBodyStyle>`
  border-top: solid 1px ${colors.primary};
  border-bottom: solid 1px ${colors.primary};

  ${({ isVerticalScroll }) =>
    isVerticalScroll &&
    css`
      :last-of-type {
        border: none;
      }
    `}}
`

export const Cell = styled.td<ITableBodyStyle>`
  padding: 0.7rem 1rem;
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

export const CellContainer = styled.div<ITableBodyStyle>`
  &,
  a {
    display: flex;
    overflow: ${({ overflow }) => overflow || 'auto'};
    align-items: center;
  }
`

export const CellSpan = styled.span<ITableBodyStyle>`
  white-space: nowrap;
  overflow: ${({ overflow }) => overflow || 'hidden'};
  text-overflow: ellipsis;
  cursor: default;
`
