import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AdminRoutesList } from 'pages/types'
import ClassesPage from './Classes'
import HomePage from './Home'
import SchedulePage from './Schedule'
import TeachersPage from './Teachers'

const AdminRoutes: React.FC = () => {
  const { home, teachers, classes, classSchedule, lessons, pupils, subjects } =
    AdminRoutesList

  return (
    <Switch>
      <Route exact path={home} component={HomePage} />
      <Route exact path={teachers} component={TeachersPage} />
      <Route exact path={classes} component={ClassesPage} />
      <Route exact path={classSchedule} component={SchedulePage} />
      <Route exact path={lessons} component={ClassesPage} />
      <Route exact path={pupils} component={ClassesPage} />
      <Route exact path={subjects} component={ClassesPage} />

      <Route path="/*" render={() => <span>Error</span>} />
    </Switch>
  )
}

export default AdminRoutes
