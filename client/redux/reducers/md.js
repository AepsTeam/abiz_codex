import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'
import * as constant from '../constant/md'

const mdContent = (
    state = fromJS({ isFetching: false, data: '' }),
    action
) => {
    switch (action.type) {
        case constant.SHOW_MD_REQUEST_BEGIN:
            return state.set('isFetching', true)
        case constant.SHOW_MD_REQUEST_SUCCESS:
            return state.set('isFetching', false)
                .set('data', action.data)
        case constant.SHOW_MD_REQUEST_FAILURE:
            return state.set('isFetching', false)
        default:
            return state
    }
}

const mdReducer = combineReducers({
    mdContent
})

export default mdReducer