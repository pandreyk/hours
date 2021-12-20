import styled from '@emotion/styled'
import { colors } from 'generic/themes'

interface ITableHeaderStyle {
  headerSticky?: boolean
  pointer?: boolean
  active?: boolean
}

export const StyledHeader = styled.thead<ITableHeaderStyle>`
  padding: 0.375rem 1rem;
  background-color: ${colors.secondaryLight};
  position: sticky;
  top: 0;
  z-index: 2;

  box-shadow: inset 0 -1px 0 ${colors.primary}; // its border
`

export const Row = styled.tr<ITableHeaderStyle>``

export const Cell = styled.td<ITableHeaderStyle>`
  padding: 0.375rem 1rem;
  border-left: 1px solid ${colors.primary};
  border-right: 1px solid ${colors.primary};
  outline: none;
  white-space: nowrap;
  font-size: 1rem;
  text-align: ${({ align }) => align || 'start'};
  color: ${colors.black};
  text-decoration: none;
  line-height: 1.5rem;
  font-weight: lighter;
  :first-of-type {
    border-left: none;
  }

  :last-of-type {
    border-right: none;
  }
`

export const CellContainer = styled.div<ITableHeaderStyle>`
  display: flex;
  justify-content: space-between;
`

export const CellSpan = styled.span<ITableHeaderStyle>`
  display: inline-flex;
  align-items: center;
  margin: 0 1.6rem 0 0;
  cursor: default;
`

export const IconsContainer = styled.div<ITableHeaderStyle>`
  display: flex;
  flex-direction: column;
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
`

export const IconWrapper = styled.div<ITableHeaderStyle>`
  display: flex;
  opacity: ${({ active }) => (active ? '1' : '0.5')};

  > img {
    width: 12px;
    height: 12px;
  }

  :first-of-type {
    margin: 0 0 0.15rem 0.5rem;
    > img {
      transform: rotate(-90deg);
    }
  }

  :last-of-type {
    align-self: flex-start;
    > img {
      transform: rotate(90deg);
    }
  }
`
