import React, { memo, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {FormValidate} from '@/utils/validation-utils'

import {getLoginInfoAction,isShowLoginPageAction} from './store/actionCreater.js'


import {LoginWrapper} from './style'

export default memo(function Login() {


  const phoneRef = useRef();
  const pwdRef =useRef()
  const dispatch = useDispatch();

  const login = () =>{
    const userPhone = phoneRef.current.value
    const userPwd = pwdRef.current.value
    // console.log(phoneRef);
    // console.log(phoneRef.current.value,pwdRef.current.value);

    // const isCurrentPhone = /^1(3|4|5|6|7|8|9)\d{9}$/.test(userPhone)
    // const isCurrentPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(userPwd)

    // if(!isCurrentPhone){
    //   alert("请输入正确的手机号码！")
    //   phoneRef.current.value = ""
    //   return
    // }else if(!isCurrentPwd){
    //   alert("密码长度必须是6-20位且包含 数字和英文！")
    //   pwdRef.current.value = ""
    //   return
    // }
    if(FormValidate(phoneRef,pwdRef)){
      dispatch(getLoginInfoAction(userPhone,userPwd))
      phoneRef.current.value = ""
      pwdRef.current.value = ""

    }
   
  }

  const closeLoginPage = () =>{
    dispatch(isShowLoginPageAction(false))
  }

  return (
    <LoginWrapper>
      <div className="phone-login">
        <div className="login-header login-layer">
          <span>手机号登录</span>
          <i className="close login-layer" onClick={e =>{ closeLoginPage()}}></i>
        </div>
        <div className="login-content">
          <div className="login-form">
            <div className="phone-wrap">
              <select>
                <option value="中国">+86</option>
                <option value="中国香港">+852</option>
                <option value="中国澳门">+853</option>
              </select>
              <input ref={phoneRef} type="text" placeholder="请输入手机号"/>
            </div>
            <div className="pwd-wrap">
              <input ref={pwdRef} type="password" placeholder="请输入密码" name="" id=""/>
            </div>
            <div className="forget">
              <label htmlFor="auto" className="auto-login">
                <input id="auto" type="checkbox" />
                自动登录
              </label>
              <a href="/abc">忘记密码?</a>
            </div>
            <button className="login-btn sprite_button" onClick={e => { login()}}>登&nbsp;&nbsp;录</button>     
          </div>
          <div className="other-way">
            <div className="left">&lt;&nbsp;&nbsp;其他登录方式</div>
            <div className="right">没有账号?免费注册&nbsp;&nbsp;&gt;</div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  )
})
