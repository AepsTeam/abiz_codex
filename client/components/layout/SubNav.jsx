import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

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
                        <a href="javascript:;" className="navbar-brand">
                            <strong>{title}</strong>
                        </a>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="nav navbar-nav navbar-right">
                        {navDomStr}
                    </ul>
                </div>
            </div>
        )
    }
}

SubNav.propTypes = {
    navData: PropTypes.array,
    title: PropTypes.string
}