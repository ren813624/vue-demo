//对axios的封装以及设置项目中的所需要的的一些东西


import axios from 'axios'
import router from 'vue-router'   //src/router/index 下有返回一个router，而这个router正是我们在main里传入到vue实例里的router，于是改写import语句
// axios.defaults.baseURL = 'https://api.apiopen.top'
//请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',

}

//请求拦截以及响应拦截
axios.interceptors.request.use(config => {
  if(sessionStorage.getItem('token')){//添加token信息在请求中
    config.headers.Authorization = sessionStorage.getItem('token')
  }
  console.log(config)
  return config
}, error => {
  console.log(error)
  return error
})
//响应拦截
axios.interceptors.response.use(config => {
  console.log(config)
  if(config.status===200){
    //可以在这里写一些响应拦截
  }
  return config
}, error => {
  console.log(error)
  return error
})
