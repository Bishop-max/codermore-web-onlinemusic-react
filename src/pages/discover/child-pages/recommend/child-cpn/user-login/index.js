import { UserLoginWrapper } from './style'

import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import {isShowLoginPageAction} from '@/pages/login/store/actionCreater'

export default memo(function UserLogin() {

  const dispatch = useDispatch();

  const { loginInfo } = useSelector(state => ({
    loginInfo: state.getIn(["login", "loginInfo"])
  }))

  const info = loginInfo && Object.keys(loginInfo).length === 0 ? true : false

  const openLoginPage = () =>{
    dispatch(isShowLoginPageAction(true))
  }

  return (
    <UserLoginWrapper>
      {
        info ? (
          <div className="un-login">
            <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <span className="btn sprite_02" onClick={e => {openLoginPage()}}>用户登录</span>
          </div>
        ) :
          (
            <div className="logined sprite_02">
              <div className="login-top" >
                <a className="image" href="/abc">
                  <img src={getSizeImage(loginInfo.profile.avatarUrl, 80)} alt="" />
                </a>
                <div className="info">
                  <h4 className="username">{loginInfo.profile.nickname}</h4>
                  <div className="level ">
                    <i className="level-icon sprite_icon3">{loginInfo.profile.eventCount}</i>
                  </div>
                  <div className="btn ">
                    <i className="sprite_button">签&nbsp;到</i>
                  </div>
                </div>
              </div>
              <div className="login-bottom">
                <div className="item event">
                  <p>{loginInfo.profile.eventCount}</p>
                  <span>动态</span>
                </div>
                <div className="item follow">
                  <p>{loginInfo.profile.follows}</p>
                  <span>关注</span>
                </div>
                <div className="item fan">
                  <p>{loginInfo.profile.followeds}</p>
                  <span>粉丝</span>
                </div>
              </div>
            </div>
          )
      }
    </UserLoginWrapper>
  )
})
