import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.onClose = this.onClose.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            title: this.props.modalTitle ? this.props.modalTitle : '提示',
            content: this.props.modalContent ? this.props.modalContent : '内容为空',
            sizeClass: this.props.modalSizeClassName ? this.props.modalSizeClassName : '',
            closeBtnName: this.props.closeBtnName ? this.props.closeBtnName : '取消',
            saveBtnName: this.props.saveBtnName ? this.props.saveBtnName : '提交',
            isOpen: this.props.isOpen
        }
    }
    onClose() {
        const { closeHandle } = this.props
        this.setState({ isOpen: false })
        closeHandle();
    }
    onSubmit() {
        const { submitHandle } = this.props
        this.setState({ isOpen: false })
        submitHandle();
    }
    componentWillReceiveProps(nextProps) {
        const { isOpen } = this.state
        if (isOpen !== nextProps.isOpen) {
            this.setState({ isOpen: nextProps.isOpen })
        }
    }
    render() {
        const { title, content, sizeClass, closeBtnName, saveBtnName, isOpen } = this.state
        const inClass = isOpen ? 'in' : ''
        const modalStyle = isOpen ? { display: 'block' } : { display: 'none' }
        return (
            <div>
                <div className={classNames('modal fade', inClass)} tabIndex="-1" role="dialog" style={modalStyle}>
                    <div className={classNames('modal-dialog', sizeClass)} role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" onClick={this.onClose} className="close"><span>×</span></button>
                                <h4 className="modal-title">{title}</h4>
                            </div>
                            <div className="modal-body">
                                {content}
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.onClose} className="btn btn-default">{closeBtnName}</button>
                                <button type="button" onClick={this.onSubmit} className="btn btn-primary">{saveBtnName}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames('modal-backdrop fade', inClass)} style={modalStyle}></div>
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