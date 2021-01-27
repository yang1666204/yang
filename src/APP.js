import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {Route} from 'react-router-dom';
import './css/APP.css';
class APP extends React.Component {
    render() {
        return (
            <div>
                <div className='Container'>
                    <div className='topContent'>
                        <img className="antd_pic" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                        <h1 className="title">后台管理系统</h1>
                    </div>
                    {/* exact表示严格匹配，否则路由/对应的组件在匹配其他路由的时候也会显示出来 */}
                    <Route exact path='/' component={Login}/>
                    <Route path='/Register' component={Register}/>
                </div>
            </div>
        )
    }
}
export default APP;