import React, { PropTypes } from 'react'
import {Link} from 'react-router'
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
                        <a href="javascript:;" className="navbar-brand">ABIZ_UED</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/ued/regular/">常规</Link>
                        </li>
                        <li>
                            <Link to="/ued/interaction/">常规</Link>
                        </li>
                        <li>
                            <Link to="/ued/vision/">视觉</Link>
                        </li>
                        <li>
                            <Link to="/ued/css/">css</Link>
                        </li>
                        <li>
                            <Link to="/ued/js/">js</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


