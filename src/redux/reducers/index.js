import { combineReducers } from "redux"
import { reducer as notifications } from "react-notification-system-redux"
import { connectRouter } from "connected-react-router"
import { loadingBarReducer as loadingBar } from "react-redux-loading-bar"

import { user } from "./userReducer"
import { multiLanguage } from "./multiLanguageReducer"
import { scale } from "./scaleReducer"
import { machine } from './machineReducer'
import { machines } from "./machinesReducer"
import { selectedMachine } from "./selectedMachineReducer"

import { dashboard } from "./dashboardReducer"
import { setting } from "./settingReducer"
import { settingsDistribution } from "./settingsDistributionReducer"


export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    notifications,
    loadingBar,
    user,
    multiLanguage,
    scale,
    machine,
    machines,
    selectedMachine,
    dashboard,
    setting,
    settingsDistribution
  });
