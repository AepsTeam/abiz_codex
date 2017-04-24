import React from 'react'

export default class Index extends React.Component{
    render(){
        return (
            <div className="container-fluid pm">
                <div className="row">
                    <div className="col-md-2 col-md-offset-3">
                        <div className="image-wrapper">
                            <a target="_blank" href="http://demo.vemic.com/demos/miccn/2017/gf--MIC%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83--2017-03-08/%E5%B0%81%E9%9D%A2.html">
                                <img src="/images/pm/made_in_china.png" alt="中国制造网"/>
                            </a>
                            <span>中文版</span>
                        </div>
                    </div>

                    <div className="col-md-2 col-md-offset-2">
                        <div className="image-wrapper">
                            <a target="_blank" href="http://demo.vemic.com/demos/abiz/aeps/2016/00/%E4%BC%81%E4%B8%9A%E7%89%88%E4%BA%A4%E4%BA%92%E8%A7%84%E5%88%92%E2%80%942016-03-24/index.html">
                                <img src="/images/pm/youcai.png" alt="百卓优采"/>
                            </a>
                            <span>企业版</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
