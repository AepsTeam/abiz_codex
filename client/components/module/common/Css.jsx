import React from 'react'
import Basic from './Basic'

export default class Css extends React.Component {
    constructor(props) {
        super(props)
        this.sideBarData = [
            { name: '定义', url: '/codex/common/css/begin' },
            { name: '命名规范', url: '/codex/common/css/namespace' },
            { name: 'HTML规范', url: '/codex/common/css/html' },
            { name: 'Css规范', url: '/codex/common/css/css' },
            { name: '图片规范', url: '/codex/common/css/image' },
            { name: '项目规范', url: '/codex/common/css/pm' }
        ]
    }
    render() {
        return (
            <Basic navData={this.sideBarData} children={this.props.children}></Basic>
        )
    }
}