import React from 'react'
import Markdown from './MarkdownEdit'
import { connect } from 'react-redux'
import { getMD, saveMD } from '../../redux/actions/md'


function mapStateToProps(state, ownProps) {
    return {
        content: state.get('rootReducer').get('mdReducer').get('mdContent').get('data')
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getContent: function (params) {
            dispatch(getMD(params))
        },
        saveContent: function (params) {
            dispatch(saveMD(params))
        }
    }
}

class MarkdownEditContainer extends React.Component {
    constructor(props) {
        super(props)
        this.pathname = this.getPath(props.location.pathname)
        this.getPath = this.getPath.bind(this)
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
    render() {
        const { content, saveContent } = this.props
        return (
            <Markdown content={content} path={this.pathname} saveHandle={saveContent}></Markdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownEditContainer)