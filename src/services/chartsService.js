import { auth, HttpRequest } from "../helpers";
import { config } from "../configs";

const { protocol, hostname, port, version } = config.restapiAuth.server;

const mtoHeightRecommendation = body => {
  const requestOptions = {
    // url: `${protocol}://${hostname}${port}${version}/machine`,
    path: config.apiGateway.routes.charts.mtoHeightRecommendation,
    method: 'GET',
    headers: auth.getHeader(),
    //body
  }
  return HttpRequest.request(requestOptions)
}

export const chartsService = {
  mtoHeightRecommendation
}

