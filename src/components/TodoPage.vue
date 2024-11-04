<template>
    <div>
      <TodoInput 
        ref="todoInput" @new-task="addTask" @edit-task="setTaskToEdit"/>
      <TodoList
        :tasks="allTasks"
        @toggle-complete="toggleComplete"
        @remove-task="removeTask"
        @edit-task="setTaskToEdit"
      />
  
      <router-link v-if="allTasks && allTasks.length > 0" to="/statistics" class="statistics-button">Estatísticas de tarefas</router-link>
    </div>
</template>
  
  <script>
  import TodoInput from './TodoInput.vue'
  import TodoList from './TodoList.vue'
  import { mapGetters } from 'vuex';
  
  export default {
    components: {
      TodoInput,
      TodoList,
    },
  
    computed: {
      ...mapGetters(['allTasks'])
    },
  
    methods: {
      addTask(task) {
        this.$store.dispatch('addTask', task);
      },
  
      toggleComplete(index) {
        this.$store.dispatch('toggleTask', index);
      },
  
      removeTask(index) {
        this.$store.dispatch('removeTask', index);
      },

      setTaskToEdit(task) {
          this.$refs.todoInput.setTaskToEdit(task);
      }
    }
  }
  </script>
  
  <style>
    .statistics-button {
        display: inline-block;
        margin: 20px 0;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
  
    .statistics-button:hover {
        background-color: #0056b3;
    }
  </style>
  