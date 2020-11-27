import { settingConstants } from "../constants";

const initialState = {
  canvas: {
    ejemploNominales: {},
    perfilesLongitudinalesConcava: {},
    perfilesLongitudinalesManto: {},
    height: {
      min: 0,
      max: 100,
      medium: 0
    },
    OSS: 0
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
