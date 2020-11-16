import { auth, HttpRequest } from "../helpers"
import { config } from "../configs"

const getSettingsPoleIncrement = body => {
  const requestOptions = {
    path: config.apiGateway.routes.settings.settingsPoleIncrement,
    method: 'GET',
    headers: auth.getHeader(),
    //body
  }
  return HttpRequest.request(requestOptions) 
}

export const settingsPoleIncrementService = {
  getSettingsPoleIncrement
}