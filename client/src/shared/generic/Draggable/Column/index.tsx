import React, { useEffect } from 'react'
import { Container } from './styles'

interface IDraggableColumn {
  dragHeight: number
  dropId: string
}

export const Column: React.FC<IDraggableColumn> = ({
  children,
  dropId,
  dragHeight,
  ...rest
}) => {
  useEffect(() => {
    const container = document.querySelector(
      `${`[data-droppable-id="${dropId}"]`}`,
    ) as HTMLElement
    const children = container?.querySelectorAll('div#drag')
    const childrenArray =
      children && Array.from(children as NodeListOf<HTMLElement>)

    childrenArray?.forEach((item, index) => {
      const translateY = index * dragHeight

      item.style.transform = `translate(-50%, ${translateY}px)`
      item.style.left = `50%`
      item.dataset.translateY = String(translateY)
    })
  }, [])

  return (
    <Container data-droppable-id={dropId}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { dragHeight, ...rest }),
      )}
    </Container>
  )
}
