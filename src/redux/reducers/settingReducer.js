import { settingConstants } from "../constants";

const initialState = {
  canvas: {
    perfilesLongitudinales: [],
    nominales: []
  }
}

export function setting(state = initialState, action) {
  switch (action.type) {
    case settingConstants.GET_CANVAS_SETTING_SUCCESS:
      return {
        ...state,
        canvas: action.data
      };
    default:
      return state;
  }
}
