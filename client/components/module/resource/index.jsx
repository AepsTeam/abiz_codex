import React from 'react'
import List from './List'

export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.resourceTitle=['常用入口','交互设计','视觉设计','前端开发','行业博客','行业资讯','工具资源']
        this.resourceData=[
            {
                title:'常用入口',
                list:[
                    {
                        imgSrc:'http://demo.vemic.com/favicon.ico',
                        href:'http://demo.vemic.com/adl/public/version.php',
                        name:'Demo库'
                    },
                    {
                        imgSrc:'https://www.teambition.com/favicon.ico',
                        href:'https://www.teambition.com/',
                        name:'Teambition'
                    },
                    {
                        imgSrc:'http://www.iconfont.cn/favicon.ico',
                        href:'http://www.iconfont.cn/',
                        name:'iconfont'
                    },
                    {
                        imgSrc:'http://naotu.baidu.com/favicon.ico',
                        href:'http://naotu.baidu.com/',
                        name:'百度脑图'
                    },
                    {
                        imgSrc:'http://demo.vemic.com/favicon.ico',
                        href:'http://demo.vemic.com/picture/index.php?/categories/flat',
                        name:'图库'
                    },
                    {
                        imgSrc:'http://wiki.vemic.com/favicon.ico',
                        href:'http://wiki.vemic.com/confluence/dashboard.action',
                        name:'Wiki'
                    },
                    {
                        imgSrc:'http://jira.vemic.com/favicon.ico',
                        href:'http://jira.vemic.com/secure/Dashboard.jspa',
                        name:'Jira'
                    },
                    {
                        imgSrc:'http://vi.vemic.com/favicon.ico',
                        href:'http://vi.vemic.com/',
                        name:'VI资源'
                    }
                ]
            },
            {
                title:'交互设计',
                list:[
                    {
                        imgSrc:'http://ixdc.org/favicon.ico',
                        href:'http://ixdc.org/',
                        name:'IxDC'
                    },
                    {
                        imgSrc:'http://www.woshipm.com/favicon.ico',
                        href:'http://www.woshipm.com/',
                        name:'人人都是PM'
                    },
                    {
                        imgSrc:'http://www.chanpin100.com/favicon.ico',
                        href:'http://www.chanpin100.com/',
                        name:'产品100'
                    },
                    {
                        imgSrc:'http://www.boxui.com/favicon.ico',
                        href:'http://www.boxui.com/',
                        name:'盒子UI'
                    },
                    {
                        imgSrc:'https://www.mockplus.cn/favicon.ico',
                        href:'https://www.mockplus.cn/blog',
                        name:'Mockplus'
                    },
                    {
                        imgSrc:'http://www.yuanxingku.com/favicon.ico',
                        href:'http://www.yuanxingku.com/',
                        name:'原型库'
                    },
                    {
                        imgSrc:'http://www.iaxure.com/favicon.ico',
                        href:'http://www.iaxure.com/category/axure70tutorial',
                        name:'Axure原创教程'
                    },
                    {
                        imgSrc:'https://www.axure.com.cn/favicon.ico',
                        href:'https://www.axure.com.cn/',
                        name:'Axure官网'
                    }
                ]
            },
            {
                title:'视觉设计',
                list:[
                    {
                        imgSrc:'https://dribbble.com/favicon.ico',
                        href:'https://dribbble.com/',
                        name:'Dribbble'
                    },
                    {
                        imgSrc:'https://www.behance.net/favicon.ico',
                        href:'https://www.behance.net/',
                        name:'Behance'
                    },
                    {
                        imgSrc:'http://www.ui.cn/favicon.ico',
                        href:'http://www.ui.cn/',
                        name:'UI 中国'
                    },
                    {
                        imgSrc:'http://www.zcool.com.cn/favicon.ico',
                        href:'http://www.zcool.com.cn/',
                        name:'站酷'
                    },
                    {
                        imgSrc:'http://huaban.com/favicon.ico',
                        href:'http://huaban.com/',
                        name:'花瓣'
                    },
                    {
                        imgSrc:'http://lapa.ninja/favicon.ico',
                        href:'http://lapa.ninja/',
                        name:'Lapa'
                    },
                    {
                        imgSrc:'http://www.paixin.com/favicon.ico',
                        href:'http://www.paixin.com/',
                        name:'拍信'
                    },
                    {
                        imgSrc:'http://cn.forwallpaper.com/favicon.ico',
                        href:'http://cn.forwallpaper.com/',
                        name:'Wallpaper'
                    }
                ]
            },
            {
                title:'前端开发',
                list:[
                    {
                        imgSrc:'https://github.com/favicon.ico',
                        href:'https://github.com/',
                        name:'GitHub'
                    },
                    {
                        imgSrc:'https://segmentfault.com/favicon.ico',
                        href:'https://segmentfault.com/',
                        name:'SegmentFault'
                    },
                    {
                        imgSrc:'http://stackoverflow.com/favicon.ico',
                        href:'http://stackoverflow.com/',
                        name:'StackOverflow'
                    },
                    {
                        imgSrc:'http://www.w3cplus.com/favicon.ico',
                        href:'http://www.w3cplus.com/',
                        name:'W3CPlus'
                    },
                    {
                        imgSrc:'http://huaban.com/favicon.ico',
                        href:'http://huaban.com/',
                        name:'腾讯web'
                    },
                    {
                        imgSrc:'http://lapa.ninja/favicon.ico',
                        href:'http://lapa.ninja/',
                        name:'腾讯FERD'
                    },
                    {
                        imgSrc:'http://www.paixin.com/favicon.ico',
                        href:'http://www.paixin.com/',
                        name:'AlloyTeam'
                    },
                    {
                        imgSrc:'http://cn.forwallpaper.com/favicon.ico',
                        href:'http://cn.forwallpaper.com/',
                        name:'奇舞团'
                    }
                ]
            }
        ]
        
    }
    render(){
        return (
            <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       {
                        this.resourceData.map((item,index) =>
                           <div className="panel panel-default" key={index}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">{item.title}</h3>
                                </div>
                                <div className="panel-body">
                                    <List lists={item.list}></List>
                                </div>
                          </div>
                       )}
                   </div>
               </div>
               
            </div>
        )
    }
}
