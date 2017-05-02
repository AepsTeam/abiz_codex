import React from 'react'
import Markdown from './MarkdownPreview'
import { connect } from 'react-redux'
import { getMD } from '../../redux/actions/md'


function mapStateToProps(state, ownProps) {
    return {
        content: state.get('rootReducer').get('mdReducer').get('mdContent').get('data')
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getContent: function (params) {
            params = Object.assign({}, params, { tab: ownProps.params.tab })
            dispatch(getMD(params))
        }
    }
}

class MarkdownContainer extends React.Component {
    componentDidMount() {
        const { getContent, location } = this.props
        getContent({pathname: location.pathname})
    }
    componentWillReceiveProps(nextProps) {
        const { getContent } = this.props
        if (this.props.params.tab != nextProps.params.tab) {
            document.getElementsByTagName('body')[0].scrollTop = 0
            getContent({pathname: nextProps.location.pathname})
        }
    }
    render() {
        const { content } = this.props
        return (
            <Markdown content={content}></Markdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownContainer)