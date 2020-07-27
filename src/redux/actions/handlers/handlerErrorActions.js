import { resetLoading } from 'react-redux-loading-bar'

import { notificationActions, userActions } from '../'

const SIGNOUT_STATUSES = [401, 403]

export const handlerErrorActions = {
  handle
}

function handle(err) {
  return dispatch => {
    if (SIGNOUT_STATUSES.includes(err.status)) {
      dispatch(userActions.signout())
    }
    dispatch(resetLoading())
    dispatch(notificationActions.error({ message: err.message }))
  }
}
