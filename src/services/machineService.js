import { auth, HttpRequest } from "../helpers";
import { config } from "../configs";

const { protocol, hostname, port, version } = config.restapiAuth.server;

const getBackgroundData = body => {
  const requestOptions = {
    // url: `${protocol}://${hostname}${port}${version}/machine`,
    url: 'https://backend-clubkopa.herokuapp.com/fakes/machinebackground',
    method: 'GET',
    headers: auth.getHeader(),
    //body
  }
  return HttpRequest.request(requestOptions)
}

export const machineService = {
  getBackgroundData
}

