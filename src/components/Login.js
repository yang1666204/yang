import React from 'react';
import axios from 'axios';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { message, Input, Form, Button } from 'antd';
import { Link } from 'react-router-dom';
// import './Login.css';
import '../css/Login.css'
import '../css/APP.css';
axios.defaults.withCredentials = true;
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginUrl: 'http://81.68.155.14:3302/user/login',
            logoutUrl: 'http://81.68.155.14:3302/user/logout',
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
    //注销
    hanldeLogout() {
        let { logoutUrl } = this.state;
        axios.get(logoutUrl).then(
            function (res) {
                console.log(res);
                if (res.data.code === 200) {
                    message.success('注销成功！');
                } else {
                    message.error('尚未登录！');
                }
            }
        ).catch(
            function (err) {
                console.log(err)
            }
        )
    }
    //登录
    handleLogin() {
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
            console.log("aa")
            axios({
                method: 'post',
                url: this.state.loginUrl,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    username: this.state.userInfo,
                    password: this.state.password,
                }
            }).then(
                function (res) {
                    console.log(res);
                    if (res.data.code === 200) {
                        message.success('登录成功！')
                    } else {
                        message.error('用户名或密码错误')
                    }
                }
            ).catch(function (err) {
                console.log(err);
            })
        }
    }
    //账号输入
    userInput(e) {
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
                    rules={[
                        {
                            required: true,
                            message: '用户名不能为空!',
                        },
                    ]}
                >
                    <Input onChange={(e) => this.userInput(e)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名：请输入用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '密码不能为空!',
                        },
                    ]}
                >
                    <Input
                        // onPressEnter={() => this.handleLogin()}
                        onChange={(e) => this.passwordInput(e)}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码：请输入密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={() => this.handleLogin()} type="primary" htmlType="submit" className="login-form-button">
                        登录
                </Button>
                    <Link to='/Register'>立即注册</Link>
                    <Button onClick={() => this.hanldeLogout()} danger className="logout" >注销</Button>
                </Form.Item>
            </Form>
        )
    }
}
export default Login;