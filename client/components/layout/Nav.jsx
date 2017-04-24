import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../../style/sass/layout.scss'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav>
                <div className="container-fluid bg-primary ">
                    <div className="navbar-header">
                        <Link to="/home" className="navbar-brand">Codex</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/codex/common/" activeClassName="active">通用规范</Link>
                        </li>
                        <li>
                            <Link to="/codex/pm/" activeClassName="active">项目规范</Link>
                        </li>
                        <li>
                            <Link to="/codex/plan/" activeClassName="active">方案</Link>
                        </li>
                        <li>
                            <Link to="/codex/resource/" activeClassName="active">资源</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


