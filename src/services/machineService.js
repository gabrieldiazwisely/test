import { auth, HttpRequest } from "../helpers";
import { config } from "../configs";

const { protocol, hostname, port, version } = config.restapiAuth.server;

const getBackgroundData = body => {
  const requestOptions = {
    // url: `${protocol}://${hostname}${port}${version}/machine`,
    url: config.apiGateway.routes.machines.machineBackground,
    method: 'GET',
    headers: auth.getHeader(),
    //body
  }
  return HttpRequest.request(requestOptions)
}

export const machineService = {
  getBackgroundData
}

