import { machineConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'
import { machineService } from '../../services'

const getMachineBackground = body => {
  return async dispatch => {
    try {
      const res = await machineService.getBackgroundData(body) 
      if (res.status !== 200) throw new Error( res.message || 'Internal Server Error' )
      dispatch( success( machineConstants.GET_MACHINE_BACKGROUND_SUCCESS, res.data ) )
    } catch (err) {
      dispatch(handlerErrorActions.handle(err));
    }
  }
}

const success = ( type , data ) => {
  return { type, data }
}

export const machineActions = {
  getMachineBackground
}