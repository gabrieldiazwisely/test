import { dashboardConstants } from "../constants";

const initialState = {
    mto_height_recommendation: {
      box: {
        date:'',
        tom:'',
        mtoHeight:''
      },
      data: [],
      options: {}
    }
};

export function dashboard(state = initialState, action) {
  switch (action.type) {
    case dashboardConstants.GET_MTO_HEIGHT_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        mto_height_recommendation: action.data
      };
    default:
      return state;
  }
}
