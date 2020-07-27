import { get } from 'lodash'

export const alertsResults = state => get(state, 'alert')
