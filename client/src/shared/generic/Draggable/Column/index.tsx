import React, { useEffect } from 'react'
import { Container } from './styles'

interface DraggableColumn {
  dragHeight: number
  dropId: string
  width?: string
}

export const Column: React.FC<DraggableColumn> = ({
  children,
  dropId,
  dragHeight,
  width,
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
    <Container data-droppable-id={dropId} style={{ width }}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { dragHeight, ...rest }),
      )}
    </Container>
  )
}
