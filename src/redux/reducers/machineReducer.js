import { machineConstants } from '../constants'

const initialState = {
  data: {}
}

export const machine = ( state = initialState, action ) => {
  switch ( action.type ) {
    case machineConstants.GET_MACHINE_BACKGROUND_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}