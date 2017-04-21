import React from 'react'
export default class SubNav extends React.Component {
    render() {
        const { navData, title } = this.props
        const navDomStr = navData.map((nav, index) =>
            <li key={index}><Link to={nav.url} activeClassName="active">{nav.name}</Link></li>
        )
        return (
            <div className="row">
                <div className="col-md-offset-1 col-md-2">
                    <div className="navbar-header">
                        <a href="javascript:;" className="navbar-brand">{title}</a>
                    </div>
                </div>
                <div className="col-md-8">
                    {navDomStr}
                </div>
            </div>
        )
    }
}