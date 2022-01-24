import React, { useState, useEffect, ReactElement } from 'react'
import { Body } from './Body'
import { Columns } from './Columns'
import { Header } from './Header'
import { MovableType } from './Movable/types'
import { useMovable } from './Movable/useMovable'
import { Table as TableProps } from './types'
import { Holder, StyledTable } from './styles'

const Table = ({ children, height, ...rest }: TableProps) => {
  const [scrollWidth, setScrollWidth] = useState<number>(0) //because of style {table-layout: fixed;}
  const [tableWidth, setTableWidth] = useState<number>(0)
  const [isHorizontalScroll, setIsHorizontalScroll] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const onChange = (movable: MovableType) => {
    if (movable) {
      setIsDragging(movable.isDown)
      setScrollWidth(movable.node.scrollWidth)
    }
  }

  const [movableRef, component] = useMovable(onChange)

  useEffect(() => {
    if (component) {
      setTableWidth(component.offsetWidth)
      setIsHorizontalScroll(component.scrollWidth > component.clientWidth)
    }
  }, [component, scrollWidth])

  return (
    <Holder
      ref={movableRef}
      height={height}
      isHorizontalScroll={isHorizontalScroll}
      isDragging={isDragging}
    >
      <StyledTable height={height}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child as ReactElement, {
            tableWidth,
            ...rest,
          }),
        )}
      </StyledTable>
    </Holder>
  )
}

Table.Columns = Columns
Table.Header = Header
Table.Body = Body

export { Table }
