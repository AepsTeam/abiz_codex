import React from 'react'
import classNames from 'classNames'

export default class Panel extends React.Component{
    render(){
        return (
            <div className={classNames('panel','panel-' + this.props.skin)}>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.content}
                </div>
            </div>
        )
    }
}