<template>
  <h1>Estatística de Tarefas</h1>
  <div v-if="allTasks && allTasks.length == 0">Nenhuma tarefa foi adicionada.</div>
  <div class="statistic-graph" v-if="allTasks && allTasks.length >= 1">
    <apex-chart
      :chart-options="chartOptions" 
      :chart-data="chartData" 
    />
  </div>
  <router-link to="/" class="statistics-button">Voltar</router-link>
</template>

<script>
import { mapGetters } from 'vuex';
import ApexChart from './ApexChart.vue';

export default {
  components: {
    ApexChart,
  },
  computed: {
    ...mapGetters(['allTasks']),
    chartData() {
      if (!this.allTasks || this.allTasks.length === 0) {
        return [];
      }

      const completed = this.allTasks.filter(task => task.completed).length;
      const pending = this.allTasks.length - completed;

      return [
        {
          name: 'Tarefas Completas',
          data: [completed],
        },
        {
          name: 'Tarefas Pendentes',
          data: [pending],
        },
      ];
    },
    chartOptions() {
      return {
        chart: {
          type: 'bar',
        },
        colors: ['#28a745', '#dc3545'],
        xaxis: {
          categories: [''],
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
          },
        },
      };
    },
  },
};
</script>


<style scoped>
  h1 {
    font-size: 2em;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .statistic-graph {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 10px 15px;
    font-size: 1em;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
</style>
