import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AdminRoutesList } from 'pages/types'
import { MenuItem } from './MenuItem'
import { Container, Content } from './styles'

export const Navbar: React.FC = () => {
  const { t } = useTranslation()
  const { path } = useRouteMatch()

  const { home } = AdminRoutesList

  return (
    <Container>
      <Content>
        <Link to={home}>
          <MenuItem isActive={path === home} icon={home}>
            {t('Home')}
          </MenuItem>
        </Link>
      </Content>
    </Container>
  )
}

export default Navbar
