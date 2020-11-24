import { dashboardConstants } from '../constants'
import { handlerErrorActions } from './handlers/handlerErrorActions'
import { chartsService } from '../../services'

const mtoHeightRecommendation = (metrica) => {
  return async dispatch => {
    try {
      const res = await chartsService.mtoHeightRecommendation(metrica) 
      if (res.status !== 200) throw new Error( res.message || 'Internal Server Error' )
      dispatch( success( dashboardConstants.GET_MTO_HEIGHT_RECOMMENDATION_SUCCESS, res.data ) )
    } catch (err) {
      dispatch(handlerErrorActions.handle(err));
    }
  }
}

const success = ( type , data ) => {
  return { type, data }
}

export const dashboardActions = {
  mtoHeightRecommendation
}