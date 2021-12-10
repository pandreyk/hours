import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AdminRoutesList } from 'pages/types'
import HomePage from './Home'

const AdminRoutes: React.FC = () => {
  const { pathname } = useLocation()

  const { home } = AdminRoutesList

  return (
    <Switch>
      <Route exact path={home} component={HomePage} />

      <Route path="/*" render={() => <span>Error</span>} />
    </Switch>
  )
}

export default AdminRoutes
