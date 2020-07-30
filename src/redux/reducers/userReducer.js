import { userConstants } from "../constants";
import { auth } from "../../helpers/auth";

let initialState = {
  isAuthed: false
};
try {
  if (auth.isLogin())
    initialState = {
      isAuthed: true,
      ...auth.getLoggedUser()
    };
} catch (err) {
  console.debug("[USER_REDUCER] err=", err);
}

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.SIGNIN_SUCCESS:
      return {
        isAuthed: true,
        ...action.user
      };
    case userConstants.SIGNIN_FAILURE:
      return {
        isAuthed: false
      };
    case userConstants.SIGNOUT_SUCCESS:
      return {
        isAuthed: false
      };
    default:
      return state;
  }
}
