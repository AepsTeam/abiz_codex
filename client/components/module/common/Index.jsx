import React from 'react'
import SubNav from 'components/layout/SubNav'

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
        this.titleObj = {regular:'常规',interaction:'交互',vision:'视觉',css:'css',js:'js'}
        this.getSubTitle = this.getSubTitle.bind(this)
        this.title = this.getSubTitle(this.props)
    }
    getSubTitle(props){
        const str = props.location.pathname.split('/')[3]
        return this.titleObj[str]
    }
    componentWillReceiveProps(nextProps){
        this.title = this.getSubTitle(nextProps)
    }
    render() {
        return (
            <div className="container">
                <SubNav navData={this.subNavData} title={this.title}></SubNav>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}