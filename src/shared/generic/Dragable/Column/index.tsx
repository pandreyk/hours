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
    const container = document.querySelector(`.${className}`)
    const children = container?.querySelectorAll('div#drag')
    const childrenArray =
      children && Array.from(children as NodeListOf<HTMLElement>)

    childrenArray?.forEach((item, index) => {
      item.style.top = index * dragHeight + 'px'
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
