/**
 * Created by leoeatle on 16/8/16.
 */
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import SaleList from '../component/SaleList';

const  Youhui = React.createClass({
    render: function () {
        return (
            <div className="main">
                <Navbar></Navbar>
                <SaleList>
                    
                </SaleList>
                <Footer></Footer>
            </div>
        );
    }
});

export default Youhui;