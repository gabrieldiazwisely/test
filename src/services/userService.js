import { HttpRequest } from "../helpers";
import { config } from "../configs";

export const userService = {
  signup,
  signin
};

const { protocol, hostname, port, version } = config.restapiAuth.server;

function signup(payload) {
  const requestOptions = {
    url: `${protocol}://${hostname}${port}${version}/signup`,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: payload
  };
  return HttpRequest.request(requestOptions);
}

function signin(username, password) {
  const requestOptions = {
    url: `${protocol}://${hostname}${port}${version}/sessions`,
    method: "POST",
    body: { email: username, password: password },
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log('signin', requestOptions)
  return HttpRequest.request(requestOptions);
}
