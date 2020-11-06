<template>
  <div class="echarts">
    <div id="myEcharts"></div>
    <div id="myEcharts1"></div>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.querySelector("#myEcharts"));
      // 指定图表的配置项和数据
      var options = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {
          //当点击或者滑过图案的提示框
          formatter(params) {
            return `
                直接访问：${params[0].value}
                所需天数：${1}
               `;
          },
          triggerOn: "click",
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          //该charts图案文字
          data: ["销量"],
          icon: "triangle",
          formatter: function (name) {
            return name + "1111";
          },
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [10, 52, 200, 334, 390, 330, 220],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(options);
      // 处理点击事件并且跳转到相应的百度搜索页面
      myChart.on("click", function (params) {
        // window.open(
        //   "https://www.baidu.com/s?wd=" + encodeURIComponent(params.name)
        // );
        console.log(params);
      });
    },
    drapLine() {
      let myChart = this.$echarts.init(document.querySelector("#myEcharts1"));
      var symbolSize = 20;
      var data = [
        [15, 0],
        [-50, 10],
        [-56.5, 20],
        [-46.5, 30],
        [-22.1, 40],
      ];

      let option = {
        title: {
          text: "Try Dragging these Points",
        },
        tooltip: {
          triggerOn: "none",
          formatter: function (params) {
            return (
              "X: " +
              params.data[0].toFixed(2) +
              "<br>Y: " +
              params.data[1].toFixed(2)
            );
          },
        },
        grid: {},
        xAxis: {
          min: -100,
          max: 80,
          type: "value",
          axisLine: { onZero: false },
        },
        yAxis: {
          min: -30,
          max: 60,
          type: "value",
          axisLine: { onZero: false },
        },
        dataZoom: [
          {
            type: "slider",
            xAxisIndex: 0,
            filterMode: "empty",
          },
          {
            type: "slider",
            yAxisIndex: 0,
            filterMode: "empty",
          },
          {
            type: "inside",
            xAxisIndex: 0,
            filterMode: "empty",
          },
          {
            type: "inside",
            yAxisIndex: 0,
            filterMode: "empty",
          },
        ],
        series: [
          {
            id: "a",
            type: "line",
            smooth: true,
            symbolSize: symbolSize,
            data: data,
          },
        ],
      };
      let that = this;
      myChart.setOption(option)
      setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
          graphic: that.$echarts.util.map(data, function (item, dataIndex) {
            return {
              type: "circle",
              position: myChart.convertToPixel("grid", item),
              shape: {
                cx: 0,
                cy: 0,
                r: symbolSize / 2,
              },
              invisible: true,
              draggable: true,
              ondrag: that.$echarts.util.curry(onPointDragging, dataIndex),
              onmousemove: that.$echarts.util.curry(showTooltip, dataIndex),
              onmouseout: that.$echarts.util.curry(hideTooltip, dataIndex),
              z: 100,
            };
          }),
        });
      }, 0);

      window.addEventListener("resize", updatePosition);

      myChart.on("dataZoom", updatePosition);
      
      function updatePosition() {
        myChart.setOption({
          graphic: that.$echarts.util.map(data, function (item, dataIndex) {
            return {
              position: myChart.convertToPixel("grid", item),
            };
          }),
        });
      }

      function showTooltip(dataIndex) {
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: dataIndex,
        });
      }

      function hideTooltip(dataIndex) {
        myChart.dispatchAction({
          type: "hideTip",
        });
      }

      function onPointDragging(dataIndex, dx, dy) {
        data[dataIndex] = myChart.convertFromPixel("grid", this.position);

        // Update data
        myChart.setOption({
          series: [
            {
              id: "a",
              data: data,
            },
          ],
        });
      }
    },
  },
  mounted() {
    this.drawLine();
    this.drapLine();
  },
};
</script>
<style scoped>
.echarts {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.echarts > div {
  /* border: 1px solid orange; */
  height: 400px;
  width: 33.3%;
  min-width: 500px;
  padding: 20px;
}
</style>