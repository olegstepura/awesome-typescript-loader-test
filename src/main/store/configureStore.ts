import { createStore } from 'redux'
import { rootReducer } from 'reducer/root'

export const configureStore = (initialState?: Object) => {
  return createStore(rootReducer, initialState)
}
