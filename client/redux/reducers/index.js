import { combineReducers } from 'redux-immutable'
import mdReducer from './md'
import modalReducer from './modal'
const rootReducer = combineReducers({
    mdReducer,
    modalReducer
})
export default rootReducer