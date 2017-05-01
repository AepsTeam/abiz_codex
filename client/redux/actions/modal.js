import * as constant from '../constant/modal'

export function setModalShow() {
    return {
        type: constant.MODAL_SHOW
    }
}
export function setModalHide() {
    return {
        type: constant.MODAL_HIDE
    }
}