import React from 'react'
import Basic from './Basic'

export default class Interaction extends React.Component {
    constructor(props) {
        super(props)
        this.sideBarData = [
            { name: '定义', url: '/codex/common/interaction/define' },
            { name: '基本原则', url: '/codex/common/interaction/basic_principle' },
            { name: '设计原理', url: '/codex/common/interaction/design_principle' },
            { name: '产出及规则', url: '/codex/common/interaction/output_rules' }
        ]
    }
    
    render() {
        const { location } = this.props
        return (
            <Basic navData={this.sideBarData} children={this.props.children} pathname={location.pathname}></Basic>
        )
    }
}