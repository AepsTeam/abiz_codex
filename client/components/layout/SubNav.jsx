import React from 'react'
import { Link } from 'react-router'

export default class SubNav extends React.Component {
    render() {
        const { navData } = this.props
        const navStyle = { width: '200px' }
        const navDomStr = navData.map((nav,index) =>
            <li key={index}><Link to={nav.url} >{nav.name}</Link></li> 
        )
        return (
            <ul className="nav nav-pills nav-stacked" style={navStyle}>
                {navDomStr}
            </ul>
        )
    }
}
