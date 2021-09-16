import { createStore, combineReducers } from 'redux'
import { loadingReducer } from './loading/reducer'
import { messageReducer } from './alert/reducer'
const rootReducer = combineReducers({
	loadingReducer: loadingReducer,
	messageReducer: messageReducer,
})

export const store = createStore(rootReducer)
