import styled from '@emotion/styled'
import { colors } from '../../themes'

interface TableHeaderStyle {
  headerSticky?: boolean
  pointer?: boolean
  active?: boolean
  align?: string
}

export const StyledHeader = styled.thead`
  padding: 0.375rem 1rem;
  background-color: ${colors.secondaryLight};
  position: sticky;
  top: 0;
  box-shadow: inset 0 -1px 0 ${colors.primary}; // its border
  z-index: 2;
`

export const Row = styled.tr``

export const Cell = styled.td<TableHeaderStyle>`
  padding: 0.375rem 0.6rem;
  border-left: 1px solid ${colors.primary};
  border-right: 1px solid ${colors.primary};
  outline: none;
  white-space: nowrap;
  font-family: GFSNeohellenic, sans-serif;
  font-size: 1.2rem;
  letter-spacing: 2px;
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

export const CellContainer = styled.div<TableHeaderStyle>`
  display: flex;
  justify-content: ${({ align }) => align || 'space-between'};
`

export const CellSpan = styled.span`
  display: inline-flex;
  align-items: center;
  cursor: default;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const IconWrapper = styled.div<TableHeaderStyle>`
  display: flex;
  opacity: ${({ active }) => (active ? '1' : '0.5')};

  > img {
    width: 12px;
    height: 12px;
  }

  :first-of-type {
    margin-bottom: 2px;
    align-self: flex-start;
    > img {
      transform: rotate(-90deg);
    }
  }

  :last-of-type {
    // align-self: flex-start;
    > img {
      transform: rotate(90deg);
    }
  }
`
