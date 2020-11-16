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
		default: return state
	}
}




