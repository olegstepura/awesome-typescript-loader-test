import { browserHistory } from 'react-router'
import { IStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { ApplicationState } from 'model/ApplicationState';

// Create an enhanced history that syncs navigation events with the store
export const configureHistory = (store: IStore<ApplicationState>) => syncHistoryWithStore(browserHistory, store)
