import React from 'react'

export default class extends React.Component {
    render() {
        const { content } = this.props
        return (
            <span id="md">{content}</span>
        )
    }
}