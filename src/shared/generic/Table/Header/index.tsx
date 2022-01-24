import React, { ReactElement, PropsWithChildren } from 'react'
import TriangularArrow from '../TriangularArrow.svg'
import { TableHeader, TableHeaderCell } from '../types'
import {
  Cell,
  StyledHeader,
  Row,
  IconsContainer,
  CellContainer,
  CellSpan,
  IconWrapper,
} from './styles'

const Header = ({ children, ...rest }: TableHeader) => {
  return (
    <StyledHeader {...rest}>
      <Row>
        {React.Children.map(children, (child) =>
          React.cloneElement(
            child as ReactElement<PropsWithChildren<TableHeaderCell>>,
            rest,
          ),
        )}
      </Row>
    </StyledHeader>
  )
}

const CellComponent = ({
  children,
  changeSort,
  fieldName,
  orderType,
  sortedBy,
  align,
}: TableHeaderCell) => {
  const isDesc = orderType === 'desc' && fieldName === sortedBy
  const isAsc = orderType === 'asc' && fieldName === sortedBy

  return (
    <Cell>
      <CellContainer align={align}>
        {children}
        {fieldName && (
          <IconsContainer onClick={() => changeSort && changeSort(fieldName)}>
            <IconWrapper active={isDesc}>
              <img src={TriangularArrow} alt="" />
            </IconWrapper>
            <IconWrapper active={isAsc}>
              <img src={TriangularArrow} alt="" />
            </IconWrapper>
          </IconsContainer>
        )}
      </CellContainer>
    </Cell>
  )
}

Header.Cell = CellComponent

export { Header }
