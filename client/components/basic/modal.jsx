import React from 'react'
import PropTypes from 'prop-types'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.onClose = this.onClose.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state.title = this.props.modalTitle != '' ? this.props.modalTitle : '提示'
        this.state.content = this.props.modalContent ? this.props.modalContent : '内容为空'
        this.state.sizeClass = this.props.modalSizeClassName ? this.props.modalSizeClassName : ''
        this.state.closeBtnName = this.props.closeBtnName ? this.props.closeBtnName : '取消'
        this.state.saveBtnName = this.props.saveBtnName ? this.props.saveBtnName : '提交'
    }
    onClose() {
        const { submitHandle } = this.props
    }
    onSubmit() {
        const { submitHandle } = this.props
    }
    render() {
        const { title, content, sizeClass, closeBtnName, saveBtnName } = this.state
        return (
            <div className="modal fade" tabindex="-1" role="dialog" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={this.onClose} className="close"><span>×</span></button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            {content}
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={this.onClose} className="btn btn-default">{closeBtnName}</button>
                            <button type="button" onClick={this.onSubmit} className="btn btn-primary">{saveBtnName}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    modalTitle: PropTypes.string,
    closeHandle: PropTypes.func,
    submitHandle: PropTypes.func,
    modalContent: PropTypes.any,
    modalSizeClassName: PropTypes.string,
    closeBtnName: PropTypes.string,
    saveBtnName: PropTypes.string
}