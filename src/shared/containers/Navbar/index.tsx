import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AdminRoutesList } from 'pages/types'
import MenuItem from './MenuItem'
import { Container, Content } from './styles'

const Navbar: React.FC = () => {
  const { t } = useTranslation()
  const { path } = useRouteMatch()

  const { home, assignment } = AdminRoutesList

  return (
    <Container>
      <Content>
        <MenuItem isActive={path === home} path={home}>
          {t('Home')}
        </MenuItem>

        <MenuItem isActive={path === assignment} path={assignment}>
          {t('Assignment')}
        </MenuItem>
      </Content>
    </Container>
  )
}
export default Navbar
