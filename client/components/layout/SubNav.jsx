import React from 'react'

export default class SubNav extends React.Component{
    render(){
        return(
            <ul className="nav nav-pills nav-stacked" style={width:'200px'}>
                <li><a href="javascript:;">前言</a></li>
                <li><a href="javascript:;">开始</a></li> 
                <li><a href="javascript:;">新人须知</a></li>                     
            </ul>
        )
    }
}
