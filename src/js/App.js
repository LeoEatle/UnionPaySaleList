/**
 * Created by leoeatle on 16/8/16.
 */
import React from 'react';
import {
    render
} from 'react-dom';

import {
    Router,
    Route,
    IndexRoute,
    hashHistory,
} from 'react-router';

import Navbar from './component/Navbar';
import Footer from './component/Footer';


const App = React.createClass({
   render: function () {
       return (
           <div className="container">
               <main className="main">
                   {this.props.children}
               </main>
           </div>
       );
   } 
});

import Detail from './page/Detail';
import Youhui from './page/Youhui';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Youhui} />
            <Route path="/Detail" component={Detail} />
        </Route>
    </Router>
)

document.addEventListener('DOMContentLoaded', () => {
    render(routes, document.getElementById('root'));
});