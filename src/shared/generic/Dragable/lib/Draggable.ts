import { Root, Drop, Hover, HoverOut } from '../types'

interface IConstructor {
  root: Root
  onDrop: Drop
  handleClassName: string
  dragHeight: number
  onHover: Hover
  onHoverOut: HoverOut
}

export class Draggable {
  private readonly node: Root
  private readonly onDrop: Drop
  private readonly handleClassName: string
  private readonly dragHeight: number
  private readonly onHover: Hover
  private readonly onHoverOut: HoverOut

  private IN_DROPPED_ZONE: boolean

  private currentDroppable: HTMLElement | null
  private parentElement: HTMLElement | null
  private parentChildren: NodeList | null
  private parentClassName: string
  private draggedIndex: number

  private scrollY: number
  private scrollX: number
  private shiftY: number
  private shiftX: number
  private marginTop: number
  private marginLeft: number
  private posTop: number
  private posLeft: number

  private readonly onDragStartEvent: OmitThisParameter<() => void>
  private readonly onMouseDownEvent: OmitThisParameter<(e: MouseEvent) => void>
  private readonly onMouseUpEvent: OmitThisParameter<(e: MouseEvent) => void>
  private readonly onMouseMoveEvent: OmitThisParameter<(e: MouseEvent) => void>
  private readonly onMouseLeaveEvent: OmitThisParameter<(e: MouseEvent) => void>

  constructor({
    root,
    onDrop,
    handleClassName,
    dragHeight,
    onHover,
    onHoverOut,
  }: IConstructor) {
    this.node = root
    this.onDrop = onDrop
    this.handleClassName = handleClassName
    this.dragHeight = dragHeight
    this.onHover = onHover
    this.onHoverOut = onHoverOut

    this.IN_DROPPED_ZONE = false

    this.currentDroppable = null
    this.parentElement = null
    this.parentChildren = null
    this.parentClassName = ''
    this.draggedIndex = 0

    this.shiftY = 0
    this.shiftX = 0
    this.marginTop = 0
    this.marginLeft = 0
    this.scrollY = 0
    this.scrollX = 0
    this.posTop = 0
    this.posLeft = 0

    this.onDragStartEvent = this.onDragStart.bind(this)
    this.onMouseDownEvent = this.onMouseDown.bind(this)
    this.onMouseUpEvent = this.onMouseUp.bind(this)
    this.onMouseMoveEvent = this.onMouseMove.bind(this)
    this.onMouseLeaveEvent = this.onMouseLeave.bind(this)

    root.addEventListener('dragstart', this.onDragStartEvent)
    root.addEventListener('mousedown', this.onMouseDownEvent)
  }

  destroy() {
    this.node.removeEventListener('dragstart', this.onDragStart)
    this.node.removeEventListener('mousedown', this.onMouseDownEvent)
  }

  onDragStart() {
    return false
  }

  onMouseDown(event: MouseEvent) {
    // only left mouse button click
    if (event.button !== 0) return

    const elemBelow = document.elementFromPoint(event.clientX, event.clientY)

    if (!elemBelow?.closest(`.${this.handleClassName}`)) return

    this.shiftX = event.clientX - this.node.getBoundingClientRect().left
    this.shiftY = event.clientY - this.node.getBoundingClientRect().top
    const styles = getComputedStyle(this.node)
    this.marginLeft = Number(styles.marginLeft.split('px')[0])
    this.marginTop = Number(styles.marginTop.split('px')[0])
    this.posTop = Number(styles.top.split('px')[0])
    this.posLeft = Number(styles.left.split('px')[0])
    this.scrollX = window.scrollX
    this.scrollY = window.scrollY

    this.parentElement = this.node.parentNode as HTMLElement
    this.parentClassName = this.parentElement.classList[0]
    this.parentChildren = this.parentElement.querySelectorAll('div#drag')
    const parentChildrenArray =
      this.parentChildren &&
      Array.from(this.parentChildren as NodeListOf<HTMLElement>)
    this.draggedIndex = parentChildrenArray.indexOf(this.node as HTMLElement)

    document.body.append(this.node)
    this.node.style.position = 'fixed'
    this.node.style.zIndex = '1000'
    this.node.style.cursor = 'grabbing'

    this.moveAt(event.pageX, event.pageY)
    Draggable.disableScrolling()

    document.addEventListener('mousemove', this.onMouseMoveEvent)
    this.node.onmouseup = this.onMouseUpEvent
  }

