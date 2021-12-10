import { useState, useEffect } from 'react'
import { Draggable } from './Draggable'
import { Drop, Hover, HoverOut } from '../types'

type IConfig = {
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
}: IConfig) => {
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

  return [setViewport, viewport]
}
