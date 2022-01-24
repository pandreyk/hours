import React from 'react'

export type MovableType = {
  node: { scrollWidth: React.SetStateAction<number> }
  isDown: boolean
  position: {
    startY: number
    startX: number
    scrollLeft: number
    scrollTop: number
  }
}
