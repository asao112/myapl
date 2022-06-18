<script>
import { Pie } from 'vue-chartjs'
export default {
  name: 'Chart',
  extends: Pie,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['食費', '自動車', '日用品'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#FF6384','#36A2EB','#cec9c9'],
            data: [20, 20, 20],
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata['datacollection'], this.options)
  }
}
</script>
<style scoped>
* {
  overflow: hidden;
}
</style>