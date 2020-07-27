import React from 'react'
import { Route, Switch } from 'react-router' // react-router v4

import { routePaths } from './paths'

const Routes = (
  <Switch>
    {routePaths.map((route, index) => (
      <Route
        key={index}
        exact={route.exact}
        strict={route.strict}
        path={route.path}
        component={route.component}
      />
    ))}
    <Route render={() => 'Path not found'} />
  </Switch>
)

export default Routes
