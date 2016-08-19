/**
 * Created by leoeatle on 16/8/17.
 */
import React from 'react';

const  Filter = React.createClass({
    render: function () {
        return (
            <div className="filter">
                <div className="DropMenu">
                    全部商户
                    <div className="togglePanel">

                    </div>
                </div>

                <div className="DropMenu">
                    全部商圈
                    <div className="togglePanel">

                    </div>
                </div>
                <div className="DropMenu">
                    默认排序
                    <div className="togglePanel">
                        
                    </div>
                </div>
            </div>
        );
    }
});

export default Filter;