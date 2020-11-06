import Vue from 'vue';
//使用Vue.directive()定义一个全局指令
//1.参数一：指令的名称，定义时指令前面不需要写v-
//2.参数二：是一个对象，该对象中有相关的操作函数
//3.在调用的时候必须写v-
const drag = Vue.directive('drag', {
  //1.指令绑定到元素上回立刻执行bind函数，只执行一次
  //2.每个函数中第一个参数永远是el，表示绑定指令的元素，el参数是原生js对象
  //3.通过el.focus()是无法获取焦点的，因为只有插入DOM后才生效
  bind: function (el) {
    // console.log(el.clientWidth)
  },
  //inserted表示一个元素，插入到DOM中会执行inserted函数，只触发一次
  inserted: function (el) {
    // console.log(el.clientWidth)
    el.onmousedown = function (e) {
      var disx = e.pageX - el.offsetLeft;
      var disy = e.pageY - el.offsetTop;

      var cW = e.path[2].clientWidth
      var cH = e.path[2].clientHeight
      var left = el.style.left.split('p')[0]
      left = left == '' ? 0 : parseInt(left)
      var top = el.style.top.split('p')[0]
      top = top == '' ? 0 : parseInt(top)
      var mousePositonX = (e.target.clientWidth + 40) - e.pageX + left
      var mousePositonY = (e.target.clientHeight+30) - e.pageY + top
      document.onmousemove = function (e) {
        if (e.pageX >= cW - mousePositonX) {
          el.style.left = cW - mousePositonX
          // e.pageX=cW - mousePositonX
          return
        }
        el.style.left = e.pageX - disx + 'px';
        // 赋值判断距离
        let left = el.style.left.split('p')[0]
        left = left == '' ? 0 : parseInt(left)
        if (left < 0) {
          el.style.left = 0
        }
        // ---------------------------------------------------------
        if (e.pageY >= cH - mousePositonY) {
          el.style.top = cH - mousePositonY
          // e.pageX=cW - mousePositonX
          return
        }
        el.style.top = e.pageY - disy + 'px';
        // 赋值判断距离
        let top = el.style.top.split('p')[0]
        top = top == '' ? 0 : parseInt(top)
        if (top < 0) {
          el.style.top = 0
        }
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      }
    }
  },
  //当VNode更新的时候会执行updated，可以触发多次
  updated: function (el) {}
})
export default drag;
