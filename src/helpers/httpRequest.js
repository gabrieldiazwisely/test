/*
2xx Success
200 OK
201 Created
204 No Content

4xx Client errors
401 Unauthorized
403 Forbidden
404 Not Found
412 Precondition Failed

5xx Server errors
500 Internal Server Error
501 Not Implemented
*/
const HTTP_SUCCESS_STATUSES = [200, 201, 204];
const HTTP_ERROR_STATUSES = [401, 403, 404, 412, 500, 501];
const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

class HttpRequest {
  static setup({ protocol = "http", hostname = "", port = 0, headers = {} }) {
    this._protocol = protocol;
    this._hostname = hostname;
    this._port = port;
    this._headers = Object.assign({}, headers, DEFAULT_HEADERS);
  }

  static async request({
    url = null,
    method = "POST",
    headers = {},
    path = "",
    body = {}
  }) {
    const requestOptions = {
      method: method,
      mode: "cors",
      headers: Object.assign({}, this._headers, headers)
    };
    if (typeof body === "object" && Object.keys(body).length !== 0) {
      requestOptions.body = JSON.stringify(body);
    }
    const URL = url
      ? `${url}${path}`
      : `${this._protocol}://${this._hostname}:${this._port}${path}`;
    const res = await fetch(URL, requestOptions);
    let data;
    try {
      data = await res.json();
    } catch (err) {
      data = [];
    }
    if (HTTP_SUCCESS_STATUSES.includes(res.status)) {
      return Promise.resolve({ status: res.status, data });
    } else if (HTTP_ERROR_STATUSES.includes(res.status)) {
      const error = new Error(data.message || "Internal Server Error");
      error.status = res.status;
      return Promise.reject(error);
    } else {
      throw new Error("Network response was not ok");
    }
  }
}

export { HttpRequest };
