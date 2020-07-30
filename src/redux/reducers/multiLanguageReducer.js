import { multiLanguageConstants } from "../constants";

const initialState = {
  data: {
    language: "es"
  }
};

export function multiLanguage(state = initialState, action) {
  switch (action.type) {
    case multiLanguageConstants.GET_SELECTED_SUCCESS:
      debugger;
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
