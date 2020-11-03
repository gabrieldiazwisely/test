import { get } from "lodash";

export const alertsResults = state => get(state, "alert");

export const languageResults = state =>
  get(state, "multiLanguage.data.language");

export const scaleResults = state => 
  get(state, "scale.data.scale")
