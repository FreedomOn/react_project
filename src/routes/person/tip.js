import React from 'react'
import {connect} from 'react-redux'
import {Alert,Button} from 'antd'
import {withRouter} from 'react-router-dom'
class Tip extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<div>
          <Alert message="未登录提醒" type="warning" description="
            你还没登陆，登陆之后才可以查看信息
          "/>
          <Button type="dashed" onClick={ev=>{
              console.log(this.props.history,'11')
              this.props.history.push('/person/login')
          }}>立即登陆</Button>
          <Button type="dashed" onClick={ev=>{
              this.props.history.push('/person/register')
          }}>立即注册</Button>
        </div>
    }
}
export default withRouter(connect()(Tip));