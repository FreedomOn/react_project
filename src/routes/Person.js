import React from 'react'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import Info from './person/info'
import Login from './person/login'
import Tip from './person/tip'
import Register from './person/register'

// api
// import {checkLogin} from '../api/person'
import '../static/css/person.less'
class Person extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            islogin:true
        }
    }
    // async componentDidMount(){
    //     let result = await checkLogin(),
    //     islogin = parseFloat(result.code) === 0? true:false;
    //     this.setState({islogin})
    // }
    componentWillReceiveProps(){
        // 更新
        console.log(2)
    }
    render(){
        console.log(1111)
        return<section>
          <Switch>
              {/* 路由的验证和渲染是同步的，不允许在校验中出现异步，语法不支持这样操作 */}
              {/* <Route path='/person/info' render = {()=>{
                  if(this.state.islogin){
                    return<Info></Info>
                  }
                  return <Tip></Tip>
              }}> </Route> */}
              <Route path='/person/info' render={()=>{
                  localStorage.setItem("login", this.state.islogin);
                  let item = localStorage.getItem('login')
                 if(item === 'false'){
                    //  基于render返回的组件 不是受路由管控组件
                     return<Info></Info>
                 }
                 return <Tip></Tip>
              }}></Route>
              <Route path='/person/login' component={Login}></Route>
              <Route path='/person/register' component={Register}></Route>
              <Redirect from='/person' to='/person/info'></Redirect>
          </Switch>
        </section>
    }
}
export default connect()(Person);