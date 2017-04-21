import React from 'react'
import Markdown from './Markdown'
import { connect } from 'react-redux'
import { getMD } from '../../redux/actions/md'


function mapStateToProps(state, ownProps) {
    return {
        md: state.get('rootReducer').get('md')
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
        const { getContent } = this.props
        getContent()
    }
    componentWillReceiveProps(nextProps) {
        const { getContent } = this.props
        console.log(nextProps.params.tab)
        if (this.props.params.tab != nextProps.params.tab) {
            document.getElementsByTagName('body')[0].scrollTop = 0
            getContent()
        }
    }
    render() {
        const { md } = this.props
        return (
            <Markdown></Markdown>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownContainer)