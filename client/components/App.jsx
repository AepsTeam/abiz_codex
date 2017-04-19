import React from 'react'
import Menu from './layout/Menu.jsx'
import Nav from './layout/Nav.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div >
                <Nav history={false}></Nav>
                {this.props.children}
                <Menu></Menu>
            </div>
        )
    }
}