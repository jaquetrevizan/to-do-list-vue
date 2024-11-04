<template>
    <h1>My To-Do List</h1>
    <input type="text" v-model="task" @keyup.enter="handleTask" placeholder="Adicionar nova tarefa"/>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                task: '',
                editingTask: null,
            }
        },

        methods: {
            ...mapActions(['addTask', 'editTask']),
            handleTask() {
                if (this.task) {
                    if (this.editingTask) {
                        this.editTask({ ...this.editingTask, text: this.task });
                        this.editingTask = null;
                    } else {
                        this.$emit('new-task', this.task);
                    }
                    this.task = '';
                }
            },
            setTaskToEdit(task) {
                this.task = task.text;
                this.editingTask = task;
            }
        }
    }
</script>

<style scoped>
    h1 {
      font-size: 2em;
      text-align: center;
      color: #333;
      margin-bottom: 20px;
      font-weight: bold;
    }

    input {
        display: block;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        padding: 10px 15px;
        font-size: 1em;
        border: 2px solid #ddd;
        border-radius: 8px;
        outline: none;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    input::placeholder {
        color: #999;
    }

    input:focus {
        border-color: #5c9ead;
        box-shadow: 0 0 8px rgba(92, 158, 173, 0.2);
    }
</style>