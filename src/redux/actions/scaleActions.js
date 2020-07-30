import { scaleConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'



const success = (type, data) => {
  return { type, data }
}

const getSelectedScale = (scale) => {
  return async dispatch => {
    try {
      dispatch(
        success(scaleConstants, scale)
      )
    } catch (err) {
      dispatch(handlerErrorActions.handle("Error"))
    }
  }
}


export const selectedScaleActions = {
  getSelectedScale,
}
