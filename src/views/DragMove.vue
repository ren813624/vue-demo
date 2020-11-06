<template>
  <div class="drag">
    <el-button @click="btn">点击显示隐藏</el-button>
    <el-dialog
      title="修改信息"
      :visible.sync="dialogVisible"
      width="50%"
      :modal="false"
      :modal-append-to-body='false'
      v-dialogDrag
      :close-on-click-modal="false"
    >
      <el-form :model="itemForm">
        <el-form-item label="name">
          <el-input v-model="itemForm.name"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script type="text/babel">
// 滑动条弹框的封装
export default {
  data() {
    return {
      dialogVisible: false,
      itemForm:{}
    };
  },
  methods: {
    btn() {
      this.dialogVisible = !this.dialogVisible;
    }
  }
};
</script>
<style scoped></style>
