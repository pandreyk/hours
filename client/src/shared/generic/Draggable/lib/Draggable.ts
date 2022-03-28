import { Root, Drop, Hover, HoverOut } from '../types'

interface Constructor {
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
  private parentDroppableId: string
  private draggedIndex: number

  private scrollY: number
  private scrollX: number
  private shiftY: number
  private shiftX: number
  private marginTop: number
  private marginLeft: number
  private posY: number
  private posX: number

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
  }: Constructor) {
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
    this.parentDroppableId = ''
    this.draggedIndex = 0

    this.shiftY = 0
    this.shiftX = 0
    this.marginTop = 0
    this.marginLeft = 0
    this.scrollY = 0
    this.scrollX = 0
    this.posY = Number(this.node.dataset.translateY)
    this.posX = 0

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

    this.parentElement = this.node.parentNode as HTMLElement
    this.parentDroppableId = this.parentElement.dataset.droppableId as string
    this.parentChildren = this.parentElement.querySelectorAll('div#drag')
    const parentChildrenArray =
      this.parentChildren &&
      Array.from(this.parentChildren as NodeListOf<HTMLElement>)
    this.draggedIndex = parentChildrenArray.indexOf(this.node as HTMLElement)

    this.shiftX = event.clientX - this.node.getBoundingClientRect().left
    this.shiftY = event.clientY - this.node.getBoundingClientRect().top
    const styles = getComputedStyle(this.node)
    this.marginLeft = Number(styles.marginLeft.split('px')[0])
    this.marginTop = Number(styles.marginTop.split('px')[0])
    this.posY = Number(this.node.dataset.translateY)
    this.scrollX = window.scrollX
    this.scrollY = window.scrollY

    document.body.append(this.node)
    this.node.style.position = 'fixed'
    this.node.style.zIndex = '1000'
    this.node.style.cursor = 'grabbing'
    this.node.style.top = '0'
    this.node.style.left = '0'

    this.moveAt(event.pageX, event.pageY)
    Draggable.disableScrolling()

    document.addEventListener('mousemove', this.onMouseMoveEvent)
    this.node.onmouseup = this.onMouseUpEvent
  }

  onMouseUp(event: MouseEvent) {
    const dragComponent = this.node
    const droppedContainer = this.currentDroppable as HTMLDivElement

    // console.log('dragComponent', dragComponent)
    // console.log('droppedContainer', droppedContainer)

    const prevTranslateY = dragComponent.dataset.translateY

    dragComponent.dataset.prevDroppableId = this.parentDroppableId
    dragComponent.dataset.prevTranslateY = prevTranslateY

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
    if (this.IN_DROPPED_ZONE && droppedContainer) {
      this.leaveDroppable(droppedContainer)
      this.onDrop(dragComponent, droppedContainer)

      if (!droppedContainer || !this.parentElement) return

      const containerShiftY =
        event.clientY -
        droppedContainer.getBoundingClientRect().top +
        droppedContainer.scrollTop
      const containerShiftX =
        event.clientX - droppedContainer.getBoundingClientRect().left

      const droppedChildren = droppedContainer.querySelectorAll('div#drag')
      const droppedChildrenArray =
        droppedChildren &&
        Array.from(droppedChildren as NodeListOf<HTMLElement>)

      const newPositionIndex = Math.round(containerShiftY / this.dragHeight)
      const newPosition = this.dragHeight * newPositionIndex
      const allItemsHeight = this.dragHeight * droppedChildrenArray.length
      const newPosY =
        newPosition > allItemsHeight ? allItemsHeight : newPosition

      const oldPosX =
        containerShiftX -
        this.shiftX -
        this.marginLeft -
        droppedContainer.clientWidth / 2
      const oldPosY = containerShiftY - this.shiftY - this.marginTop
      dragComponent.style.transform = `translate(${oldPosX}px, ${oldPosY}px)`
      dragComponent.style.left = `50%`

      setTimeout(() => {
        this.posY = newPosY
        dragComponent.dataset.translateY = String(newPosY)
        dragComponent.style.transform = `translate(-50%, ${newPosY}px)`
      }, 0)

      droppedChildrenArray?.forEach((item, index) => {
        if (index >= newPositionIndex) {
          const translateY = (index + 1) * this.dragHeight
          item.style.transform = `translate(-50%, ${translateY}px)`
          item.dataset.translateY = String(translateY)
        }
      })

      const parentChildren = this.parentElement.querySelectorAll('div#drag')
      const parentChildrenArray =
        parentChildren && Array.from(parentChildren as NodeListOf<HTMLElement>)

      parentChildrenArray?.forEach((item, index) => {
        const translateY = index * this.dragHeight
        item.style.transform = `translate(-50%, ${translateY}px)`
        item.dataset.translateY = String(translateY)
      })

      droppedContainer.insertBefore(
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

      const oldPosX = containerShiftX - this.shiftX - this.marginLeft
      const oldPosY = containerShiftY - this.shiftY - this.marginTop
      dragComponent.style.transform = `translate(${oldPosX}px, ${oldPosY}px)`
      setTimeout(() => {
        dragComponent.style.transform = `translate(-50%, ${this.posY}px)`
        dragComponent.style.left = `50%`
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

    const droppableBelow = elemBelow.closest<HTMLElement>('[data-droppable-id]')

    if (this.currentDroppable != droppableBelow) {
      if (this.currentDroppable) {
        this.leaveDroppable(this.currentDroppable)
      }
      this.currentDroppable = droppableBelow
      if (
        this.currentDroppable &&
        droppableBelow?.dataset.droppableId !== this.parentDroppableId
      ) {
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

    const oldPosX = containerShiftX - this.shiftX - this.marginLeft
    const oldPosY = containerShiftY - this.shiftY - this.marginTop

    this.node.style.transform = `translate(${oldPosX}px, ${oldPosY}px)`
    setTimeout(() => {
      this.node.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }, 0)

    this.parentElement.insertBefore(
      this.node,
      this.parentChildren[this.draggedIndex + 1],
    )
  }

  moveAt = (pageX: number, pageY: number) => {
    const { shiftY, shiftX, marginTop, marginLeft, scrollY, scrollX } = this

    const posX = pageX - shiftX - marginLeft - scrollX
    const posY = pageY - shiftY - marginTop - scrollY
    this.node.style.transform = `translate(${posX}px, ${posY}px)`
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
    window.onscroll = () => {}
  }
}
