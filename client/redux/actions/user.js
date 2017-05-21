import * as constant from '../constant/user'
import {
    getUrl
} from '../../utils/url_parse'

export function registerSuccess(data) {
    return {
        type: constant.REGISTER_SUCCESS,
        data
    }
}
export function registerFialure() {
    return {
        type: constant.REGISTER_FAILURE
    }
}
export function registerBegin() {
    return {
        type: constant.REGISTER_BEGIN
    }
}

export function register(param) {
    return dispatch => {
        dispatch(registerBegin())
        const url = '/user/'
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            dispatch(registerSuccess(json))
        }).then(function (err) {
            console.log(err)
            dispatch(registerFialure())
        })
    }
}