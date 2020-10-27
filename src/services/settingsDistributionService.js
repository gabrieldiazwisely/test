import { auth, HttpRequest } from "../helpers"
import { config } from "../configs"

// const { protocol, hostname, port, version } = config.restapiAuth.server

const getSettingsDistribution = body => {
  const requestOptions = {
    path: config.apiGateway.routes.settingsDistributtion,
    method: 'GET',
    headers: auth.getHeader(),
    //body
  }
  return HttpRequest.request(requestOptions) 
}

export const settingsDistributionService = {
  getSettingsDistribution
}