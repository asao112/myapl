<script>
import { Pie } from 'vue-chartjs'
export default {
  name: 'Chart2',
  extends: Pie,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['副業', 'A会社給料', 'その他'],
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