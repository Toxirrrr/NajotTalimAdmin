<script setup>
import './Managers.css'
import { ref } from 'vue';
import { getAll, editManager } from '@/Services/ManagerService';
import { components } from '../';
let delete__user = ref(false)
let edit__user = ref(false)
let change__status = ref(false)
let selectedType = ref()

const statusClass = (status) => {
    switch (status) {
        case "Block":
            return "status__check";
        case "Active":
            return "status__active";
        default:
            return "";
    }
};
const editRow = (index) => {
    edit__user.value = true
};
const changeStatus = (index) => {
    change__status.value = true
    components.employeesId = index.target.id

};
const deleteRow = (index) => {
    delete__user.value = true
};
function exit() {
    change__status.value = false
    delete__user.value = false
    edit__user.value = false
}

function editStatus() {
    editManager(selectedType.value);
    change__status.value = false
    getAll()
}
getAll()
</script>
<template>
    <div>
        <button class="succes__btn block">Hodim qo’shish</button>
        <input class="search__input" type="email" placeholder="Поиск по фамилии">
        <table>
            <thead>
                <tr class="table__head">
                    <th>Фамилия Имя</th>
                    <th>Turi</th>
                    <th>Телефон</th>
                    <th>E-mail</th>
                    <th>Auditor holati</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in components.getAllEmployees" :key="index">
                    <td>{{ row.name }}</td>
                    <td>{{ row.type }}</td>
                    <td>+7 900 000-00-00</td>
                    <td>{{ row.email }}</td>
                    <td>
                        <button :class="statusClass(row.status)" class="status__btn" @click="changeStatus"
                            :id="row.id">{{
                                row.isActive ? 'Active' : 'Block' }}</button>
                    </td>
                    <td>
                        <button class="edit__button" @click="editRow(index)">O'zgartirish</button>
                        <button class="delete__button" @click="deleteRow(index)">O'chirish</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="delete__user" class="delete__modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Hodimni o’chirish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <div class="modal__text-wrapper">
                    <p>Вы уверены, что хотите удалить шаблон задачи «Проверка качества обслуживания»?</p>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Отмена</button>
                        <button class="delete__btn">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="edit__user" class="delete__modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Hodim o’zgartirish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <div class="modal__text-wrapper add">
                    <label class="modal__label">
                        Фамилия
                        <input class="modal__input" type="email" placeholder="Введите фамилию">
                    </label>
                    <label class="modal__label">
                        Имя
                        <input class="modal__input" type="email" placeholder="Введите имя">
                    </label>
                    <label class="modal__label" for="userType">Hodim Turi:
                        <select class="modal__input" id="userType">
                            <option value="manager">Block</option>
                            <option value="hodim">Active</option>
                            <option value="developer">Developer</option>
                        </select>
                    </label>
                    <label class="modal__label">
                        E-mail
                        <input class="modal__input" type="email" placeholder="Введите E-mail">
                    </label>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Отмена</button>
                        <button class="succes__btn">Добавить проверяющего</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="change__status" class="delete__modal">
            <div class="modal__wrapper">
                <h2 class="modal__title">Holatni o’zgartirish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <div class="modal__text-wrapper add">
                    <label class="modal__label" for="userType">Hodim Turi:
                        <select class="modal__input" v-model="selectedType" :value="selectedType" id="userType">
                            <option :value="false">Block</option>
                            <option :value="true">Active</option>
                        </select>
                    </label>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Bekorqilish</button>
                        <button class="succes__btn" @click="editStatus">Saqlash</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>