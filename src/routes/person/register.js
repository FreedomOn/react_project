import React from 'react'
import {connect} from 'react-redux'
class Register extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<div>
          注册
        </div>
    }
}
export default connect()(Register);