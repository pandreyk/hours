import React from 'react'
import { Route, Redirect } from 'react-router-dom'

interface PrivateRouteProps {
  component: React.ElementType
  localStoreHasJWT: boolean
  authed: boolean
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  authed,
  localStoreHasJWT,
}) => {
  return (
    <Route
      render={(props) =>
        localStoreHasJWT ? (
          authed ? (
            <Component {...props} />
          ) : (
            <span>Loading...</span>
          )
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}
