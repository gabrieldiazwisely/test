import { settingConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'
import { canvasService } from '../../services'

const canvas = () => {
  return async dispatch => {
    try {
      const res = await canvasService.canvas() 
      if (res.status !== 200) throw new Error( res.message || 'Internal Server Error' )
      dispatch( success( settingConstants.GET_CANVAS_SETTING_SUCCESS, res.data ) )
    } catch (err) {
      dispatch(handlerErrorActions.handle(err));
    }
  }
}

const success = ( type , data ) => {
  return { type, data }
}

export const settingActions = {
  canvas
}