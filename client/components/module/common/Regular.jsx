import React from 'react'
import SideBarNav from '../../layout/SideBarNav'

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.sideBarData = [
            { name: '前言', url: '/ued/regular/frontier/' },
            { name: '开始', url: '/ued/regular/begin/' },
            { name: '新人须知', url: '/ued/regular/new/' }
        ]
    }
    render() {
        const { md } = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-offset-1 col-md-2">
                        <SideBarNav navData={this.sideBarData}></SideBarNav>
                    </div>
                    <div className="col-md-8">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
