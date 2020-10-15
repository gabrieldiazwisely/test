import { machinesConstants } from '../constants'

const initialState = {
  data: []
}

export function selectedMachine(state = initialState, action) {
  switch (action.type) {
    case machinesConstants.GET_SELECTED_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

