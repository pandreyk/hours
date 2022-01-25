import React, { ReactElement, PropsWithChildren } from 'react'
import { TableColumns, TableColumnsCol } from '../types'
import { ColGroup, Col } from './styles'

const ColGroupComponent = ({ children, ...rest }: TableColumns) => {
  return (
    <ColGroup>
      {React.Children.map(children, (child) =>
        React.cloneElement(
          child as ReactElement<PropsWithChildren<TableColumnsCol>>,
          rest,
        ),
      )}
    </ColGroup>
  )
}

const ColComponent = ({
  minWidth,
  maxWidth,
  widthPercent,
  tableWidth,
  backgroundColor,
  style,
}: TableColumnsCol) => {
  const width =
    widthPercent && tableWidth
      ? (widthPercent / 101) * tableWidth + 'px' // 101 - 100 its 100%, 1 its borders, paddings, margins, etc
      : undefined

  return (
    <Col
      style={style}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
    />
  )
}

ColGroupComponent.Col = ColComponent

export { ColGroupComponent as Columns }
