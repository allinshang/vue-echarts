<template>
  <div>
    <p>被点击日期：{{ name }}</p>
    <ve-pie :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-pie>  
  </div>
</template>

<script>
import VePie from 'v-charts/lib/pie'
export default {
  data () {
    return {
      name: ''
    }
  },
  created () {
    let t = this
    t.chartData = {
      columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
      rows: [
        { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
        { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
        { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
        { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
        { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
        { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
      ]
    }
    t.chartSettings = {
      dimension: '日期',
      metrics: '销售额-1季度',
      selectedMode: 'single',
      hoverAnimation: false
    }
    t.chartEvents = {
      click: function (e) {
        t.name = e.name
        console.log(e)
      }
    }
  },
  components: {VePie}
}
</script>
