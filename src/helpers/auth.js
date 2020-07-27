import { storageConstants } from '../constants'

export const auth = {
  getHeader,
  isLogin,
  getLoggedUser
}

// return Authorization header with JWT
function getHeader() {
  const user = getLoggedUser()
  return user && user.token
    ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    : {}
}

function isLogin() {
  const user = getLoggedUser()
  // TODO validate token with backend service
  // TODO if token expired delete token from localstorage
  return (
    user && user.token && user.exp > Math.floor(new Date().getTime() / 1000)
  )
}

function getLoggedUser() {
  return JSON.parse(localStorage.getItem(storageConstants.LOGGED_USER))
}
