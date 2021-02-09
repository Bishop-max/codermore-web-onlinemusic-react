import request from './local-api'

export function getLoginInfo(phone,password) {
  return request({
    url:'/login/cellphone',
    method:'POST',
    data:{
      phone,
      password
    }
  })
}

export function getLoginOut(){
  return request({
    url:'/logout'
  })
}