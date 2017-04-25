import React from 'react'
import SideBarNav from '../../layout/SideBarNav'
import { Link } from 'react-router'

export default class Basic extends React.Component {
    render() {
        const { navData, children, pathname } = this.props
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-offset-1 col-md-2">
                        <SideBarNav navData={navData}></SideBarNav>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <Link className="btn btn-primary" to={'/edit' + pathname}> 编辑</Link>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}