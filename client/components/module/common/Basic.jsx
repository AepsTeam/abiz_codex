import React from 'react'
import SideBarNav from '../../layout/SideBarNav'

export default class Basic extends React.Component {
    render() {
        const { navData, children } = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-offset-1 col-md-2">
                        <SideBarNav navData={navData}></SideBarNav>
                    </div>
                    <div className="col-md-8">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}