# React.js + Redux Front-end

## Requirements

* Node.js
* Yarn or Npm

## Install dependencies

First of all, we need to install all dependencies specified on `package.json` file

```sh
$ yarn install
```

## Configure environment params

Use above environment params on CLI

```sh
HTTPS=false
PORT=5000

REACT_APP_REST_API_PROTOCOL=string
REACT_APP_REST_API_HOSTNAME=string
REACT_APP_REST_API_PORT=number
REACT_APP_REST_API_AUTH_PORT=number
REACT_APP_REST_API_BASE_PATH=string
REST_API_BASE_PATH=string

```

Example

```sh
$ HTTPS=false PORT=5000 ... yarn ...
```

If, you use [VSCode](https://code.visualstudio.com/) as IDE. Copy above config on `.vscode/launch.json` file

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch via NPM",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
      "runtimeArgs": [
        "start",
        "--runInBand",
        "--no-cache"
      ],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "env": {
        "HTTPS": "false",
        "PORT": "5000",
        "REACT_APP_REST_API_PROTOCOL": "string",
        "REACT_APP_REST_API_HOSTNAME": "string",
        "REACT_APP_REST_API_PORT": "number",
        "REACT_APP_REST_API_AUTH_PORT": "number",
        "REACT_APP_REST_API_BASE_PATH": "string",
        "REST_API_BASE_PATH": "string"

      }
    }
  ]
}
```

## Run project CLI

Execute above command (if you use npm, replace the word yarn for npm)

```sh
$ NODE_ENV=development ... yarn run start
```

**Note: don't forget environment params**

# Development

## Configuration .gitignore

[Repository](https://github.com/github/gitignore/blob/master/Node.gitignore)

## Troubleshooting dependencies

* [**2019-06-10**] Avoid to update `react-redux` dependency to `v7.0.3`

```
warning " > connected-react-router@6.4.0" has incorrect peer dependency "react-redux@^6.0.0".
warning " > react-notification-system-redux@2.0.0" has incorrect peer dependency "react-redux@^6.0.0".
warning " > react-redux-loading-bar@4.3.0" has incorrect peer dependency "react-redux@^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0".
```

## Troubleshooting

* [**2019-06-13**] Watch mode on Linux causes a ENOSPC Node.js error

```
Starting the development server...

events.js:173
      throw er; // Unhandled 'error' event
      ^

Error: ENOSPC: System limit for number of file watchers reached, watch '/home/${USER}/reacts/reactjs-starter/public'
```

:bulb: Solution

```sh
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

Ref: https://stackoverflow.com/questions/22475849/node-js-what-is-enospc-error-and-how-to-solve/32600959#32600959
