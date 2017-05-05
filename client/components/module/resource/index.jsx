import React from 'react'
import List from './List'

export default class Index extends React.Component{
    constructor(props){
        super(props)
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
                        imgSrc:'http://www.alloyteam.com/favicon.ico',
                        href:'http://www.alloyteam.com/',
                        name:'腾讯web'
                    },
                    {
                        imgSrc:'http://qqfe.org/favicon.ico',
                        href:'http://qqfe.org/',
                        name:'腾讯FERD'
                    },
                    {
                        imgSrc:'http://www.alloyteam.com/favicon.ico',
                        href:'http://www.alloyteam.com/',
                        name:'AlloyTeam'
                    },
                    {
                        imgSrc:'https://75team.com/favicon.ico',
                        href:'https://75team.com/',
                        name:'奇舞团'
                    },
                    {
                        imgSrc:'http://taobaofed.org/favicon.ico',
                        href:'http://taobaofed.org/',
                        name:'淘宝FED'
                    },
                    {
                        imgSrc:'http://fex.baidu.com/favicon.ico',
                        href:'http://fex.baidu.com/',
                        name:'百度FEX'
                    },
                    {
                        imgSrc:'http://nec.netease.com/favicon.ico',
                        href:'http://nec.netease.com/',
                        name:'网易NEC'
                    },
                    {
                        imgSrc:'http://beta.caniuse.com/favicon.ico',
                        href:'http://beta.caniuse.com/',
                        name:'Can I use'
                    }
                ]
            },
            {
                title:'行业博客',
                list:[
                    {
                        imgSrc:'http://cdc.tencent.com/favicon.ico',
                        href:'http://cdc.tencent.com/',
                        name:'腾讯CDC'
                    },
                    {
                        imgSrc:'http://isux.tencent.com/favicon.ico',
                        href:'http://isux.tencent.com/',
                        name:'腾讯ISUX'
                    },
                    {
                        imgSrc:'http://mxd.tencent.com/favicon.ico',
                        href:'http://mxd.tencent.com/',
                        name:'腾讯MXD'
                    },
                    {
                        imgSrc:'http://tgideas.qq.com/favicon.ico',
                        href:'http://tgideas.qq.com/',
                        name:'腾讯TGideas'
                    },
                    {
                        imgSrc:'http://www.aliued.com/favicon.ico',
                        href:'http://www.aliued.com/',
                        name:'阿里UED'
                    },
                    {
                        imgSrc:'http://ued.alipay.com/favicon.ico',
                        href:'http://ued.alipay.com/',
                        name:'支付宝UED'
                    },
                    {
                        imgSrc:'http://mux.baidu.com/favicon.ico',
                        href:'http://mux.baidu.com/',
                        name:'百度UXC'
                    },
                    {
                        imgSrc:'http://ue.baidu.com/favicon.ico',
                        href:'http://ue.baidu.com/',
                        name:'百度UE讲堂'
                    },
                    {
                        imgSrc:'http://uedc.163.com/favicon.ico',
                        href:'http://uedc.163.com/',
                        name:'网易UEDC'
                    },
                    {
                        imgSrc:'http://jdc.jd.com/favicon.ico',
                        href:'http://jdc.jd.com/',
                        name:'京东JDC'
                    },
                    {
                        imgSrc:'https://aotu.io/favicon.ico',
                        href:'https://aotu.io/',
                        name:'凹凸实验室'
                    },
                    {
                        imgSrc:'https://design.google.com/favicon.ico',
                        href:'https://design.google.com/',
                        name:'Google Design'
                    }
                ]
            },
            {
                title:'行业资讯',
                list:[
                    {
                        imgSrc:'http://36kr.com/favicon.ico',
                        href:'http://36kr.com/',
                        name:'36kr'
                    },
                    {
                        imgSrc:'https://www.huxiu.com/favicon.ico',
                        href:'https://www.huxiu.com/',
                        name:'虎嗅'
                    },
                    {
                        imgSrc:'http://www.ifanr.com/favicon.ico',
                        href:'http://www.ifanr.com/',
                        name:'爱范儿'
                    },
                    {
                        imgSrc:'http://www.leiphone.com/favicon.ico',
                        href:'http://www.leiphone.com/',
                        name:'雷锋网'
                    },
                    {
                        imgSrc:'http://www.zaodula.com/favicon.ico',
                        href:'http://www.zaodula.com/',
                        name:'早读课'
                    },
                    {
                        imgSrc:'http://www.yixieshi.com/favicon.ico',
                        href:'http://www.yixieshi.com/',
                        name:'互联网的一些事'
                    },
                    {
                        imgSrc:'http://www.cnbeta.com/favicon.ico',
                        href:'http://www.cnbeta.com/',
                        name:'cnBeta'
                    },
                    {
                        imgSrc:'https://www.producthunt.com/favicon.ico',
                        href:'https://www.producthunt.com/',
                        name:'ProductHunt'
                    }
                ]
            },
            {
                title:'工具资源',
                list:[
                    {
                        imgSrc:'http://tongji.baidu.com/favicon.ico',
                        href:'http://tongji.baidu.com/data/browser',
                        name:'百度流量研究院'
                    },
                    {
                        imgSrc:'http://hao.199it.com/favicon.ico',
                        href:'http://hao.199it.com/',
                        name:'大数据导航'
                    },
                    {
                        imgSrc:'http://designguidelines.co/favicon.ico',
                        href:'http://designguidelines.co/index.html',
                        name:'设计规范索引'
                    },
                    {
                        imgSrc:'http://www.17ziti.com/favicon.ico',
                        href:'http://www.17ziti.com/',
                        name:'字体之家'
                    },
                    {
                        imgSrc:'https://infogr.am/favicon.ico',
                        href:'https://infogr.am/',
                        name:'infogr'
                    },
                    {
                        imgSrc:'http://codepen.io/favicon.ico',
                        href:'http://codepen.io/',
                        name:'codepen'
                    },
                    {
                        imgSrc:'https://www.zybuluo.com/favicon.ico',
                        href:'https://www.zybuluo.com/mdeditor',
                        name:'Markdown'
                    },
                    {
                        imgSrc:'http://weibo.com/favicon.ico',
                        href:'http://weibo.com/1773655610/CqTYv5xOO?type=comment',
                        name:'Gif录屏'
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
