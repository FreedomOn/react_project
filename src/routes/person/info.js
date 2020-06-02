import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'
import action from '../../store/action/index'
class Info extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            baseInfo:[{
                name:'哈哈哈',
                email:'123@qq.com',
                phone:110
            }]
        }
    }
    // 在这里面进行处理
    // componentDidMount(){
    //     let {baseInfo,queryBaseInfo} = this.props;
    //     !baseInfo ? queryBaseInfo() : null
    // }
    render(){
        let {name,email,phone} = this.state.baseInfo[0]
        console.log(name,email,phone,'www')
        console.log(this.state.baseInfo)
        return<div className='personBaseInfo'>
          <p>
              <span>用户名:</span>
              <span>{name}</span>
          </p>
          <p>
              <span>邮箱:</span>
              <span>{email}</span>
          </p>
          <p>
              <span>电话:</span>
              <span>{phone}</span>
          </p>
          <Button type='danger' onClick={ev=>{
              console.log(this.props.history)
            //   直接跳到person/info  去权限校验
              this.props.history.push('/person/login')
          }}>退出登陆</Button>
        </div>
    }
}
export default  withRouter(connect(state=>({...state.person}),action.person)(Info));