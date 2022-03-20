import { useState, useEffect } from 'react'
import { Drop, Hover, HoverOut } from '../types'
import { Draggable } from './Draggable'

interface Config {
  onDrop: Drop
  handleClassName: string
  dragHeight: number
  onHover: Hover
  onHoverOut: HoverOut
}

export const useDraggable = ({
  onDrop,
  handleClassName,
  dragHeight,
  onHover,
  onHoverOut,
}: Config) => {
  const [viewport, setViewport] = useState<any>(null) //тут не знаю какой тип, уродский тс

  useEffect(() => {
    if (viewport) {
      const obj = new Draggable({
        root: viewport,
        onDrop,
        handleClassName,
        dragHeight,
        onHover,
        onHoverOut,
      })

      return () => obj.destroy()
    }
  }, [viewport])

  return [setViewport]
}
