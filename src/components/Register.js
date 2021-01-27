import React from 'react';
import axios from 'axios';
import { Input, Button, Form, message } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../css/APP.css';
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            registerUrl: 'http://81.68.155.14:8080/user/register',
            userInfo: '',
            password: '',
            usernameLength: '',
            flag: {
                number: 8,
                validateStatus: 'success',
                errorMsg: null
            }
        }
    }
    //用户输入
    usernameInput(e) {
        let { value } = e.target;
        let number = value.length;
        this.setState({
            userInfo: value,
            usernameLength: number
        })
    }
    //密码输入
    passwordInput(e) {
        let { value } = e.target;
        this.setState({
            password: value
        })
    }
    //注册
    handleRegister() {
        var { usernameLength } = this.state;
        if(usernameLength === 0){
            this.setState({
                flag: {
                    number: usernameLength,
                    validateStatus: 'error',
                    errorMsg: '用户名不能为空！'
                }
            })
        }else if (usernameLength < 6 || usernameLength > 12) {
            this.setState({
                flag: {
                    number: usernameLength,
                    validateStatus: 'error',
                    errorMsg: '账号长度应为6~12位，请重新输入！'
                }
            })
        } else {
            this.setState({
                flag: {
                    number: usernameLength,
                    validateStatus: 'success',
                    errorMsg: null
                }
            })
            axios.post(
                this.state.registerUrl,
                {
                    username: this.state.userInfo,
                    password: this.state.password
                }
            ).then(
                function (res) {
                    console.log(res)
                    if (res.data.code === 200) {
                        message.success('注册成功！')
                    } else {
                        message.error('用户已存在')
                    }
                }
            ).catch(
                function (err) {
                    console.log(err)
                }
            )
        }
    }
    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
            >
                <Form.Item
                    name="username"
                    validateStatus={this.state.flag.validateStatus}
                    help={this.state.flag.errorMsg}
                    rules={[{ required: true, message: '用户名不能为空!' }]}
                >
                    <Input onChange={(e) => this.usernameInput(e)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名：请输入用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '密码不能为空!' }]}
                >
                    <Input
                        onChange={(e) => this.passwordInput(e)}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码：请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => this.handleRegister()} type="primary" htmlType="submit" className="login-form-button">
                        注册
        </Button>
        Or <Link to='/'>返回登录</Link>
                </Form.Item>
            </Form>

        )
    }
}
export default Register;