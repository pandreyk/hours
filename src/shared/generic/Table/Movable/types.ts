import React from 'react'

export type movable = {
  node: { scrollWidth: React.SetStateAction<number> }
  isDown: boolean
  position: {
    startY: number
    startX: number
    scrollLeft: number
    scrollTop: number
  }
}
