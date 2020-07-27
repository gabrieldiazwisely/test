import React from 'react'

import { withAuthorization } from '../auth'
import { SignIn, SignOut, Register, ForgotPassword } from '../components'
import {
  Dashboard,
  Setting,
} from '../views'

const User = withAuthorization(['user'], { unauthorized: <div>403</div> }) // TODO

export const routePaths = [
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'SignIn',
    path: '/signin',
    component: SignIn
  },
  {
    name: 'ForgotPassword',
    path: '/forgotpassword',
    component: ForgotPassword
  },
  {
    name: 'SignOut',
    path: '/signout',
    component: SignOut
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: User(Dashboard),
    exact: true,
    needAuth: true
  },
  {
    name: 'Setting',
    path: '/setting',
    component: User(Setting),
    exact: true,
    needAuth: true
  },
]
