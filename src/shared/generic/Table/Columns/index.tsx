import React, { ReactElement, PropsWithChildren } from 'react'
import { TableColumns, TableColumnsCol } from '../types'
import { ColGroup, Col } from './styles'

const ColGroupComponent = ({ children, ...rest }: TableColumns) => {
  return (
    <ColGroup>
      {React.Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<TableColumnsCol>>
        return React.cloneElement(item, rest)
      })}
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
      ? (widthPercent / 100) * tableWidth + 'px'
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
