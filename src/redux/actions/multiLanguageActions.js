import { multiLanguageConstants } from "../constants";
import { handlerErrorActions } from "./handlers/handlerErrorActions";

const success = (type, data) => {
  return { type, data };
};

const getSelectedLanguage = language => {
  return async dispatch => {
    try {
      dispatch(success(multiLanguageConstants, language));
    } catch (err) {
      dispatch(handlerErrorActions.handle("Error"));
    }
  };
};

export const multiLanguageActions = {
  getSelectedLanguage
};
