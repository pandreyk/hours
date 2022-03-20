import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AdminRoutesList } from 'pages/types'
import { Container, Icon, Label } from './styles'

export interface MenuItemProps {
  isActive: boolean
  path: AdminRoutesList
}

const MenuItem: FC<MenuItemProps> = ({ children, isActive, path }) => {
  const icons: { [key in AdminRoutesList]?: ReactNode } = {
    [AdminRoutesList.home]: <span></span>,
  }

  return (
    <Link to={path}>
      <Container isActive={isActive}>
        <Icon>{icons[path]}</Icon>
        <Label isActive={isActive}>{children}</Label>
      </Container>
    </Link>
  )
}

export default MenuItem
