import React from 'react'
import Basic from './Basic'

export default class Regular extends React.Component {
    constructor(props) {
        super(props)
        this.sideBarData = [
            { name: '前言', url: '/codex/common/regular/frontier' },
            { name: '开始', url: '/codex/common/regular/begin' },
            { name: '新人须知', url: '/codex/common/regular/new' }
        ]
    }
    render() {
        return (
            <Basic navData={this.sideBarData} children={this.props.children} location={this.props.location}></Basic>
        )
    }
}
