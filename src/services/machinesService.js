import { HttpRequest, auth } from '../helpers'
import { config } from '../configs'

const getAll = () => {
  const requestOptions = {
    path: config.apiGateway.routes.machines.getAll,
    method: 'GET',
    headers: auth.getHeader()
  }
  return HttpRequest.request(requestOptions)
}

const getMachine = id => {
  const requestOptions = {
    method: 'GET',
    path: config.apiGateway.routes.machines.getMachine.replace(':id', id),
    headers: auth.getHeader()
  }
  return HttpRequest.request(requestOptions)
}

export const machinesService = {
  getAll,
  getMachine
}
