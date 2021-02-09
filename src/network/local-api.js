import axios from 'axios'
import {LOCAL_URL,TIMEOUT} from './config'

//创建axios实例
const instance = axios.create({
  baseURL:LOCAL_URL,
  timeout:TIMEOUT
})

//请求拦截
instance.interceptors.request.use(config => {
  return config
},err => {
  console.log(err)
  return err
})

//响应拦截
instance.interceptors.response.use(res =>{
  console.log(res);  
  return res.data
},err =>{
  if(err && err.response){
    switch(err.response.status){
      case "400":
        console.log("请求错误");
        break;
      case "401":
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误");
        break;
    }
  }
})

//导出实例
export default instance;