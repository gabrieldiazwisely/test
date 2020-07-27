import React from 'react'
import { render } from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { AuthProvider } from './auth'
import { App } from './containers/'
import { history, HttpRequest } from './helpers'
import { store, persistor } from './redux/store'
import { config } from './configs'
import Routes from './routes/index'
import registerServiceWorker from './registerServiceWorker'

HttpRequest.setup({ ...config.apiGateway.server })

const authorize = (requirements, user) => {
  return requirements.some(requirement => user.role === requirement)
}

render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider authorize={authorize}>
        <ConnectedRouter history={history}>
          <App>{Routes}</App>
        </ConnectedRouter>
      </AuthProvider>
    </PersistGate>
  </ReduxProvider>,
  document.querySelector('#root')
)
registerServiceWorker()
