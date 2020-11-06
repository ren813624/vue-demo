<template>
  <el-table :data="tableData" border center style="width: 100%">
    <el-table-column prop="author_name" label="姓名"> </el-table-column>
    <el-table-column prop="province" label="省份"> </el-table-column>
    <el-table-column prop="des" label="描述"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
    <el-table-column prop="date" label="日期"> </el-table-column>
  </el-table>
</template>

<script>

export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.getTableList();
    // this.test(this.b);
  },
  methods: {
    getTableList() {
      let that = this;
      this.$http.get("/tableList").then((res) => {
        if (res.status == 200) {
          that.tableData = res.data;
        }
      });
    },
    b() {
      setTimeout(() => {
        console.log("我是回调函数");
      }, 1);
    },
    test(callback) {
      callback();
      console.log("我是主函数");
    },
  },
};
</script>
