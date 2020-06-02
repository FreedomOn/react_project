// base
import React from 'react';
import ReactDOM from 'react-dom'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
// redux
import store from './store/index'
import {Provider} from 'react-redux'
// import css
import './static/css/common.less'
// import component
import NavTop from './component/NavTop'
import NavButtom from './component/NavBottom'
import Home from './routes/Home'
import MyCourse from './routes/MyCourse'
import Person from './routes/Person'
// antd
import {ConfigProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
// 完全汉化 解决日历月份没有汉化的bug
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')


ReactDOM.render(
  <Provider store = {store}>
      <HashRouter>
         <ConfigProvider  locale={zh_CN}>
            <NavTop></NavTop>
            <main className='container'>
                <Switch>
                  <Route path='/course'  component={Home}></Route>
                  <Route path='/mycourse' component={MyCourse}></Route>
                  <Route path='/person' component={Person}></Route>
                  {/* 如过不是以上情况 都跳转到首页 */}
                  <Redirect  to='/course'></Redirect>

                </Switch>
            </main>
            <NavButtom></NavButtom>
         </ConfigProvider>
      </HashRouter>
  </Provider>, document.getElementById('root')
)
