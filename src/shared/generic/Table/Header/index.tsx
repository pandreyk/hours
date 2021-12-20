import React from 'react'
import { ITableHeader, ITableHeaderCell } from '../interfaces'
import TriangularArrow from '../TriangularArrow.svg'
import {
  Cell,
  StyledHeader,
  Row,
  IconsContainer,
  CellContainer,
  CellSpan,
  IconWrapper,
} from './styles'

const Header = ({ children, changeSort, ...rest }: ITableHeader) => {
  return (
    <StyledHeader onClick={changeSort} {...rest}>
      <Row>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, rest),
        )}
      </Row>
    </StyledHeader>
  )
}

const CellComponent = ({
  children,
  fieldName,
  orderType,
  sortedBy,
}: ITableHeaderCell) => {
  const isDesc = orderType === 'desc' && fieldName === sortedBy
  const isAsc = orderType === 'asc' && fieldName === sortedBy

  return (
    <Cell>
      <CellContainer>
        <CellSpan>{children}</CellSpan>
        {fieldName && (
          <IconsContainer
            pointer={Boolean(fieldName)}
            data-fieldname={fieldName}
          >
            <IconWrapper active={isDesc}>
              <img src={TriangularArrow} data-fieldname={fieldName} alt="" />
            </IconWrapper>
            <IconWrapper active={isAsc}>
              <img src={TriangularArrow} data-fieldname={fieldName} alt="" />
            </IconWrapper>
          </IconsContainer>
        )}
      </CellContainer>
    </Cell>
  )
}

Header.Cell = CellComponent

export { Header }
