export const config = {
  restapiAuth: {
    server: {
      protocol:
        process.env.REACT_APP_REST_API_PROTOCOL ||
        window.location.protocol.split(":")[0],
      hostname:
        process.env.REACT_APP_REST_API_BASE_PATH || window.location.hostname,
      port: process.env.REACT_APP_REST_API_AUTH_PORT,
      version: process.env.REACT_APP_BACKEND_PATH
    },
    routes: {
      signup: "/signup",
      signin: "/signin"
    }
  },
  apiGateway: {
    server: {
      protocol:
        process.env.REACT_APP_REST_API_PROTOCOL ||
        window.location.protocol.split(":")[0],
      hostname:
        process.env.REACT_APP_REST_API_HOSTNAME || window.location.hostname,
      port: process.env.REACT_APP_REST_API_PORT
    }
  }
};
