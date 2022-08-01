<template>
  <div>
      <va-card stripe="info" :title="this.chartName">
        <apexchart width="500" :type="this.chartType" :options="options" :series="series"></apexchart>
      </va-card>
  </div>
</template>

<script>
import * as serviceKoolreport from "../../app/koolreport/services";
import { hex2rgb } from '../../services/vuestic-ui';
export default {
  watch: {
  },
  props: ["chartId","chartName","chartType"],
  name: "chart",
  data() {
    return {
      series: [{
          data: [44, 55, 41, 64, 22]
        }, {
          data: [53, 32, 33, 52, 13]
        }],
      // series: [{
      //   name: 'series-1',
      // //   // name: ['series-1','series-2','series-3','series-4','series-5'],
      // //   // labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"],
      //   data: [44, 55, 13, 43, 22]
      // }],
      // series: [44, 55, 13, 43, 22],
          options: {
            chart: {
              id: 'hee',//name
              width: 380,
            },
            colors:['#F44336', '#E91E63', '#9C27B0', '#E91E63', '#9C27B0'],
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
    }
  },
  mounted() {
    this.getReport();

    // alert(this.chartClass)
  },
  methods: {
    getReport: async function() {
      const response = await serviceKoolreport.getReport(this.report);
      this.reportRawData = response;
    }
  }
};
</script>
