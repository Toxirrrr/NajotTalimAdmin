<script setup>
import './User.css'
import { getByid } from '@/Services/ManagerService';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { components } from '../';
import { getAllTasks } from '@/Services/TasksService';
import { addUserTask } from '@/Services/UserService';
let add__tasks = ref(false)
const selectedTasks = reactive([])
const route = useRoute()
const userId = route.params.id
let user = ref({})
onMounted(async () => {
  await getByid(userId);
  user.value = components.getById;
});

async function addNewTask() {
  await addUserTask(userId, selectedTasks)
  await getByid(userId);
  user.value = components.getById;
  add__tasks.value = false
}

function toggleTaskSelection(item, isChecked) {
  if (isChecked) {
    selectedTasks.push(item);

  } else {
    const index = selectedTasks.findIndex((t) => t.id === item.id);
    if (index !== -1) {
      selectedTasks.splice(index, 1);
    }
  }
}

function open__modal() {
  add__tasks.value = true
}

function exit() {
  add__tasks.value = false
}
getAllTasks()
</script>

<template>
  <div class="user__wrapper">
    <h2 class="user__title">{{ user.type + " " + user.name }}</h2>
    <p class="user__text">{{ user.last_name }}</p>
    <h3 class="user__task">hunarlari tasks</h3>
    <ol class="user__list">
      
      <li class="user__item" v-for="(item, index) in user.tasks" :key="index">
        <p>{{ item.name }}</p>
      </li>
    </ol>
    <button class="succes__btn user__btn" @click="open__modal">Task qo’shish</button>
  </div>
  <div v-if="add__tasks" class="delete__modal">
    <div class="modal__wrapper">
      <h2 class="modal__title">Vazifa qo’shish
        <button class="close" @click="exit"><img src="/img/filled_navigation_close.svg" alt="close"></button>
      </h2>
      <div class="modal__text-wrapper">
        <p class="user__modal-text">Vazifa turi</p>
        <ul class="user__modal-list">
          <li class="user__modal-item" v-for="(item, index) in components.getAllTasks.filter(task => task.type === user.type)" :key="index">
            <input type="checkbox" :value="item" :checked="user.tasks.some(userTask => userTask.id === item.id)" @change="(e) => toggleTaskSelection(item, e.target.checked)">
            {{ item.name }}
          </li>
        </ul>
        <div class="modal__btn-wrapper">
          <button @click="exit" class="exit__btn">Bekorqilish</button>
          <button class="succes__btn" @click="addNewTask" type="submit">Saqlash</button>
        </div>
      </div>
    </div>
  </div>
</template>