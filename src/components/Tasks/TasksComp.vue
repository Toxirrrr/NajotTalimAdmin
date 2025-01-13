<script setup>
import './Tasks.css'
import { deleteTask, getAllTasks, postTask } from '@/Services/TasksService';
import { components } from '@/components/';
import { reactive, ref } from 'vue';
let add__task = ref(false)
let delete__task = ref(false)
let addNewTask = reactive({
    name: "",
    type: ""
})
function addTasks() {
    postTask(addNewTask)
}
async function deleteTasks() {
    try {
        await deleteTask(components.taskId);
        delete__task.value = false;
        getAllTasks();
    } catch (error) {
        console.error('Taskni o\'chirishda xatolik:', error);
    }
}
function delTask(event) {
    delete__task.value = true;
    components.taskId = event.target.id;
}
function addTask() {
    add__task.value = true
}
function exit() {
    delete__task.value = false
    add__task.value = false
}
getAllTasks()
</script>
<template>
    <section>
        <div class="tasks__top">
            <button class="succes__btn tasks__btn" @click="addTask"><img src="/img/filled_content_add.svg" alt="">Vazifa
                qo’shish</button>
            <input class="search__input tasks__inp" type="text" placeholder="Поиск по фамилии" @input="search">
        </div>
        <ul class="tasks__list">
            <li class="tasks__item" v-for="(item, index) in components.getAllTasks" :key="index">
                <h3 class="tasks__title">{{ item.name }}</h3>
                <p class="tasks__text">{{ item.type }}</p>
                <div class="tasks__btn-wrapper">
                    <button class="edit__button" :id="item.id">O'zgartirish</button>
                    <button class="delete__button" :id="item.id" @click="delTask">O'chirish</button>
                </div>
            </li>
        </ul>
        <div v-if="add__task" class="delete__modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Vazifa qo’shish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <form class="modal__text-wrapper add">
                    <label class="modal__label" for="userType">Hodim turi:
                        <select class="modal__input" v-model="addNewTask.type" id="userType" required>
                            <option value="Manager">Manager</option>
                            <option value="Hodim">Hodim</option>
                        </select>
                        <label class="modal__label">
                            Vazifa nomi
                            <input class="modal__input" type="text" v-model="addNewTask.name" required
                                placeholder="Vazifa">
                        </label>
                    </label>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Bekorqilish</button>
                        <button class="succes__btn" @click="addTasks" type="submit">Saqlash</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="delete__task" class="delete__modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Taskni o’chirish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <div class="modal__text-wrapper">
                    <p>Вы уверены, что хотите удалить шаблон задачи «Проверка качества обслуживания»?</p>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Отмена</button>
                        <button @click="deleteTasks" class="delete__btn">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>