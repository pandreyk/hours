import React from 'react'
import { useDraggable } from '../lib/useDraggable'
import { Drop, Hover, HoverOut } from '../types'
import { Container } from './styles'

interface DraggableItem {
  onDrop: Drop
  droppedClassName?: string
  handleClassName?: string
  dragHeight?: number
  onHover?: Hover
  onHoverOut?: HoverOut
  style?: React.CSSProperties
}

export const Item: React.FC<DraggableItem> = ({
  children,
  onDrop,
  handleClassName = '',
  dragHeight = 0,
  onHover = () => {},
  onHoverOut = () => {},
  style,
}) => {
  const [refDraggable] = useDraggable({
    onDrop,
    handleClassName,
    dragHeight,
    onHover,
    onHoverOut,
  })

  return (
    <Container id="drag" style={style} ref={refDraggable}>
      {children}
    </Container>
  )
}
