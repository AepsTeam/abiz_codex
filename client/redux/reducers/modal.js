import {
    combineReducers
} from 'redux-immutable'
import {
    fromJS
} from 'immutable'
import * as constant from '../constant/modal'

const modalContent = (
    state = fromJS({
        showModal: false
    }),
    action
) => {
    switch (action.type) {
        case constant.MODAL_SHOW:
            return state.set('showModal', true)
        case constant.MODAL_HIDE:
            return state.set('showModal', false)
        default:
            return state
    }
}

const modalReducer = combineReducers({
    modalContent
})

export default modalReducer