import React from 'react'
import {connect} from 'react-redux'
import {withRouter,NavLink} from 'react-router-dom'
import {HomeOutlined,UserOutlined,SolutionOutlined} from '@ant-design/icons';
 
class NavBottom extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<footer className='footerNavBox'> 
           <NavLink to='/course'><HomeOutlined /><span>首页</span></NavLink>
           <NavLink to='/mycourse'><SolutionOutlined /><span>我的课程</span></NavLink>
           <NavLink to='/person'><UserOutlined /><span>个人中心</span></NavLink>
        </footer>
    }
}
export default withRouter(connect()(NavBottom));