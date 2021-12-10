import React from 'react'
import { useDraggable } from '../lib/useDraggable'
import { Hover, HoverOut } from '../types'
import { Container } from './styles'

interface IDraggableItem {
  onDrop: (draggedComponent: HTMLDivElement, ...args: unknown[]) => void
  droppedClassName?: string
  handleClassName?: string
  dragHeight?: number
  onHover?: Hover
  onHoverOut?: HoverOut
}

export const Item: React.FC<IDraggableItem> = ({
  children,
  onDrop,
  handleClassName = '',
  droppedClassName = '',
  dragHeight = 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHover = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHoverOut = () => {},
}) => {
  const [refDraggable] = useDraggable({
    onDrop,
    handleClassName,
    dragHeight,
    onHover,
    onHoverOut,
  })

  return (
    <Container id="drag" data-dropped={droppedClassName} ref={refDraggable}>
      {children}
    </Container>
  )
}
