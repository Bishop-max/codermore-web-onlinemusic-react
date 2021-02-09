import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd';

import { getLoginInfoAction } from './store/actionCreater.js'


import { LoginWrapper } from './style'

export default memo(function Login(props) {

  const { onClick } = props

  // const phoneRef = useRef();
  // const pwdRef = useRef()
  // const dispatch = useDispatch();

  // const login = () => {
  //   const userPhone = phoneRef.current.value
  //   const userPwd = pwdRef.current.value
  //   console.log(phoneRef.current.value, pwdRef.current.value);
  //   if (userPhone == "") {
  //     alert("请输入正确的手机号码")
  //     return
  //   } else if (userPwd == "") {
  //     alert("密码不能为空")
  //     return
  //   }
  //   dispatch(getLoginInfoAction(userPhone, userPwd))
  //   phoneRef.current.value = ""
  //   pwdRef.current.value = ""
  // }

  return (
    <LoginWrapper>
      <div className="code-login">
        <div className="login-header login-layer">
          <span>手机号登录</span>
          <i className="close login-layer" onClick={onClick}></i>
        </div>
        <div className="login-content">
          <div className="login-form">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              
            >
              <Form.Item
                label="手机号码"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </LoginWrapper>
  )
})
