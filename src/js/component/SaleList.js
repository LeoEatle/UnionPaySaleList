/**
 * Created by leoeatle on 16/8/17.
 */

import React from 'react';


const  SaleList = React.createClass({
    getInitialState(){
      return {
          currentPage : 1,
          couponList :[],
          loading: false,
          windowHeight : window.innerHeight,
          windowWidth: window.innerWidth,
          scrollTop:  document.documentElement.scrollTop

      }
    },
    componentDidMount(){
        //console.log($('coupon-mchnt-nm'));
        this.getData();
        $(".testHeight").hide();
        window.addEventListener('scroll',
            (e)=>{

                let pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
                let viewportHeight = window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight || 0;
                let scrollHeight = window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop || 0;
                this.setState({
                    pageHeight: "Math.max(document.body.scrollHeight,document.body.offsetHeight"+pageHeight,
                    viewportHeight: "window.innerHeight ||document.documentElement.clientHeight ||document.body.clientHeight || 0: "+viewportHeight,
                    scrollHeight: "window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop || 0"+scrollHeight
                });
                if(this.state.loading==false){
                    console.log("test");
                    if(pageHeight-scrollHeight-viewportHeight<=10){
                        console.log("加载另一页");
                        $(".loading").show();
                        //使页码+1
                        this.setState({
                            currentPage: this.state.currentPage+1,
                            loading: true
                        })

                        this.getData()
                    }
                }
            })
    },
    getData(){
        let url = 'https://youhui.95516.com/wm-non-biz-web/restlet/payBill/allBillList?cityCd=310000&isSeckill=&bizAreaCd=&firstTypeCd=2&secondTypeCd=&orderType=4&cardIssusers=&cardLevel=&pageSize=9&version=1.0&source=1';
            $.ajax({
            type: 'GET',
            url:url,
            beforeSend: ()=>{

            },
            //url:"https://youhui.95516.com/wm-non-biz-web/restlet/payBill/hotBillList?cityCd=310000&billTp=0&size=9&version=1.0&source=1"
            success:(data)=>{
                console.log(data.data);
                this.setState({
                    couponList : this.state.couponList.concat(data.data)
                });

                //this.state.couponList = data.data;
            },
            error: (err)=>{
                $(".loading").innerHTML("请求出错");
                console.log(err);
            },
            complete:()=>{
                this.setState({
                    loading: false
                })
            },

            data: {
                currentPage: this.state.currentPage
            },
        });
    },
    render: function () {
        return (
            <div className="SaleList">
                {this.state.couponList.map(
                    (coupon, index)=>{
                        //console.log(coupon);
                        let imgUrlPre = "https://youhui.95516.com/"
                        return (
                        <div key={index} className="coupon-block">
                            <a >
                                <img className="coupon-block-bg" src={imgUrlPre+coupon.billPicPath}/>
                                <div className="coupon-info">
                                    <div className="coupon-mchnt-nm fl">
                                        {coupon.ticketNm}
                                    </div>
                                    <div className="coupon-price">
                                        <span className="origin-price">
                                            {"原价: "+coupon.originPrice}
                                        </span>
                                        <span className="sale-price">
                                            {"现价: "+coupon.salePrice}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="remain-number">
                                            {"剩余数量: "+coupon.leftNum}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>)
                    }
                )}


                <div className="testHeight">
                    <h1>
                        pageHeight : {this.state.pageHeight};
                        viewportHeight: {this.state.viewportHeight};
                        scrollHeight: {this.state.scrollHeight};
                    </h1>
                </div>
                <div className="loading">
                    正在加载...
                </div>
            </div>
        );
    }
});

export default SaleList;