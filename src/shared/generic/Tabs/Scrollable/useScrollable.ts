import { useState, useEffect } from 'react'
import { Scrollable } from './Scrollable'
import { ScrollableType } from './types'

export const useScrollable = (onChange: (e: ScrollableType) => void) => {
  const [viewport, setViewport] = useState<any>(null) //тут не знаю какой тип, уродский тс

  useEffect(() => {
    if (viewport) {
      const obj = new Scrollable(viewport, onChange)

      return () => obj.destroy()
    }
  }, [viewport])

  return [setViewport, viewport]
}
