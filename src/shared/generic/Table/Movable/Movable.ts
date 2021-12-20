import { movable } from './types'

export class Movable {
  private readonly node: HTMLDivElement
  private readonly onChange: (movable: movable) => void

  private isDown: boolean
  private position: {
    startY: number
    startX: number
    scrollLeft: number
    scrollTop: number
  }

  private readonly onMouseDownEvent: OmitThisParameter<(e: MouseEvent) => void>
  private readonly onMouseUpEvent: OmitThisParameter<() => void>
  private readonly onMouseMoveEvent: OmitThisParameter<(e: MouseEvent) => void>

  constructor(
    sliderRoot: HTMLDivElement,
    onChange: (movable: movable) => void,
  ) {
    this.node = sliderRoot
    this.onChange = onChange

    this.isDown = false
    this.position = { startX: 0, scrollLeft: 0, startY: 0, scrollTop: 0 }

    this.onMouseDownEvent = this.onMouseDown.bind(this)
    this.onMouseUpEvent = this.onMouseUp.bind(this)
    this.onMouseMoveEvent = this.onMouseMove.bind(this)

    sliderRoot.addEventListener('mousedown', this.onMouseDownEvent)
    sliderRoot.addEventListener('mouseleave', this.onMouseUpEvent)
    sliderRoot.addEventListener('mouseup', this.onMouseUpEvent)
    sliderRoot.addEventListener('mousemove', this.onMouseMoveEvent)
  }

  destroy() {
    this.node.removeEventListener('mousedown', this.onMouseDownEvent)
    this.node.removeEventListener('mouseleave', this.onMouseUpEvent)
    this.node.removeEventListener('mouseup', this.onMouseUpEvent)
    this.node.removeEventListener('mousemove', this.onMouseMoveEvent)
  }

  onMouseDown(e: MouseEvent) {
    const target = e.target as HTMLElement

    if (target?.nodeName === 'SPAN') {
      return
    }

    this.isDown = true

    this.position = {
      startX: e.pageX - this.node.offsetLeft,
      scrollLeft: this.node.scrollLeft,
      startY: e.pageY - this.node.offsetTop,
      scrollTop: this.node.scrollTop,
    }

    this.onChange({
      node: this.node,
      isDown: this.isDown,
      position: this.position,
    })
  }

  onMouseUp() {
    this.isDown = false

    this.onChange({
      node: this.node,
      isDown: this.isDown,
      position: this.position,
    })
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDown) {
      return this.onChange({
        node: this.node,
        isDown: this.isDown,
        position: this.position,
      })
    }

    e.preventDefault()

    const eventPositionX = e.pageX - this.node.offsetLeft
    const slideX = eventPositionX - this.position.startX
    this.node.scrollLeft = this.position.scrollLeft - slideX

    // const eventPositionY = e.pageY - this.node.offsetTop
    // const slideY = eventPositionY - this.position.startY
    // this.node.scrollTop = this.position.scrollTop - slideY

    this.onChange({
      node: this.node,
      isDown: this.isDown,
      position: this.position,
    })
  }
}
