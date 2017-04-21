import React from 'react'
import SubNav from '../../layout/SubNav'

export default class CommonIndex extends React.Component {
    constructor(props) {
        super(props)
        this.subNavData = [
            { name: '常规', url: '/codex/common/regular/frontier/' },
            { name: '交互', url: '/codex/common/interaction/frontier/' },
            { name: '视觉', url: '/codex/common/vision/frontier/' },
            { name: 'css', url: '/codex/common/css/frontier/' },
            { name: 'js', url: '/codex/common/js/frontier/' }
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <SubNav navData={subNavData}></SubNav>
                {this.props.children}
            </div>
        )
    }
}