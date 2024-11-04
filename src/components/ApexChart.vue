<template>
    <apexchart type="bar" :options="chartOptions" :series="chartData"></apexchart>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ApexCharts from 'vue3-apexcharts';
  
  export default defineComponent({
    components: {
      apexchart: ApexCharts,
    },
    props: {
      chartData: {
        type: Array,
        required: true,
      },
      chartOptions: {
        type: Object,
        default: () => ({}),
      },
    },
  });
  </script>
  
  <style scoped>
  </style>
  