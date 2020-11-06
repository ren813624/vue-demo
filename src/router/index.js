import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'
import NavPage from '../views/NavPage'
import EchartPage from '../views/EchartPage'
import LoginPage from '../views/LoginPage'
import FormPage from '../views/FormPage'
import TablePage from '../views/TablePage'
import TestPage from '../views/TestPage'
import ScrollPage from '../views/ScrollPage'
import DragMove from '../views/DragMove'
import MouseMove from '../views/MouseMove'
import PdfPage from '../views/PdfPage'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/login',
      component: LoginPage,
      name: ''
    },
    {
      path: '/',
      component: HomePage,
      name: '',
      hidden: true,
      iconCls: 'fa fa-address-card',
      children: [{
        path: '/nav',
        component: NavPage,
        name: 'Nav'
      }]
    },
    {
      path: '/',
      component: HomePage,
      name: '',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/echarts',
        component: EchartPage,
        name: 'Echar'
      }]
    },
    {
      path: '/',
      component: HomePage,
      name: '多级导航',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/form',
        component: FormPage,
        name: 'Form',
        iconCls: 'fa fa-address-card',
        hidden: true,
      }, {
        path: '/table',
        component: TablePage,
        name: 'Table',
        iconCls: 'fa fa-address-card',
        hidden: true,
      }]


    },
    {
      path: '/',
      component: HomePage,
      name: '',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/test',
        component: TestPage,
        name: '测试'
      }]
    },
    {
      path: '/',
      component: HomePage,
      name: '',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/scroll',
        component: ScrollPage,
        name: '下拉封装'
      }]
    },
    {
      path: '/',
      component: HomePage,
      name: '',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/drag',
        component: DragMove,
        name: '弹框拖动'
      }]
    },
    {
      path: '/',
      component: HomePage,
      name: '',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/move',
        component: MouseMove,
        name: '跟随鼠标移动'
      }, ]
    },
    {
      path: '/',
      component: HomePage,
      name: '',
      iconCls: 'fa fa-address-card',
      hidden: true,
      children: [{
        path: '/pdf',
        component: PdfPage,
        name: 'PDF'
      }]
    }
  ]
})
