import React, { Component } from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './images/logo.png'
import './css/login.less'

const {Item} = Form

export default class Login extends Component {
    // 表单回调 
    onFinish = () =>{
        console.log('表单提交了');
    }
    // 密码的自定义验证
    pwdValidator = (rule, value) =>{
        if(!value){
           return Promise.reject('密码不能为空')
        } else if(value.length < 6){
           return Promise.reject('密码最少为6位')
        } else if(value.length > 16){
            return Promise.reject('密码最少为6位')
         } else if(!(/^\w+$/).test(value)){
            return Promise.reject('密码最少为6位')
         }
        return Promise.resolve()
    }

    render() {
        return (
            <div id="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>商品管理系统</h1>
                </header>
                <div className="login-content">
                    <h1>用户登录</h1>
                  <Form 
                        name="normal_login" 
                        className="login-form"
                        onFinish={this.onFinish}
                   >
                    <Item
                        name="Username"
                        rules={[
                            { required: true, message: '请输入用户名',},
                            { max:16, message:'用户名不能超过16位'},
                            { min:6, message:'用户名最少为6位'},
                            { pattern:/^\w+$/, message:'用户名必须是字母、数字或下划线组成'}
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Item>
                    <Item
                        name="password"
                        rules={[
                           { validator: this.pwdValidator},
                        ]}
                      >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                        />
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          登录
                        </Button>
                    </Item>
                  </Form>
                </div>
            </div>
        )
    }
}
