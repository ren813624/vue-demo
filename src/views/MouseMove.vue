<template>
  <!-- 拖拽弹窗 -->
  <div class="move">
    <div v-drag></div>
  </div>
</template>

<script>
export default {
  name: "Window",
  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped>
.move{
  position: relative;
}
.move > div {
  width: 400px;
  height: 600px;
  border: 1px solid green;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
