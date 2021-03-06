import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, Modal,Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import axios from 'axios'

const NormalLoginForm = (props) => {
    
    const onFinish = values => {
      // console.log(props)
      console.log('Received values of form: ', values);
      axios.get('login.json').then(({data})=>{
        console.log(data[0].loginuser[0].name,'data')
        let user = data[0].loginuser[0].name,
        psw = data[0].loginuser[0].psw
        if(values.username === user &&values.password ===psw){ 
          console.log('susccess')
          props.props.history.push('/person')
          localStorage.setItem('login',data[0].code)
        }else{
          // 失败的时候弹窗提示
          countDown()
        }
           
      })      
    };
    
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="#!">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
            </Button>
          Or <Link to='/person/register'>注册!</Link>
        </Form.Item>
      </Form>
    );
  };

class Login extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<div className='personLoginBox'>
            <NormalLoginForm  props={this.props}/>
        </div> 
    }
}
function countDown() {
    const modal = Modal.error({
      title: '登陆失败',
      content: '账号密码不对哦',
    });
   
    setTimeout(() => {
      modal.destroy();
    },  3000);
  }
export default connect()(Login);