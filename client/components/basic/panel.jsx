import React from 'react'

export default class Panel extends React.Component{
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.item.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.content}
                </div>
            </div>
        )
    }
}