## 项目描述
1、项目名称
后台管理系统登录注册页面
2、项目功能
注册，登录
3、负责人
李洋

## 如何运行
1、开发环境配置
    "@ant-design/icons": "^4.4.0",
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.3",
    "@testing-library/user-event": "^12.6.0",
    "antd": "^4.10.3",
    "axios": "^0.21.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"

2、开发&发布 命令
    本地开发  npm run start
    发布    npm run build

3、接口API
    登录接口
    url:http://81.68.155.14:3302/user/login
    参数：username,password
    请求方式：PSOT
    Content-Type： application/json
    注册接口
    url:http://81.68.155.14:3302/user/register
    参数：username,password
    请求方式：PSOT
    Content-Type： application/json
    注销接口
    url:http://81.68.155.14:3302/user/logout
    请求方式：GET
    注：用户名长度为6~12位

## 各页面及描述

页面目录        页面描述        参数

login           登录页          无

register        注册页          无

## 备注

由于跨域问题未能成功解决，注销按钮暂时只会显示为成功登录