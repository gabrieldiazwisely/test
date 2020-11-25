import { settingsPoleIncrementConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'
import { settingsPoleIncrementService } from '../../services'

const getSettingsPoleIncrement = body => {
  return async dispatch => {
    try {
      const res = await settingsPoleIncrementService.getSettingsPoleIncrement(body)
      if (res.status !== 200) throw new Error( res.message || 'Internal Server Error' )
      dispatch( success( settingsPoleIncrementConstants.GET_POLE_INCREMENT_SETTING_SUCCESS, res.data ) )
    } catch (err) {
      dispatch(handlerErrorActions.handle(err));
    }
  }
}

const success = ( type, data ) => {
  return { type, data }
}

const resetSettingsPoleIncrement = () => {
  return async dispatch => {
    dispatch( { type: settingsPoleIncrementConstants.RESET_POLE_INCREMENT_DATA } )
 }
}

export const settingsPoleIncrementActions = {
  getSettingsPoleIncrement,
  resetSettingsPoleIncrement
}