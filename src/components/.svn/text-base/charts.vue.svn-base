<template>
  <div class="app" id="app">
    <div class="c-tit">饼图</div>
    <div class="t-wrap charts" id="chartsPie"></div>
    <div class="c-tit">柱状图</div>
    <div class="t-wrap charts" id="chartsClo"></div>
    <div class="c-tit">折线图</div>
    <div class="t-wrap charts" id="chartsLine"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'dome1',
  data () {
    return {
      chartOption: 11
    }
  },
  mounted () {
    let optionCol = this.$store.getters.chartsClo
    let optionLine = this.$store.getters.chartsLine
    let chartsPie = this.$store.getters.chartsPie
    let app = {}
    let myChart = echarts.init(document.getElementById('chartsLine'))
    let myChart1 = echarts.init(document.getElementById('chartsClo'))
    let myChart2 = echarts.init(document.getElementById('chartsPie'))
    myChart1.setOption(optionCol)
    myChart2.setOption(chartsPie)
    // myChart.setOption(optionLine)
    app.count = 11
    setInterval(function () {
      let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '')
      var data0 = optionLine.series[0].data
      var data1 = optionLine.series[1].data
      data0.shift()
      data0.push(Math.round(Math.random() * 1000))
      data1.shift()
      data1.push((Math.random() * 10 + 5).toFixed(1) - 0)
      optionLine.xAxis[0].data.shift()
      optionLine.xAxis[0].data.push(axisData)
      optionLine.xAxis[1].data.shift()
      optionLine.xAxis[1].data.push(app.count++)
      myChart.setOption(optionLine)
    }, 2100)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .charts {
    width: 760px;
    height: 400px;
  }
</style>
