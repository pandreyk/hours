import React from 'react'

interface IUseDraggableClick {
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
}: IUseDraggableClick) => {
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

    dragComponent.dataset.dropped = draggedContainer?.className?.split(' ')[0]

    const droppedChildren = droppedContainer.querySelectorAll('div#drag')
    const droppedChildrenArray =
      droppedChildren && Array.from(droppedChildren as NodeListOf<HTMLElement>)

    dragComponent.style.top = droppedChildrenArray.length * dragHeight + 'px'

    const draggedChildren = draggedContainer.querySelectorAll('div#drag')
    const draggedChildrenArray =
      draggedChildren && Array.from(draggedChildren as NodeListOf<HTMLElement>)

    draggedChildrenArray?.forEach((item, index) => {
      if (index > draggedChildrenArray.indexOf(dragComponent as HTMLElement))
        item.style.top = (index - 1) * dragHeight + 'px'
    })

    droppedContainer.append(dragComponent)
  }
}
