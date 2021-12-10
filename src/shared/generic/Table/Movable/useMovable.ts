import { useState, useEffect } from 'react'
import { Movable } from './Movable'
import { movable } from './types'

export const useMovable = (onChange: (e: movable) => void) => {
  const [viewport, setViewport] = useState<any>(null) //тут не знаю какой тип, уродский тс

  useEffect(() => {
    if (viewport) {
      const obj = new Movable(viewport, onChange)

      return () => obj.destroy()
    }
  }, [viewport])

  return [setViewport, viewport]
}
