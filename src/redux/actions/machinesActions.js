import { machinesConstants } from "../constants";
import { handlerErrorActions } from "./handlers/handlerErrorActions";
import { machinesService } from '../../services'

const success = (type, data) => {
  return { type, data }
}

const getAll = () => {
  
  return async dispatch => {
    try {
      const res = await machinesService.getAll()

      if (res.status !== 200) {
        throw new Error(res.message || 'Internal Server Error')
      }
      dispatch(success(machinesConstants.GET_ALL_SUCCESS, res.data))
    } catch (err) {
      console.debug(`[MACHINES_ACTION] fn=getAll, err=${err}`)
      dispatch(handlerErrorActions.handle(err))
    }
  }
}

const getSelectedMachine = id => {
  return async dispatch => {
    try {
      const res = await machinesService.getMachine(id)
      if (res.status !== 200) {
        throw new Error(res.message || 'Internal Server Error')
      }
      dispatch(success(machinesConstants.GET_SELECTED_SUCCESS, res.data))
    } catch (err) {
      console.debug(
        `[SELECTED_MACHINE_ACTION] fn=getMachine, err=${err}`
      )
      dispatch(handlerErrorActions.handle(err))
    }
  }
}

export const machinesActions = {
  getAll, 
  getSelectedMachine
}