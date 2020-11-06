<template>
  <el-dialog
    class="dialog"
    title="选择出生时间"
    :visible.sync="centerDialogVisible"
    :show-close="false"
    
    center
  >
    <el-main
      v-loading="loading"
      element-loading-text="正在加载中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.1)"
    >
      <div ref="box" class="box">
        <div ref="div">
          <div v-for="(i, index) in list" :key="index + ''" class="div">
            <div>{{ i.time }}</div>
            <div>{{ i.capitalTime }}</div>
          </div>
        </div>
      </div>
    </el-main>
  </el-dialog>
</template>
<script type="text/babel">
// 滑动条弹框的封装
export default {
  data() {
    return {
      list: [
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" },
        { time: "2020年9月10日 03-05时", capitalTime: "二零二零七月廿三 卯时" }
      ],
      loading: false,
      centerDialogVisible: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.box.scrollTop = 1;
      this.$refs.box.addEventListener("scroll", this.handleScroll);
    });
  },
  methods: {
    handleScroll() {
      // console.log(this.$refs.box.scrollTop);
      // console.log(this.$refs.box.clientHeight);
      // console.log(this.$refs.div.clientHeight);
      const hDiv = this.$refs.div.clientHeight;
      const hBox = this.$refs.box.clientHeight;
      const sTop = this.$refs.box.scrollTop;
      if (hDiv - sTop <= hBox) {
        this.loading = true;
        setTimeout(() => {
          for (let index = 0; index < 5; index++) {
            this.list.push({
              time: "2020年" + (10 + index) + "月10日 03-05时",
              capitalTime: "二零二零七月廿三 卯时"
            });
          }
          this.loading = false;
        }, 2000);
      } else if (sTop <= 0) {
        this.loading = true;
        setTimeout(() => {
          for (let index = 0; index < 5; index++) {
            this.list.unshift({
              time: "2020年" + (7 - index) + "月10日 03-05时",
              capitalTime: "二零二零七月廿三 卯时"
            });
          }
          this.loading = false;
        }, 2000);
        this.$refs.box.scrollTop = 1;
      }
    }
  }
};
</script>

<style scoped>
.test {
  display: inline-block;
  margin-left: calc(50% - 150px);
}
.dialog > .el-dialog--center {
  display: inline-block !important;
  width: auto !important;
  margin-left: calc(50% - 150px);
}
.el-main {
  display: inline-block;
  min-width: 100%;
  width: auto;
  padding: 0;
}
.box {
  width: 300px;
  border: 1px solid #f2f2f2;
  height: 400px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 5px;
}
.box .div {
  border-top: 1px solid #f2f2f2;
  padding: 10px;
  font-size: 14px;
  color: #868686;
}
.box .div > div:nth-of-type(2) {
  color: #bebebe;
}
.el-loading-spinner i {
  color: black;
}
.el-loading-spinner .el-loading-text {
  color: black !important;
}
</style>
<style>
.dialog > .el-dialog--center {
  display: inline-block !important;
  width: auto !important;
  margin-left: calc(50% - 150px);
}
.dialog > .el-dialog--center>.el-dialog__body{
  padding: 0!important;
}
</style>
