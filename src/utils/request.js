import axios from 'axios';
// import { message, Button } from 'antd';

const service = axios.create({
  baseURL: '/api',
  timeout: 20 * 1000
})
// 请求拦截
service.interceptors.request.use(
  config => {
    if(config.method==="post"){
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  error => {

  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    return response
  }, error => {
    console.log(error)
  })

export default service