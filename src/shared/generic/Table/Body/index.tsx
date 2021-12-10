import React, { ReactNode } from 'react'
import { Row, Body, Cell, CellContainer, CellSpan } from './styles'
import { ITableBody, ITableBodyCell, ITableBodyRow } from '../interfaces'

const BodyComponent = ({ children, ...rest }: ITableBody) => {
  return (
    <Body>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, rest),
      )}
    </Body>
  )
}

const RowComponent = ({ children, style, ...rest }: ITableBodyRow) => {
  return (
    <Row style={style} {...rest}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, rest),
      )}
    </Row>
  )
}

const CellComponent = ({
  children,
  style,
  overflow,
  ...rest
}: ITableBodyCell) => {
  return (
    <Cell style={style} {...rest}>
      <CellContainer overflow={overflow}>
        <CellSpan
          overflow={overflow}
          title={typeof children === 'string' ? children : ''}
        >
          {children}
        </CellSpan>
      </CellContainer>
    </Cell>
  )
}

BodyComponent.Row = RowComponent
BodyComponent.Cell = CellComponent

export { BodyComponent as Body }
