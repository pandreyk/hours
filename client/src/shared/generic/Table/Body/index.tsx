import React, { ReactElement, PropsWithChildren } from 'react'
import { TableBody, TableBodyCell, TableBodyRow } from '../types'
import { Row, Body, Cell, CellContainer, CellSpan } from './styles'

const BodyComponent = ({ children, ...rest }: TableBody) => {
  return (
    <Body>
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child as ReactElement<PropsWithChildren<TableBodyRow>>,
          rest,
        ),
      )}
    </Body>
  )
}

const RowComponent = ({ children, style, ...rest }: TableBodyRow) => {
  return (
    <Row style={style}>
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child as ReactElement<PropsWithChildren<TableBodyCell>>,
          rest,
        ),
      )}
    </Row>
  )
}

const CellComponent = ({ children, align, style, overflow }: TableBodyCell) => {
  return (
    <Cell style={style}>
      <CellContainer align={align} overflow={overflow}>
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
