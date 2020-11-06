<template>
  <div class="home" style="height: 100%">
    <el-container style="height: 100%">
      <el-aside style="width: auto">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#44404A"
          text-color="#fff"
          active-text-color="#20A0FF"
          :collapse="isCollapse"
          router
          style="height: 100%;"
        >
          <div style="height: 60px;line-height: 60px;color: #fff;text-align: center">{{ isCollapse ? '收起' : '展开' }}
          </div>
          <template v-for="item in routerList">
            <el-menu-item @click="addRag(item.children[0])" v-if="item.children&&item.children.length===1"
                          :index="item.children[0].path">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.children[0].name }}</span>
            </el-menu-item>
            <el-submenu v-if="item.children&&item.children.length>1" index="">
              <template slot="title"><i class="el-icon-menu"></i><span slot="title">{{ item.name }}</span></template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
                @click=addRag(child)
              >{{ child.name }}
              </el-menu-item>
            </el-submenu>

          </template>

        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="padding: 0;">
          <!--<div :class="isCollapse?'logo-nohave':'logo-have'">{{ isCollapse ? '' : 'VUEADMIN' }}</div>-->
          <div class="rightHeader">
            <div @click="close">
              <i style="font-size: 24px;cursor: pointer;" class="el-icon-s-fold"></i>
              <!-- <el-dropdown>
                <span class="el-dropdown-link">
                  语言<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>中文简体</el-dropdown-item>
                  <el-dropdown-item>英语</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->
            </div>
            <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <span>你的名字</span>
              <img class="avtorImg" src="../assets/user.png" alt/>
            </span>
              <el-dropdown-menu slot="dropdown" style="with:100%">
                <el-dropdown-item command="a">设置</el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
<!--        <div style="padding: 20px 20px 0 20px">-->
<!--          <ul class="spread">-->
<!--            <li class="spreadTag" v-for="item in tagList" @click="switchs (item.path)"><span><i-->
<!--              class="el-icon-collection-tag"></i></span><span>{{ item.name }}</span><span @click.stop="del(item)"><i-->
<!--              class="el-icon-close"></i></span></li>-->
<!--          </ul>-->
<!--        </div>-->
        <el-main>
          <div v-if="$route.path==='/'">
            1111111111
          </div>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {

  data() {
    return {
      routerList: [],
      isCollapse: false,
      tagList: []
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    close() {
      this.isCollapse = !this.isCollapse
    },
    addRag(item) {
      console.log((item))
      this.tagList.forEach(ele => {
        if (ele.path != item.path) {
          this.tagList.push(item)
        }
      })

      sessionStorage.setItem('tagList', JSON.stringify(this.tagList))


    },
    del(item) {
      console.log(item)
    },
    switchs(item) {
      console.log(item)
    }
  },
  mounted() {
    this.routerList = this.$router.options.routes;
    if (!sessionStorage.getItem('tagList') || sessionStorage.getItem('tagList') == []) {
      this.tagList.push({name: '首页', path: '/'})
    }
    console.log(this.$router.options.routes);
  },
};
</script>
<style scoped>
.el-header {
  background: #E8AC66;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.rightHeader {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0 10px;
}

/*头像下拉样式*/
.el-dropdown-link {
  cursor: pointer;
  /* color: #409eff; */
  color: #fff;
  display: flex;
  align-items: center;
}

/* 头部右侧 */
.el-icon-arrow-down {
  font-size: 16px;
}

.avtorImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
}

/*当前激活的侧边栏的颜色*/
.is-active {
  color: black !important;
  background: #E1BB4A !important;
}

.is-active > .el-icon-menu {
  color: #fff !important;
}

.is-active > .el-tooltip > .el-icon-menu {
  color: #fff !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}

.el-menu {
  overflow: hidden !important;
}

/*页面切换过度动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

/*面包屑样式*/
.spread {
  display: flex;
  list-style: none;
  align-items: center;
}

.spreadTag {
  border: 1px solid #ddd;
  padding: 3px 0;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
}

.spreadTag > span {
  padding: 0 5px;
}

.spreadTag > span:last-child:hover {
  color: #018EE5;
}
</style>
