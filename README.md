# vue-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```bash
# 简单后台管理搭建第一次总结：
# 功能：(1)可以实现登录进行跳转到首页，当token删除没有的时候(token自己随便获取保存到本地的)，通过全局路由守卫跳转到登录页面。
       (2)头部固定,左边侧边栏固定,右侧内容根据侧边栏导航跳转到相应页面。
       (3)可以实现二级导航的跳转
# 搭建过程遇到的坑:(1)在布局过程中，当头部布局完成时,但是下面的content(包含左侧侧边栏和右侧内容)的高度出现不能沾满浏览器剩余的全部高度,此时的高度为内容撑开的高度。
                      解决办法：给元素设置绝对定位，这时候宽度要给100%,不然宽度就占不了浏览器宽的100%了,然后设置top和bottom,同时为0,则会沾满整个浏览器高度，但是通常有头部，所有top可加一些px。
                      .content {/*display: flex;*/position: absolute;top: 60px;bottom: 0;/*overflow: hidden;*/width: 100%;}
                 (2)对elementUI的了解过浅,导致对(NavMenu)导航菜单的属性以及事件了解不多。并不知道导航菜单还有router这个属性,当在el-menu这个标签中添加router属性时
                  这个时候el-menu-item标签中的index就相当于一个路由跳转，会跳转到相对应的页面。使用el-submenu标签可以实现二级导航，当时这个时候需要注意这个标签需要index，不然报红。
                  (这个地方在开发项目中通常是需要循环的，因此通常也会用到<template></template>)详情去elementui文档去看https://element.eleme.io/#/zh-CN/component/menu
                 (3)这个时候已经实现页面可以跳转以及多级导航，但是当跳转的时候你会发现我的侧边栏和头部没了,这是当然的，因为跳转的页面没有写头部和侧边栏。所以这个时候我们就要用到router-view
                   标签了,它的作用就是  ----将路由匹配到的组件将显示在这里,其实也就是说vue路由嵌套，嵌套路由就是路由里面嵌套他的子路由，可以有自己的路由导航和路由容器（router-link、router-view），
                   通过配置children可实现多层嵌套,如果要显示的组件不是当前组件的子路由，那么还是不会显示当前组件的头部以及侧边栏---
                 (4)侧边栏折叠问题，本来觉得很简单，直接通过elementUI例子使用一个布尔值来进行控制，但是当控制可以折叠的时候发现，左边的内容宽度并没有跟着变化，这时通过百度查询，才知道需要通过
                    那个布尔值来动态的控制aside标签的宽度才能实现
```
``` bash
# mock模拟接口的使用
   npm install mockjs --save-dev
   使用步骤：(1)首相一般在src文件下创建mock文件，然后创建mock.js文件,(你也可以多创建几个文件，使用模块化管理)
            (2)在当前文件import引入安装的mock插件,有两种写法 Mock.Random.name()或者是Mock.mock('@name')，详情参考文档(http://mockjs.com/examples.html#Name)





```
