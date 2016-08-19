/**
 * Created by leoeatle on 16/8/16.
 */
import React from 'react';
import Filter from './Filter';

const  Navbar = React.createClass({
    render: function () {
        return(
            <nav className="NavBar">
                <ul className="TopBar">
                    <form>
                    <li>
                        <select name="cities" className="cities">
                            <option value ="北京">北京</option>
                            <option value ="广州">广州</option>
                            <option value="上海">上海</option>
                            <option value="深圳">深圳</option>
                        </select>
                    </li>
                    <li >
                        <input type="search" name="search" size="20" className="search_bar" placeholder="请输入查询内容"/>
                    </li>
                    </form>
                </ul>
                <Filter>

                </Filter>

            </nav>
        );
    }
});

export default Navbar;