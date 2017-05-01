import React from 'react'
import Nav from './layout/Nav.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        if (props.location.pathname.indexOf('/edit') == 0) {
            this.showFlag = false
        } else {
            this.showFlag = true
        }

    }
    render() {
        return (
            <div >
                <Nav showFlag={this.showFlag}></Nav>
                {this.props.children}
            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
        const nextPath = nextProps.location.pathname
        const currentPath = this.props.location.pathname
        if (nextPath.indexOf('/edit') == 0 && currentPath.indexOf('/edit') == -1) {
            this.showFlag = false
        } else if (nextPath.indexOf('/edit') == -1 && currentPath.indexOf('/edit') == 0) {
            this.showFlag = true
        }

    }
}