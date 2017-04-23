import React from 'react'
import SubNav from '../../layout/SubNav'

export default class CommonIndex extends React.Component {
    constructor(props) {
        super(props)
        this.subNavData = [
            { name: '常规', url: '/codex/common/regular/' },
            { name: '交互', url: '/codex/common/interaction/' },
            { name: '视觉', url: '/codex/common/vision/' },
            { name: 'css', url: '/codex/common/css/' },
            { name: 'js', url: '/codex/common/js/' }
        ]
        this.title = '常规'
    }
    render() {
        return (
            <div className="container-fluid">
                <SubNav navData={this.subNavData} title={this.title}></SubNav>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}