import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AdminRoutesList } from 'pages/types'
import MenuItem from './MenuItem'
import { Container, Content } from './styles'

const Navbar: React.FC = () => {
  const { t } = useTranslation()
  const { path } = useRouteMatch()

  const { home, teachers, classes, lessons, pupils, subjects } = AdminRoutesList

  const startPathEqualUrl = (url: string) => path.indexOf(url) === 0

  return (
    <Container>
      <Content>
        <MenuItem isActive={startPathEqualUrl(home)} path={home}>
          {t('Home')}
        </MenuItem>

        <MenuItem isActive={startPathEqualUrl(teachers)} path={teachers}>
          {t('Teachers')}
        </MenuItem>

        <MenuItem isActive={startPathEqualUrl(classes)} path={classes}>
          {t('Classes')}
        </MenuItem>

        {/* <MenuItem isActive={path === lessons} path={lessons}>
          {t('Lessons')}
        </MenuItem>

        <MenuItem isActive={path === pupils} path={pupils}>
          {t('Pupils')}
        </MenuItem>

        <MenuItem isActive={path === subjects} path={subjects}>
          {t('Subjects')}
        </MenuItem> */}
      </Content>
    </Container>
  )
}

export default Navbar
