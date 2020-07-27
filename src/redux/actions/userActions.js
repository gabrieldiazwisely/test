import jwtDecode from 'jwt-decode'
import { replace } from 'connected-react-router'

import { userConstants } from '../constants'
import { storageConstants } from '../../constants'
import { userService } from '../../services'
import { notificationActions } from './'

export const userActions = {
  signup,
  signin,
  signout
}

function signup(payload) {
  return async dispatch => {
    try {
      const res = await userService.signup(payload)
      if (res && res.result === 201) {
        dispatch(replace('/signin'))
      } else {
        throw new Error(res.message || 'Internal Server Error')
      }
    } catch (err) {
      dispatch(
        notificationActions.error({
          message: err.message
        })
      )
    }
  }
}

function signin(username, password) {
  return async dispatch => {
    return userService.signin(username, password).then(
      res => {
        
        // signin successful if there's a jwt token in the response
        if (res && res.data && res.data.authentication_token) {
          
          const { email, name, exp, role = 'user' } = jwtDecode(res.data.authentication_token)
          const user = {
            username: email,
            name: name,
            exp: exp,
            role: role,
            token: res.data.authentication_token
          }
          // store user details and jwt token in local storage to keep user
          // logged in between page refreshes
          localStorage.setItem(
            storageConstants.LOGGED_USER,
            JSON.stringify(user)
          )

          dispatch(success(user))
          dispatch(replace('/dashboard'))
          return
        } else {
          throw new Error(res.message || 'Internal Server Error')
        }
      },
      error => {
        console.log(error)
        dispatch(failure(error.message))
        dispatch(
          notificationActions.error({
            message: error.message
          })
        )
      }
    )
  }

  function success(user) {
    return {
      type: userConstants.SIGNIN_SUCCESS,
      user
    }
  }

  function failure(error) {
    return {
      type: userConstants.SIGNIN_FAILURE,
      error
    }
  }
}

function signout() {
  return dispatch => {
    try {
      // remove user from local storage to log user out
      localStorage.clear()
      dispatch(success())
      dispatch(replace('/signin'))
    } catch (err) {
      console.debug(`[USER_ACTION] fn=signout, err=${err}`)
    }
  }

  function success() {
    return {
      type: userConstants.SIGNOUT_SUCCESS
    }
  }
}
