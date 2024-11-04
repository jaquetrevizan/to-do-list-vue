<template>
    <ul>
        <transition-group name="fade" tag="ul">
            <li v-for="(task, index) in allTasks" :key="index">
            <span :class="{ completed: task.completed}">{{ task.text }}</span>
            <button @click="editTask(task)"><font-awesome-icon :icon="['fas', 'pen']" /></button>
            <button @click="toggleTask(index)"><font-awesome-icon :icon="['fas', 'check']" /></button>
            <button @click="removeTask(index)"><font-awesome-icon :icon="['fas', 'xmark']" /></button>
        </li>
        </transition-group>
    </ul>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['allTasks'])
        },

        methods: {
            ...mapActions(['toggleTask', 'removeTask']),
            editTask(task) {
                this.$emit('edit-task', task);
            }
        }
    };
</script>

<style scoped>
    ul {
        max-width: 400px;
        margin: 20px auto;
        padding: 0;
        list-style-type: none;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    li {
        display: flex;
        align-items: center;
        padding: 15px;
        margin: 5px 0;
        background-color: #ffffff;
        border-radius: 5px;
        transition: background-color 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    li:hover {
        background-color: #f1f1f1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter, .fade-leave-do {
        opacity: 0;
    }

    .completed {
        color: gray;
        text-decoration: line-through;
        transition: color 0.3s ease, transform 0.3s ease;
        transform: scale(1.05);
    }

    span {
        flex: 1;
        font-size: 16px;
        color: #333;
        margin-right: 10px;
        text-align: left;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        transition: transform 0.2s ease;
    }

    button:hover {
        transform: scale(1.2);
    }

    button .fa-check {
        color: #28a745;
    }

    button .fa-xmark {
        color: #dc3545;
    }

    button .fa-pen {
        color: #007bff;
    }
</style>