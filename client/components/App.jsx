import React from 'react'
import Nav from './layout/Nav.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div >
                <Nav></Nav>
                {this.props.children}
            </div>
        )
    }
}