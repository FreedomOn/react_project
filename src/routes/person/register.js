import React from 'react'
import {connect} from 'react-redux'
import {Form,Input,Select,Checkbox,Button,} from 'antd';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const RegistrationForm = () => {
    const [form] = Form.useForm();
    const onFinish = values => {
      console.log('Received values of form: ', values);
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: 'email',
              message: '请输入邮箱地址',
            },
            {
              required: true,
              message: '请输入正确的邮箱地址',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
              { required: true, message: '请输入手机号!' },
            ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

      
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认你的密码!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的不一致!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
       
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
          ]}
         
        >
          <Checkbox>
            我同意 <a href="#!">协议</a>
          </Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
};
class Register extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {}
    }
    render(){
        return<section className='personLoginBox'>
          <RegistrationForm />
        </section>
    }
}
export default connect()(Register);