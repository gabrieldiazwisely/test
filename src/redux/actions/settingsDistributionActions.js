import { settingsDistributionConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'
//importar service

const getSettingsDistribution = body => {
  return async dispatch => {
    try {
      // change
      // const res = await machineService.getBackgroundData(body) 
      if (res.status !== 200) throw new Error( res.message || 'Internal Server Error' )
      dispatch( success( settingsDistributionConstants.GET_DISTRIBUTION_SETTING_SUCCESS, res.data ) )
    } catch (err) {
      dispatch(handlerErrorActions.handle(err));
    }
  }
}

const success = ( type, data ) => {
  return { type, data }
}

export const settingsDistributionActions = {
  getSettingsDistribution
}