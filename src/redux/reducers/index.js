import { combineReducers } from 'redux'
import { reducer as notifications } from 'react-notification-system-redux'
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

import { user } from './userReducer'

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    loadingBar,
    user,
  })
