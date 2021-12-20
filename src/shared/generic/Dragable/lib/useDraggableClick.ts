import React from 'react'

interface UseDraggableClick {
  itemSelector: string
  dragHeight: number
  firstColumn: string
  secondColumn: string
}

// only two columns
export const useDraggableClick = ({
  itemSelector,
  dragHeight,
  firstColumn,
  secondColumn,
}: UseDraggableClick) => {
  return (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const component = target.closest(`div${itemSelector}`) as HTMLElement
    const dragComponent = component.parentNode as HTMLElement
    const draggedContainer = dragComponent.parentNode as HTMLElement

    const draggedClass = draggedContainer?.classList[0]

    const newDroppedClass =
      draggedClass === firstColumn ? secondColumn : firstColumn

    const droppedContainer = document.querySelector(`.${newDroppedClass}`)

    if (!component || !dragComponent || !draggedContainer || !droppedContainer)
      return

    const droppedChildren = droppedContainer.querySelectorAll('div#drag')
    const droppedChildrenArray =
      droppedChildren && Array.from(droppedChildren as NodeListOf<HTMLElement>)

    const translateY = droppedChildrenArray.length * dragHeight
    dragComponent.style.transform = `translate(-50%, ${translateY}px)`
    dragComponent.dataset.translateY = String(translateY)
    dragComponent.dataset.dropped = draggedContainer?.classList[0]

    const draggedChildren = draggedContainer.querySelectorAll('div#drag')
    const draggedChildrenArray =
      draggedChildren && Array.from(draggedChildren as NodeListOf<HTMLElement>)

    draggedChildrenArray?.forEach((item, index) => {
      if (index > draggedChildrenArray.indexOf(dragComponent as HTMLElement)) {
        const translateY = (index - 1) * dragHeight
        item.style.transform = `translate(-50%, ${translateY}px)`
        item.dataset.translateY = String(translateY)
      }
    })

    droppedContainer.append(dragComponent)
  }
}
