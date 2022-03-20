interface UseDraggableMove {
  dragHeight: number
}

export const useDraggableMove = ({ dragHeight }: UseDraggableMove) => {
  // dragComponent - что перенести, droppableId - куда перенести
  return (dragComponent: HTMLElement, droppableId: string, posY?: number) => {
    const draggedContainer = dragComponent.parentNode as HTMLElement

    const droppedContainer = document.querySelector(
      `[data-droppable-id="${droppableId}"]`,
    )

    if (!dragComponent || !draggedContainer || !droppedContainer) return

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

    if (typeof posY !== 'undefined' && posY !== null) {
      const newPositionIndex = Math.round(posY / dragHeight)
      const newPosition = dragHeight * newPositionIndex
      const allItemsHeight = dragHeight * droppedChildrenArray.length
      const newPosY =
        newPosition > allItemsHeight ? allItemsHeight : newPosition

      dragComponent.style.transform = `translate(-50%, ${newPosY}px)`
      dragComponent.style.left = `50%`

      dragComponent.dataset.translateY = String(newPosY)

      droppedChildrenArray?.forEach((item, index) => {
        if (index >= newPositionIndex) {
          const translateY = (index + 1) * dragHeight
          item.style.transform = `translate(-50%, ${translateY}px)`
          item.dataset.translateY = String(translateY)
        }
      })

      droppedContainer.insertBefore(
        dragComponent,
        droppedChildren[newPositionIndex],
      )
    } else {
      droppedContainer.append(dragComponent)
    }
  }
}
