import * as actionType from './config'

import {getLoginInfo,getLoginOut} from '@/network/login'

export const isShowLoginPageAction = (isShowPage) =>{
  return {
    type:actionType.IS_SHOW_LOGIN_PAGE,
    isShowPage
  }
}

export const changeLoginInfoAction = (loginInfo)=>{
  return {
    type:actionType.CHANGE_LOGIN_INFO,
    loginInfo
  }
}

export const changeTokenAction = (token) =>{
  return {
    type:actionType.CHANGE_TOKEN,
    token
  }
}

export const getLoginInfoAction = (phone,pwd) =>{
  return dispatch =>{
    getLoginInfo(phone,pwd).then(res =>{
      const token = (res && res.token) || "";
      const loginInfo = res || {};
      dispatch(changeTokenAction(token))
      localStorage.setItem("token",token)
      if(loginInfo != {}){
        delete loginInfo.token
      }
      dispatch(changeLoginInfoAction(loginInfo))
      //只有返回正确结果才关闭登录窗口
      if( res !== undefined){
        dispatch(isShowLoginPageAction(false))
      }
      console.log(res);
    }) 
  }
}

export const checkLoginOutAction = ()=>{
  return dispatch =>{
    getLoginOut()
    dispatch(changeTokenAction(""))
    dispatch(changeLoginInfoAction({}))
  }
}