<template>
  <div 
    class="lineChartOne"
    :id="customId"
    :style="{height:customHeight,width:customWidth}">
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      chart: null
    }
  },
  props: ['customId', 'customHeight', 'customWidth'],
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      const option = {
        backgroundColor: 'rgba(21,210,222,0.8)',
        title: {
          show: 'true',
          text: '我是标题',
          textStyle: {
            color: 'blue',
            width: '100px',
            height: '50px',
            fontSize: 20
          },
          backgroundColor: 'yellow',
          borderColor: 'blue',
          borderWidth: 2,
          left: 5,
          top: 5,
          borderRadius: 8
        },
        legend: {
          type: 'plain',
          top: 20,
          width: 500,
          height: 200,
          backgroundColor: 'yellow',
          itemWidth: 30,
          itemHeight: 10,
          itemGap: 20,
          icon: 'roundRect',
          textStyle: {
            color: 'blue',
            fontSize: 15
          },
          orient: 'vertical',
          data: ['111', '222', '333']
        },
        grid: {
          backgroundColor: 'green',
          show: true
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          data: [1000, 2000, 3000, 4000, 5000, 6000]
        },
        series: [
          {
            name: '111',
            data: [100, 932, 901, 934, 1290, 1330],
            type: 'bar'
          },
          {
            name: '222',
            data: [100, 932, 901, 934, 1290, 1330],
            type: 'line',
            areaStyle: {},
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false
          },
          {
            name: '333',
            data: [300, 400, 100, 123, 435, 1000],
            type: 'line',
            areaStyle: {},
            lineStyle: {
              normal: {
                width: 1
              }
            },
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false
          }
        ]
      }

      this.chart = echarts.init(document.getElementById(this.customId))
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
