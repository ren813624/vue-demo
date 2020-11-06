<template>
  <div class="fourPillars">
    <div class="input-content">
      <el-input v-model="input3" :placeholder="pillarsObj.placeholder">
        <i slot="suffix" class="el-icon-arrow-down" />
      </el-input>
      <div class="mask" @click="isShow" />
      <el-collapse-transition>
        <div v-show="show3" class="content">
          <div v-for="(item, index) in pillarsObj.list" :key="index + ''">
            <div class="title-content">{{ item.title }}</div>
            <div
              class="pillars"
              :style="{
                'border-left': index == 0 ? 'none' : '1px solid #d7d7d7'
              }"
            >
              <div v-for="pil in item.list" :key="pil.idChild">
                {{ pil.pillars }}
              </div>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
export default {
  // 一个下拉框的二次封装
  name: "FourPillars",
  props: {
    pillarsObj: {
      type: Object, //需要传递一个对象格式为{title:'',list:[{title:'',list:[] }]}
      default: {}
    }
  },
  data() {
    return {
      input3: "",
      show3: false,
      pillarsObj: {
        placeholder: "选择时支/属性",
        content: "",
        list: [
          {
            title: "时支",
            id: 1,
            list: [
              { pillars: "甲", idChild: "1-1" },
              { pillars: "乙", idChild: "1-2" },
              { pillars: "丙", idChild: "1-3" },
              { pillars: "丁", idChild: "1-4" },
              { pillars: "戊", idChild: "1-5" },
              { pillars: "己", idChild: "1-6" },
              { pillars: "庚", idChild: "1-7" },
              { pillars: "辛", idChild: "1-8" },
              { pillars: "壬", idChild: "1-9" },
              { pillars: "癸", idChild: "1-10" }
            ]
          },
          {
            title: "五行",
            id: 2,
            list: [
              { pillars: "金", idChild: "2-1" },
              { pillars: "木", idChild: "2-2" },
              { pillars: "水", idChild: "2-3" },
              { pillars: "火", idChild: "2-4" },
              { pillars: "土", idChild: "2-5" }
            ]
          },
          {
            title: "五神",
            id: 3,
            list: [
              { pillars: "印", idChild: "3-1" },
              { pillars: "比", idChild: "3-2" },
              { pillars: "伤", idChild: "3-3" },
              { pillars: "财", idChild: "3-4" },
              { pillars: "伤", idChild: "3-5" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    // 关闭打开
    isShow() {
      this.show3 = !this.show3;
    }
  }
};
</script>

<style scoped>
.fourPillars {
  display: inline-block;
  margin: 0 9px 20px 5px;
}
.input-content {
  position: relative;
  width: 200px;
}
.input-content > .mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.input-content > .content {
  border: 1px solid #ddd;
  position: absolute;
  top: 43px;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 2;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
}
.input-content > .content > div {
  width: 33.3%;
}
.input-content > .content .title-content {
  border-bottom: 1px solid #d7d7d7;
  color: #d7d7d7;
}
.input-content > .content .pillars {
  border-left: 1px solid #d7d7d7;
  color: #aaa;
  height: calc(100% - 47px);
  margin-top: 10px;
}
.line {
  border-left: none;
}
.input-content > .content .pillars > div {
  cursor: pointer;
}
.input-content > .content .pillars > div:hover {
  color: #1890ff;
}
</style>

