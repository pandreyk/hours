import React, { useState, useEffect } from 'react'
import { useMovable } from './Movable/useMovable'
import { movable } from './Movable/types'
import { Columns } from './Columns'
import { Header } from './Header'
import { Body } from './Body'
import { ITable } from './interfaces'
import { Holder, StyledTable } from './styles'

const Table = ({ children, height, ...rest }: ITable) => {
  const [scrollWidth, setScrollWidth] = useState<number>(0) //because of style {table-layout: fixed;}
  const [tableWidth, setTableWidth] = useState<number>(0)
  const [isHorizontalScroll, setIsHorizontalScroll] = useState<boolean>(false)
  const [isVerticalScroll, setIsVerticalScroll] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const onChange = (movable: movable) => {
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
      setIsVerticalScroll(component.scrollHeight > component.clientHeight)
    }
  }, [component, scrollWidth])

  return (
    <Holder
      ref={movableRef}
      height={height}
      isHorizontalScroll={isHorizontalScroll}
      isDragging={isDragging}
    >
      <StyledTable>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, { tableWidth, isVerticalScroll, ...rest }),
        )}
      </StyledTable>
    </Holder>
  )
}

Table.Columns = Columns
Table.Header = Header
Table.Body = Body

export { Table }
