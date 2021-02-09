import React, { memo, useEffect, useState } from 'react'

import { headerLinks } from '@/common/local-data'
import {getSizeImage} from '@/utils/format-utils'
import {isShowLoginPageAction,checkLoginOutAction} from '@/pages/login/store/actionCreater'

import MoreLogin from '@/pages/login'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { useDispatch, useSelector } from 'react-redux'


export default memo(function MoreAppHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  //控制是否登录
  const { loginInfo,isShowPage } = useSelector(state => ({
    loginInfo: state.getIn(["login", "loginInfo"]),
    isShowPage: state.getIn(["login","isShowPage"])
  }))

  const info = loginInfo && Object.keys(loginInfo).length === 0 ? true : false;
  const url = loginInfo && loginInfo.profile

  useEffect(() => {
    console.log(loginInfo);
    console.log(info);
  })

  const dispatch = useDispatch();

  const isShowLoginPage = () =>{

    dispatch(isShowLoginPageAction(!isShowPage))
  }

  //是否退出登录
  const checkedInLoginout = ()=>{
    const check = window.confirm("是否退出登录？")
    if(check === true){
      dispatch(checkLoginOutAction())
      alert("您已退出登录！")
    }
  }

  return (
    // 使用styled-components组件在最外层包裹
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/todo" className="logo sprite_01"></a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          {
            info ? 
            (<div className="login" onClick={e => { isShowLoginPage() }}>登录</div>) 
            : 
            (
              <div className="user-avator">
                <div className="image" onClick={ e => { checkedInLoginout()}}>
                  <img className="avator" src={getSizeImage(loginInfo.profile.avatarUrl,30)} alt="" />
                </div>
              </div>
            )
          }
        </HeaderRight>
      </div>
      {
        isShowPage ? <MoreLogin/> : null
      }
      <div className="divider"></div>
    </HeaderWrapper>

  )
})
