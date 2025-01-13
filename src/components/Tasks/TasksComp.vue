<script setup>
import './Tasks.css'
import { deleteTask, getAllTasks, postTask, putTask } from '@/Services/TasksService';
import { components } from '@/components/';
import { reactive, ref } from 'vue';
let add__task = ref(false)
let delete__task = ref(false)
let edit__task = ref(false)
let addNewTask = reactive({
    name: "",
    type: ""
})
let editNewTask = reactive({
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
async function editTasks() {
    try {
        await putTask(editNewTask, components.taskId)        
        edit__task.value = false;
    } catch (error) {
        console.error('Taskni o\'zgartirishda xatolik:', error);
    }
}
function delTask(event) {
    delete__task.value = true;
    components.taskId = event.target.id;
    getAllTasks()
    
}
function editTask(event) {
    edit__task.value = true
    components.taskId = event.target.id;
    getAllTasks()
}
function addTask() {
    add__task.value = true
}
function exit() {
    delete__task.value = false
    add__task.value = false
    edit__task.value = false
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
                    <button class="edit__button" :id="item.id" @click="editTask">O'zgartirish</button>
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
                    <p>Siz haqiqattan ham taskni o'chirishni hohlaysizmi?</p>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Отмена</button>
                        <button @click="deleteTasks" class="delete__btn">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="edit__task" class="delete__modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Vazifa o’zgartirish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <div class="modal__text-wrapper add">
                    <label class="modal__label" for="userType">Hodim turi:
                        <select class="modal__input" v-model="editNewTask.type" id="userType" required>
                            <option value="Manager">Manager</option>
                            <option value="Hodim">Hodim</option>
                        </select>
                        <label class="modal__label">
                            Vazifa nomi
                            <input class="modal__input" type="text" v-model="editNewTask.name" required
                                placeholder="Vazifa">
                        </label>
                    </label>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Bekorqilish</button>
                        <button class="succes__btn" @click="editTasks" type="submit">Saqlash</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>