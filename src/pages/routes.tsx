import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from 'containers/PrivateRoute'
import { Roles } from 'types/general'
import LoginPage from 'pages/login'
import AdminRoutes from 'pages/admin'

interface IRoutes {
  localStoreHasJWT: boolean
  authed: boolean
  role?: Roles
}

type PagesConfig = {
  [key in Roles]: {
    defaultRoute: string
    pages: React.ElementType
  }
}

const pagesConfig: PagesConfig = {
  Admin: {
    defaultRoute: '/home',
    pages: AdminRoutes,
  },
}

const Routes: React.FC<IRoutes> = ({ localStoreHasJWT, authed, role }) => {
  return (
    <Switch>
      {localStoreHasJWT ? (
        authed ? (
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to={role ? pagesConfig[role].defaultRoute : 'error'} />
            )}
          />
        ) : (
          <span>Loading...</span>
        )
      ) : (
        <Route exact path="/" render={() => <LoginPage />} />
      )}

      {role && (
        <PrivateRoute
          component={pagesConfig[role].pages}
          localStoreHasJWT={localStoreHasJWT}
          authed={authed}
        />
      )}

      <Route path="/*" render={() => <span>Error</span>} />
    </Switch>
  )
}

export default Routes
