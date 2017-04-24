import React from 'react'
import Basic from './Basic'

export default class Vision extends React.Component {
    constructor(props) {
        super(props)
        this.sideBarData = [
            { name: '开始', url: '/codex/common/vision/begin' }
        ]
    }
    render() {
        return (
            <Basic navData={this.sideBarData} children={this.props.children}></Basic>
        )
    }
}