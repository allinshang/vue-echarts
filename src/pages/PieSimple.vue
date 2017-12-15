<template>
  <div>
    <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
  </div>
</template>

<script>
import VePie from 'v-charts/lib/pie'
export default {
  created () {
    this.chartData = {
      columns: ['日期', '成本', '利润'],
      rows: [
        { '日期': '1月1号', '成本': 123, '利润': 3 },
        { '日期': '1月2号', '成本': 1223, '利润': 6 },
        { '日期': '1月3号', '成本': 2123, '利润': 90 },
        { '日期': '1月4号', '成本': 4123, '利润': 12 },
        { '日期': '1月5号', '成本': 3123, '利润': 15 },
        { '日期': '1月6号', '成本': 7123, '利润': 20 }
      ]
    }
    this.chartSettings = {
      dimension: '成本',
      metrics: '利润'
    }
  },
  components: {VePie}
}
</script>
