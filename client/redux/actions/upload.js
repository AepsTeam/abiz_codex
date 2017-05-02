import * as constant from '../constant/upload'
import {
    getUrl
} from '../../utils/url_parse'

export function uploadSuccess(data) {
    return {
        type: constant.FILE_UPLOAD_SUCCESS,
        data
    }
}
export function uploadFialure() {
    return {
        type: constant.FILE_UPLOAD_FAILURE
    }
}
export function uploadBegin() {
    return {
        type: constant.FILE_UPLOAD_BEGIN
    }
}

export function imageUpload(param) {
    return dispatch => {
        dispatch(uploadBegin())
        const url = '/upload/temp/image/'

        var data = new FormData()
        data.append('file', param.file)
        data.append('user', 'xubaoshi')

        fetch(url, {
            method: 'POST',
            body: data
        }).then(function (response) {
            return response.json()
        }).then(function (json) {
            dispatch(uploadSuccess(json))
        }).then(function (err) {
            console.log(err)
            dispatch(uploadFialure())
        })
    }
}