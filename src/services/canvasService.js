import { auth, HttpRequest } from "../helpers";
import { config } from "../configs";

const { protocol, hostname, port, version } = config.restapiAuth.server;

const canvas = body => {
  const requestOptions = {
    // url: `${protocol}://${hostname}${port}${version}/machine`,
    path: config.apiGateway.routes.canvas.setting,
    method: 'GET',
    headers: auth.getHeader(),
    //body
  }
  return HttpRequest.request(requestOptions)
}

export const canvasService = {
  canvas
}

