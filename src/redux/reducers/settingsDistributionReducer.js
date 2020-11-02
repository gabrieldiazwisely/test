import { settingsDistributionConstants } from '../constants'

const initialState = {
  data: {}
}

export function settingsDistribution(state = initialState, action) {
  switch (action.type) {
    case settingsDistributionConstants.GET_DISTRIBUTION_SETTING_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    default: return state
  }
}