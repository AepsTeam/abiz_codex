import { combineReducers } from 'redux-immutable'
import mdReducer from './md'
import modalReducer from './modal'
import uploadReducer from './upload'

const rootReducer = combineReducers({
    mdReducer,
    modalReducer,
    uploadReducer
})
export default rootReducer