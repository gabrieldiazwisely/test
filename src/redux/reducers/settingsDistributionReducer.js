import { settingsDistributionConstants } from '../constants'

const initialState = {
  settingsDistributionData: {}
}

export function settingsDistribution(state = initialState, action) {
  switch (action.type) {
    case settingsDistributionConstants.GET_DISTRIBUTION_SETTING_SUCCESS:
      return {
        ...state,
        settingsDistributionData: action.data
      }
    default: return state
  }
}