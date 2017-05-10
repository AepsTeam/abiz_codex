import { combineReducers } from 'redux-immutable'
import { fromJS, List } from 'immutable'
import * as constant from '../constant/user'

const registerContent = (
    state = fromJS({ isFetching: false, data: '' }),
    action
) => {
    switch (action.type) {
        case constant.REGISTER_BEGIN:
            return state.set('isFetching', true)
        case constant.REGISTER_SUCCESS:
            return state.set('isFetching', false)
                .set('data', action.data)
        case constant.REGISTER_FAILURE:
            return state.set('isFetching', false)
        default:
            return state
    }
}

const userReducer = combineReducers({
    registerContent
})

export default userReducer