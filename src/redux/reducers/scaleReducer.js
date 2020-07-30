import { scaleConstants } from '../constants'

const initialState = {
    data: {
        scale: 'cm'
    }
}

export function scale (state= initialState, action) {
    switch(action.type) {
        case scaleConstants.GET_SELECTED_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}