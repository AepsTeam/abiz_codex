import React from 'react'
import classNames from 'classnames'

export default class Panel extends React.Component{
    render(){
        const {skin,title,content} = this.props
        return (
            <div className={classNames('panel','panel-' + skin)}>
                <div className="panel-heading">
                    <h3 className="panel-title">{title}</h3>
                </div>
                <div className="panel-body">
                    {content}
                </div>
            </div>
        )
    }
}