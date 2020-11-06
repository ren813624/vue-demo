<template>
  <div class="login">
    <div class="center">
      <div class="img">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form  status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户">
          <el-input v-model="username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin-left:45px">
          <el-button style="width:200px" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
    };
  },
  methods: {
      login(){
          if(this.username===''){
              this.$message.error('请输入用户名');
              return
          }
          if(this.password===''){
              this.$message({
                  type:"error",
                  message:'请输入密码'
              })
              return
          }
        //   通过循环生成一个9位的随机数
        let str="asgewg111d5v1dv4v14dv15d1v5e84ghj4mn4g1nm5mhgm5"
        let token=''

        for (let index = 0; index < 10; index++) {
            let random=Math.floor((Math.random()*str.length));
            token+=str[random]
        }
        console.log('111')
        sessionStorage.setItem('token',token)
        this.$router.push('/nav')
      }
  },
};
</script>
<style scoped>
.login {
  background: #2d2a2e;
  display: flex;
  position: absolute;
  top: 0px;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.center {
  width: 480px;
  height: 280px;
  background: #fff;
  border-radius: 20px;
  position: relative;
}
.center > .img {
  display: inline-block;
  background: #fff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  border: 1px solid #ddd;
  margin-left: 50%;
  transform: translate(-44px, -44px);
}
.center > div > img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.el-form .el-input{
    width: 300px;
}
</style>