  onMouseUp(event: MouseEvent) {
    const dragComponent = this.node
    const droppedElement = document.querySelector(
      `.${dragComponent.dataset.dropped}`,
    )

    document.removeEventListener('mousemove', this.onMouseMoveEvent)
    document.body.onmouseleave = null
    dragComponent.onmouseup = null
    Draggable.enableScrolling()

    dragComponent.style.position = 'absolute'
    dragComponent.style.zIndex = '1'
    dragComponent.style.cursor = 'grab'

    dragComponent.style.pointerEvents = 'none'
    setTimeout(() => {
      dragComponent.style.pointerEvents = 'auto'
    }, 500) // because transition is 0.5s

    // if success drop to new zone
    if (this.IN_DROPPED_ZONE && this.currentDroppable) {
      this.leaveDroppable(this.currentDroppable)
      this.onDrop(dragComponent)

      dragComponent.dataset.dropped = this.parentClassName

      if (!droppedElement || !this.parentElement) return

      const containerShiftY =
        event.clientY -
        droppedElement.getBoundingClientRect().top +
        droppedElement.scrollTop
      const containerShiftX =
        event.clientX - droppedElement.getBoundingClientRect().left

      const droppedChildren = droppedElement.querySelectorAll('div#drag')
      const droppedChildrenArray =
        droppedChildren &&
        Array.from(droppedChildren as NodeListOf<HTMLElement>)

      const newPositionIndex = Math.round(containerShiftY / this.dragHeight)
      const newPosition = this.dragHeight * newPositionIndex
      const allItemsHeight = this.dragHeight * droppedChildrenArray.length
      const newTopPos =
        newPosition > allItemsHeight ? allItemsHeight : newPosition

      dragComponent.style.top =
        containerShiftY - this.shiftY - this.marginTop + 'px'
      dragComponent.style.left =
        containerShiftX - this.shiftX - this.marginLeft + 'px'

      setTimeout(() => {
        dragComponent.style.top = newTopPos + 'px'
        dragComponent.style.left = this.posLeft + 'px'
      }, 0)

      droppedChildrenArray?.forEach((item, index) => {
        if (index >= newPositionIndex) {
          item.style.top = (index + 1) * this.dragHeight + 'px'
        }
      })

      const parentChildren = this.parentElement.querySelectorAll('div#drag')
      const parentChildrenArray =
        parentChildren && Array.from(parentChildren as NodeListOf<HTMLElement>)

      parentChildrenArray?.forEach((item, index) => {
        item.style.top = index * this.dragHeight + 'px'
      })

      droppedElement.insertBefore(
        dragComponent,
        droppedChildren[newPositionIndex],
      )
    }
    // component remains in its old place
    else {
      if (!this.parentElement || !this.parentChildren) return

      const scrollTop = this.parentElement.scrollTop
      const scrollLeft = this.parentElement.scrollLeft

      const containerShiftY =
        event.clientY -
        this.parentElement.getBoundingClientRect().top +
        scrollTop
      const containerShiftX =
        event.clientX -
        this.parentElement.getBoundingClientRect().left +
        scrollLeft

      dragComponent.style.top =
        containerShiftY - this.shiftY - this.marginTop + 'px'
      dragComponent.style.left =
        containerShiftX - this.shiftX - this.marginLeft + 'px'

      setTimeout(() => {
        dragComponent.style.top = this.posTop + 'px'
        dragComponent.style.left = this.posLeft + 'px'
      }, 0)

      this.parentElement.insertBefore(
        dragComponent,
        this.parentChildren[this.draggedIndex + 1],
      )
    }
  }

  onMouseMove(event: MouseEvent) {
    this.moveAt(event.pageX, event.pageY)

    this.node.hidden = true
    const elemBelow = document.elementFromPoint(event.clientX, event.clientY)
    this.node.hidden = false

    if (!elemBelow) return

    const droppableBelow = elemBelow.closest<HTMLElement>(
      `.${this.node.dataset.dropped}`,
    )

    if (this.currentDroppable != droppableBelow) {
      if (this.currentDroppable) {
        this.leaveDroppable(this.currentDroppable)
      }
      this.currentDroppable = droppableBelow
      if (this.currentDroppable) {
        this.enterDroppable(this.currentDroppable)
      }
    }

    document.body.onmouseleave = this.onMouseLeaveEvent
  }

  onMouseLeave(event: MouseEvent) {
    document.removeEventListener('mousemove', this.onMouseMoveEvent)
    document.body.onmouseleave = null

    Draggable.enableScrolling()

    this.node.style.position = 'absolute'
    this.node.style.zIndex = '1'
    this.node.style.cursor = 'grab'

    if (!this.parentElement || !this.parentChildren) return

    const scrollTop = this.parentElement.scrollTop
    const scrollLeft = this.parentElement.scrollLeft

    const containerShiftY =
      event.clientY - this.parentElement.getBoundingClientRect().top + scrollTop
    const containerShiftX =
      event.clientX -
      this.parentElement.getBoundingClientRect().left +
      scrollLeft

    this.node.style.top = containerShiftY - this.shiftY - this.marginTop + 'px'
    this.node.style.left =
      containerShiftX - this.shiftX - this.marginLeft + 'px'

    setTimeout(() => {
      this.node.style.top = this.posTop + 'px'
      this.node.style.left = this.posLeft + 'px'
    }, 0)

    this.parentElement.insertBefore(
      this.node,
      this.parentChildren[this.draggedIndex + 1],
    )
  }

  moveAt = (pageX: number, pageY: number) => {
    const { shiftY, shiftX, marginTop, marginLeft, scrollY, scrollX } = this

    this.node.style.top = pageY - shiftY - marginTop - scrollY + 'px'
    this.node.style.left = pageX - shiftX - marginLeft - scrollX + 'px'
  }

  enterDroppable = (elem: HTMLElement) => {
    this.IN_DROPPED_ZONE = true
    this.onHover(elem)
  }

  leaveDroppable = (elem: HTMLElement) => {
    this.IN_DROPPED_ZONE = false
    this.onHoverOut(elem)
  }

  static disableScrolling = () => {
    const x = window.scrollX
    const y = window.scrollY
    window.onscroll = function () {
      window.scrollTo(x, y)
    }
  }

  static enableScrolling = () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.onscroll = () => {}
  }
}
