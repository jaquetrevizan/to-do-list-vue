import { createStore } from 'vuex';

function loadTasks() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

export default createStore({
  state: {
    tasks: loadTasks()
  },

  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    TOGGLE_TASK(state, index) {
      state.tasks[index].completed = !state.tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    REMOVE_TASK(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    }
  },

  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', { text: task, completed: false });
    },
    toggleTask({ commit }, index) {
      commit('TOGGLE_TASK', index);
    },
    removeTask({ commit }, index) {
      commit('REMOVE_TASK', index);
    },
    editTask({ commit }, updatedTask) {
      commit('UPDATE_TASK', updatedTask);
    }
  },
  
  getters: {
    allTasks: (state) => state.tasks,
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTasks: (state) => state.tasks.filter((task) => !task.completed)
  }
});
