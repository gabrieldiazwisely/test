import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createRootReducer } from "./reducers";
import { history } from "../helpers";

// routerMiddleware = for dispatching history actions
const middlewares = [routerMiddleware(history), thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer, // new root reducer with router state
  composeEnhancers(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
