import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AdminRoutesList } from 'pages/types'
import AssignmentPage from './Assignment'
import HomePage from './Home'
import TeachersPage from './Teachers'

const AdminRoutes: React.FC = () => {
  const { home, assignment, teachers } = AdminRoutesList

  return (
    <Switch>
      <Route exact path={home} component={HomePage} />
      <Route exact path={assignment} component={AssignmentPage} />
      <Route exact path={teachers} component={TeachersPage} />

      <Route path="/*" render={() => <span>Error</span>} />
    </Switch>
  )
}

export default AdminRoutes
