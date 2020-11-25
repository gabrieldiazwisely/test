import { settingsPoleIncrementConstants } from '../constants'

const initialState = {
  data: {}
}

export function settingsPoleIncrement(state = initialState, action) {
	switch (action.type) {
		case settingsPoleIncrementConstants.GET_POLE_INCREMENT_SETTING_SUCCESS:
			return {
				...state,
				data: action.data
      }
    case settingsPoleIncrementConstants.RESET_POLE_INCREMENT_DATA:
      return {}
		default: return state
	}
}