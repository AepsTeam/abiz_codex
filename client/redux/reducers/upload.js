import { combineReducers } from 'redux-immutable'
import { fromJS} from 'immutable'
import * as constant from '../constant/upload'

const uploadContent = (
    state = fromJS({ isUploading: false, data: {} }),
    action
) => {
    switch (action.type) {
        case constant.FILE_UPLOAD_BEGIN:
            return state.set('isUploading', true)
        case constant.FILE_UPLOAD_SUCCESS:
            return state.set('isUploading', false)
                .set('data', action.data)
        case constant.FILE_UPLOAD_FAILURE:
            return state.set('isUploading', false)
        default:
            return state
    }
}

const uploadReducer = combineReducers({
    uploadContent
})

export default uploadReducer