import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AdminRoutesList } from 'pages/types'
import AssignmentPage from './Assignment'
import HomePage from './Home'

const AdminRoutes: React.FC = () => {
  const { home, assignment } = AdminRoutesList

  return (
    <Switch>
      <Route exact path={home} component={HomePage} />
      <Route exact path={assignment} component={AssignmentPage} />

      <Route path="/*" render={() => <span>Error</span>} />
    </Switch>
  )
}

export default AdminRoutes
