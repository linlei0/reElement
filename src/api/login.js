import request from '../utils/request'

/**
 * 登录
 * @param {*} data 
 */
function login(data){
  return request({
    url: 'login/login',
    method: 'post',
    data
  })
}

export {
  login
}