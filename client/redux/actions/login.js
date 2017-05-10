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