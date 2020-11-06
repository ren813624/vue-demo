<template>
  <div>
    <button @click="btnPdf">点击打印</button>
    <vue-easy-print tableShow ref="easyPrint">
      <template slot-scope="func">
        <demo :getChineseNumber="func.getChineseNumber"></demo>
      </template>
    </vue-easy-print>
  </div>
</template>

<script>
import vueEasyPrint from "vue-easy-print";
import demo from "./TablePage";
import pdfHtml from "../untils/print";
export default {
  name: "showPdf",
  data() {
    return {};
  },
  components: {
    vueEasyPrint,
    demo
  },
  mounted() {},
  methods: {
    btnPdf() {
      // let printData = `<div>打印内容</div>`;
      // pdfHtml(printData);
      this.$refs.easyPrint.print()
    }
  }
};
</script>

<style scoped></style>
