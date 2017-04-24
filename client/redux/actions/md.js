import * as constant from '../constant/md'
import { getUrl } from '../../utils/url_parse'

export function mdSuccess(data) {
    return { type: constant.SHOW_MD_REQUEST_SUCCESS, data }
}
export function mdFialure() {
    return { type: constant.SHOW_MD_REQUEST_FAILURE }
}
export function mdBegin() {
    return { type: constant.SHOW_MD_REQUEST_BEGIN }
}

export function getMD(param) {
    return dispatch => {
        dispatch(mdBegin())
        const url = '/md' + param.pathname
        const str = getUrl(url, param)
        fetch(str, { method: "GET" }).then(function (response) {
            return response.json()
        }).then(function (json) {
            dispatch(mdSuccess(json))
        }).catch(function (ex) {
            console.log(ex)
            dispatch(mdFialure())
        })
    }
}