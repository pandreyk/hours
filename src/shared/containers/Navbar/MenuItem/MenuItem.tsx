import React, { FC, ReactNode } from 'react'
import { AdminRoutesList } from 'pages/types'
import { Container, Icon, Label } from './styles'

export interface IMenuItemProps {
  isActive: boolean
  icon: AdminRoutesList
  onClick?: () => void
}

export const MenuItem: FC<IMenuItemProps> = ({
  children,
  isActive,
  icon,
  onClick,
}) => {
  const icons: { [key in AdminRoutesList]?: ReactNode } = {
    [AdminRoutesList.home]: <span></span>,
  }

  return (
    <Container isActive={isActive} onClick={onClick}>
      <Icon>{icons[icon]}</Icon>
      <Label isActive={isActive}>{children}</Label>
    </Container>
  )
}
