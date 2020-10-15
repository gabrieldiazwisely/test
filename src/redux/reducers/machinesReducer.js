import { machinesConstants } from '../constants'

const initialState = {
  data: []
}

export function machines(state = initialState, action) {
  switch (action.type) {
    case machinesConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

