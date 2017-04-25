import React from 'react'
import Basic from './Basic'

export default class Js extends React.Component {
    constructor(props) {
        super(props)
        this.sideBarData = [
            { name: '语言规范', url: '/codex/common/js/language' },
            { name: '代码规范', url: '/codex/common/js/code' }
        ]
    }
    render() {
        return (
            <Basic navData={this.sideBarData} children={this.props.children} location={this.props.location}></Basic>
        )
    }
}