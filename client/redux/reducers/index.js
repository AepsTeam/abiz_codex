import { combineReducers } from 'redux-immutable'
import mdReducer from './md'
import modalReducer from './modal'
import uploadReducer from './upload'
import userReducer from './user'

const rootReducer = combineReducers({
    mdReducer,
    modalReducer,
    uploadReducer,
    userReducer
})
export default rootReducer