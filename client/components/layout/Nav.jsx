import React, { PropTypes } from 'react'
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
                    <ul className="nav navbar-nav navbar-right ">
                        <li>
                            <a href="javascript:;">常规</a>
                        </li>
                        <li>
                            <a href="javascript:;">交互</a>
                        </li>
                        <li>
                            <a href="javascript:;">视觉</a>
                        </li>
                        <li>
                            <a href="javascript:;">css</a>
                        </li>
                        <li>
                            <a href="javascript:;">js</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


