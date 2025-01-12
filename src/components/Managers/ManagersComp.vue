<script setup>
import { ref } from 'vue';
import './Managers.css'
let delete__user = ref(false)
let edit__user = ref(false)
const tableData = ref([
    {
        name: "Петренко Владимир",
        type: "Manager",
        phone: "+7 900 000-00-00",
        email: "v.petrenko@mail.ru",
        status: "Block",
    },
    {
        name: "Новиков Иван",
        type: "Hodim",
        phone: "+7 900 000-00-00",
        email: "i.novikov@mail.ru",
        status: "Proverka ankety",
    },
    {
        name: "Макарова Анна",
        type: "Manager",
        phone: "+7 900 000-00-00",
        email: "a.makarova@gmail.com",
        status: "Active",
    },
    {
        name: "Никифоров Леонид",
        type: "Manager",
        phone: "+7 900 000-00-00",
        email: "l.nikiforov@mail.ru",
        status: "Odobren",
    },
    {
        name: "Петренко Владимир",
        type: "Manager",
        phone: "+7 900 000-00-00",
        email: "v.petrenko@mail.ru",
        status: "Block",
    },
    {
        name: "Новиков Иван",
        type: "Hodim",
        phone: "+7 900 000-00-00",
        email: "i.novikov@mail.ru",
        status: "Proverka ankety",
    },
    {
        name: "Макарова Анна",
        type: "Manager",
        phone: "+7 900 000-00-00",
        email: "a.makarova@gmail.com",
        status: "Active",
    },
    {
        name: "Никифоров Леонид",
        type: "Manager",
        phone: "+7 900 000-00-00",
        email: "l.nikiforov@mail.ru",
        status: "Odobren",
    },
]);
const statusClass = (status) => {
    switch (status) {
        case "Block":
            return "status__block";
        case "Proverka ankety":
            return "status__check";
        case "Active":
            return "status__active";
        case "Odobren":
            return "status__approved";
        default:
            return "";
    }
};
const editRow = (index) => {
    edit__user.value = true
};
const deleteRow = (index) => {
    delete__user.value = true
};
function exit() {
    delete__user.value = false
    edit__user.value = false
}
</script>
<template>
    <div>
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
                <tr v-for="(row, index) in tableData" :key="index">
                    <td>{{ row.name }}</td>
                    <td>{{ row.type }}</td>
                    <td>{{ row.phone }}</td>
                    <td>{{ row.email }}</td>
                    <td>
                        <span :class="statusClass(row.status)" class="status__btn">{{ row.status }}</span>
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
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg" alt="close"></button>
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
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg" alt="close"></button>
                </h2>
                <div class="modal__text-wrapper">
                    <p>Вы уверены, что хотите удалить шаблон задачи «Проверка качества обслуживания»?</p>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Отмена</button>
                        <button class="succes__btn">Добавить проверяющего</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>