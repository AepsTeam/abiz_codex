import { combineReducers } from 'redux'
import { fromJS, List } from 'immutable'
import * as constant from '../constant/md'

const list = (
    state = fromJS({ isFetching: false, content: '' }),
    action
) => {
    switch (action.type) {
        case constant.SHOW_MD_REQUEST_BEGIN:
            return state.set('isFetching', true)
        case constant.SHOW_MD_REQUEST_SUCCESS:
            return state.set('isFetching', false)
                .set('content', action.data.content)
        case constant.SHOW_MD_REQUEST_FAILURE:
            return state.set('isFetching', false)
        default:
            return state
    }
}

const cnodeReducer = combineReducers({
    list
})

export default cnodeReducer