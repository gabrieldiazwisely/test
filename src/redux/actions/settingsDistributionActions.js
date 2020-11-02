import { settingsDistributionConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'
import { settingsDistributionService } from '../../services'

const getSettingsDistribution = body => {
  return async dispatch => {
    try {
      const res = await settingsDistributionService.getSettingsDistribution(body)
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