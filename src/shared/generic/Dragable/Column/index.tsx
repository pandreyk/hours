import React, { useEffect } from 'react'
import { Container } from './styles'

interface IDraggableColumn {
  className: string
  dragHeight: number
}

export const Column: React.FC<IDraggableColumn> = ({
  children,
  className,
  dragHeight,
  ...rest
}) => {
  useEffect(() => {
    const container = document.querySelector(`.${className}`) as HTMLElement
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
    <Container className={className}>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, { dragHeight, ...rest }),
      )}
    </Container>
  )
}
