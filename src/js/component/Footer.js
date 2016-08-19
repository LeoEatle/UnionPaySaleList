/**
 * Created by leoeatle on 16/8/16.
 */
import React from 'react';

const  Footer = React.createClass({
    render: function () {
        let footer_style = {

        };

        return (
                <div className="footer">
                    <li>精选</li>
                    <li>优惠</li>
                    <li>生活</li>
                    <li>卡管家</li>
                    <li>我的</li>
                </div>
            );
    }
});

export default Footer;