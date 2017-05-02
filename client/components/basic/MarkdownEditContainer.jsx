import React from 'react'
import Markdown from './MarkdownEdit'
import Modal from './Modal'
import { connect } from 'react-redux'
import { getMD, saveMD } from '../../redux/actions/md'
import { setModalShow, setModalHide } from '../../redux/actions/modal'

function mapStateToProps(state, ownProps) {
    return {
        content: state.get('rootReducer').get('mdReducer').get('mdContent').get('data'),
        showModal: state.get('rootReducer').get('modalReducer').get('modalContent').get('showModal')
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getContent: function (params) {
            dispatch(getMD(params))
        },
        saveContent: function (params) {
            dispatch(saveMD(params, ownProps))
        },
        setModalShow: function () {
            dispatch(setModalShow())
        },
        setModalHide: function () {
            dispatch(setModalHide())
        }
    }
}

class MarkdownEditContainer extends React.Component {
    constructor(props) {
        super(props)
        this.pathname = this.getPath(props.location.pathname)
        this.getPath = this.getPath.bind(this)
        this.content = ''
        this.modalSubmitHandle = this.modalSubmitHandle.bind(this)
        this.closeSubmitHandle = this.closeSubmitHandle.bind(this)
        this.saveHandle = this.saveHandle.bind(this)
    }
    getPath(pathname) {
        const pathArr = pathname.split('/')
        const path = '/' + pathArr.splice(2, pathArr.length - 1).join('/')
        this.pathname = path
        return path
    }
    componentDidMount() {
        const { getContent, location } = this.props
        getContent({ pathname: this.getPath(location.pathname) })
    }
    componentWillReceiveProps(nextProps) {
        const { getContent } = this.props
        if (this.props.location.pathname != nextProps.location.pathname) {
            document.getElementsByTagName('body')[0].scrollTop = 0
            getContent({ pathname: this.getPath(nextProps.location.pathname) })
        }
    }
    closeSubmitHandle() {
        const { setModalHide } = this.props
        setModalHide()
    }
    modalSubmitHandle() {
        const { saveContent } = this.props
        saveContent({ pathname: this.pathname, content: this.content })
    }
    saveHandle(params) {
        const { setModalShow } = this.props
        this.content = params.content
        setModalShow()
    }
    render() {
        const { content, saveContent, showModal } = this.props
        const str = <p>确定修改？</p>
        return (
            <div>
                <Markdown content={content} path={this.pathname} saveHandle={this.saveHandle}></Markdown>
                <Modal isOpen={showModal} modalContent={str} closeHandle={this.closeSubmitHandle} submitHandle={this.modalSubmitHandle}></Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEditContainer)