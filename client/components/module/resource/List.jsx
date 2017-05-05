import React from 'React'
import '../../../style/sass/module/resource.scss'

export default class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const listDom=this.props.lists.map((item,index) =>
            <div className="col-md-3" key={index}>
                <div className="resource-box">
                    <a href={item.href}>
                        <img src={item.imgSrc} alt={item.name}/>
                        <p>{item.name}</p>
                    </a>
                </div>
            </div>
        )
        return(
            <div className="row">
                {listDom}
            </div>
        )
    }
}