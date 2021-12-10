import React, { ReactNode } from 'react'
import { ITableColumns, ITableColumnsCol } from '../interfaces'
import { ColGroup, Col } from './styles'

const ColGroupComponent = ({ children, ...rest }: ITableColumns) => {
  return (
    <ColGroup>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, rest),
      )}
    </ColGroup>
  )
}

const ColComponent = ({
  style,
  minWidth,
  maxWidth,
  widthPercent,
  tableWidth,
  backgroundColor,
}: ITableColumnsCol) => {
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
