import * as constant from '../constant/md'
import {
    getUrl
} from '../../utils/url_parse'

export function getMdSuccess(data) {
    return {
        type: constant.SHOW_MD_REQUEST_SUCCESS,
        data
    }
}
export function getMdFialure() {
    return {
        type: constant.SHOW_MD_REQUEST_FAILURE
    }
}
export function getMdBegin() {
    return {
        type: constant.SHOW_MD_REQUEST_BEGIN
    }
}

export function writeMdSuccess(data) {
    return {
        type: constant.SAVE_MD_REQUEST_SUCCESS,
        data
    }
}
export function writeMdFialure() {
    return {
        type: constant.SAVE_MD_REQUEST_FAILURE
    }
}
export function writeMdBegin() {
    return {
        type: constant.SAVE_MD_REQUEST_BEGIN
    }
}




export function getMD(param) {
    return dispatch => {
        dispatch(getMdBegin())
        const url = '/md' + param.pathname
        const str = getUrl(url, param)
        fetch(str, {
            method: "GET"
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            dispatch(getMdSuccess(json))
        }).catch(function (ex) {
            console.log(ex)
            dispatch(getMdFialure())
        })
    }
}

export function saveMD(param) {
    return dispatch => {
        dispatch(writeMdBegin())
        const url = '/md' + param.pathname
        // const str = getUrl(url, param)
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': param.content
            })
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            dispatch(writeMdSuccess(json))
        }).then(function (err) {
            console.log(err)
            dispatch(writeMdFialure())
        })
    }
}