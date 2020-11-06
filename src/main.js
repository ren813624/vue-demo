// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import './request/http'
import  axios from 'axios'
import echarts from 'echarts'
import './mock/mock'
import drag from './untils/drag';
import PDFJS from 'pdfjs-dist'
// import htmlToPdf from './untils/htmlToPdf'
// Vue.use(htmlToPdf)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$echarts = echarts
router.beforeEach((to, from, next) => {
  // 判断当前跳转页面是否为登录页面  如果是  清除之前存的token   如果不是检查token是否存在，不存在跳转登录页面
  if(to.path=='/login'){
    sessionStorage.removeItem('token')
  }
  if(!sessionStorage.getItem('token')&&to.path!='/login'){
    next({path:'/login'})
  }else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
// router.beforeEach((to, from, next) => {
//    console.log(to)

// })
