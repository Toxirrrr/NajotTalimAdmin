<script setup>
import { reactive, ref } from 'vue';
import { getAll, editManagerStatus, deleteManager, editManager, addManager, getByid, searchUsers } from '@/Services/ManagerService';
import { components } from '../';
import router from '@/router';
let searchQuery = ref("")
let delete__user = ref(false)
let edit__user = ref(false)
let change__status = ref(false)
let add__user = ref(false)
let selectedType = ref()
let editableUser = reactive({
    id: components.getById.id,
    firstName: "",
    lastName: "",
    isActive: true,
    userType: "",
    email: "",
    tasks: []
});
let addtableUser = reactive({
    firstName: "",
    lastName: "",
    isActive: true,
    userType: "",
    email: "",
    tasks: []
});

async function search() {
    try {
        if (searchQuery.value.trim() === "") {
            await getAll();
        } else {
            const result = await searchUsers(searchQuery.value);
            console.log(result);

            components.getAllEmployees = result;
        }
    } catch (error) {
        console.error("Error searching users:", error);
    }
}
function selectAllText(evt) {
    evt.target.select()
}
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
function addUser() {
    add__user.value = true
}
const editRow = async (index) => {
    const userId = index.target.id;
    await getByid(userId);
    editableUser.id = components.getById.id;
    editableUser.firstName = components.getById.name;
    editableUser.lastName = components.getById.last_name;
    editableUser.email = components.getById.email;
    editableUser.isActive = components.getById.isActive;
    editableUser.userType = components.getById.type;
    editableUser.tasks = components.getById.tasks || [];

    edit__user.value = true
};
const changeStatus = (index) => {
    change__status.value = true
    components.employeesId = index.target.id

};
const deleteRow = async (index) => {
    components.employeesId = index.target.id;
    delete__user.value = true
};
function addNewUser() {
    addManager(addtableUser)
}
function editUser() {
    editManager(editableUser)
    edit__user.value = false
    getAll()
}
async function deleteUser() {
    try {
        await deleteManager(components.employeesId)
        delete__user.value = false
    } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
    }
    getAll()
}
function editStatus() {
    editManagerStatus(selectedType.value);
    change__status.value = false
    getAll()
}
function exit() {
    add__user.value = false
    change__status.value = false
    delete__user.value = false
    edit__user.value = false
}
function navigateToUser(userId) {
    router.push('managers/' + userId);
}
getAll()
</script>
<template>
    <div>
        <button class="succes__btn block" @click="addUser"><img src="/img/filled_content_add.svg" alt="">Hodim
            qo’shish</button>
        <input class="search__input" type="text" placeholder="Поиск по фамилии" @input="search" v-model="searchQuery">
        <div v-if="components.getAllEmployees && components.getAllEmployees.length > 0">
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
                    <tr v-for="(row, index) in components.getAllEmployees" :key="index" @click="navigateToUser(row.id)">
                        <td>{{ row.name + " " + row.last_name }}</td>
                        <td>{{ row.type }}</td>
                        <td>+7 900 000-00-00</td>
                        <td>{{ row.email }}</td>
                        <td>
                            <button :class="statusClass(row.status)" class="status__btn" @click.stop="changeStatus"
                                :id="row.id">{{
                                    row.isActive ? 'Active' : 'Block' }}</button>
                        </td>
                        <td>
                            <button class="edit__button" @click.stop="editRow" :id="row.id">O'zgartirish</button>
                            <button class="delete__button" @click.stop="deleteRow" :id="row.id">O'chirish</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="empty__wrapper" v-else>
            <img src="/img/filled_maps_store-mall-directory.svg" alt="img">
            <h3 class="empty__title">Ma'lumot yo'q</h3>
        </div>
        <div v-if="add__user" class="delete__modal">
            <form class="modal__wrapper">
                <h2 class="modal__title">Hodim o’zgartirish
                    <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg"
                            alt="close"></button>
                </h2>
                <div class="modal__text-wrapper add">
                    <label class="modal__label">
                        Фамилия
                        <input class="modal__input" type="text" v-model="addtableUser.lastName" required minlength="3"
                            placeholder="Введите фамилию">
                    </label>
                    <label class="modal__label">
                        Имя
                        <input class="modal__input" type="text" v-model="addtableUser.firstName" required minlength="3"
                            placeholder="Введите имя">
                    </label>
                    <label class="modal__label" for="userType">Hodim Turi:
                        <select class="modal__input" v-model="addtableUser.userType" id="userType" required>
                            <option value="Manager">Manager</option>
                            <option value="Hodim">Hodim</option>
                        </select>
                    </label>
                    <label class="modal__label" for="userType">Auditor holati:
                        <select class="modal__input" v-model="addtableUser.isActive" id="userType" required>
                            <option :value="false">Block</option>
                            <option :value="true">Active</option>
                        </select>
                    </label>
                    <label class="modal__label">
                        E-mail
                        <input class="modal__input" type="email" v-model="addtableUser.email" required
                            placeholder="Введите E-mail">
                    </label>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn" type="button">Отмена</button>
                        <button @click="addNewUser" class="succes__btn" type="submit">Добавить проверяющего</button>
                    </div>
                </div>
            </form>
        </div>
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
                        <button @click="deleteUser" class="delete__btn">Удалить</button>
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
                        <input class="modal__input" type="text" v-model="editableUser.lastName" @focus="selectAllText"
                            placeholder="Введите фамилию">
                    </label>
                    <label class="modal__label">
                        Имя
                        <input class="modal__input" type="text" v-model="editableUser.firstName" @focus="selectAllText"
                            placeholder="Введите имя">
                    </label>
                    <label class="modal__label" for="userType">Hodim Turi:
                        <select class="modal__input" v-model="editableUser.userType" id="userType">
                            <option value="Manager">Manager</option>
                            <option value="Hodim">Hodim</option>
                        </select>
                    </label>
                    <label class="modal__label">
                        E-mail
                        <input class="modal__input" type="email" v-model="editableUser.email" @focus="selectAllText"
                            placeholder="Введите E-mail">
                    </label>
                    <div class="modal__btn-wrapper">
                        <button @click="exit" class="exit__btn">Отмена</button>
                        <button @click="editUser" class="succes__btn">Добавить проверяющего</button>
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
                    <label class="modal__label" for="userType">Auditor holati:
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