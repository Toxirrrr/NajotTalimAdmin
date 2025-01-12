<script setup>
import router from "@/router";
import { reactive } from "vue";
import { login } from '../../Services/UserService'
import "./Login.css";


let user = reactive({
    username: '',
    password: ''
})

function loginUser(evt) {
    evt.preventDefault()
    let ok = login(user)
    
    //  router.push("/general")
}
</script>
<template>
    <div class="wrapper">
        <div class="login__wrapper">
            <h2 class="login__title">Kirish</h2>
            <form class="login__form" @submit="loginUser">
                <label class="login__label">
                    E-mail
                    <input class="login__input" type="text" placeholder="Введите E-mail"
                        v-model="user.username"></label>
                <label class="login__label">
                    Пароль
                    <input class="login__input" type="password" placeholder="Введите пароль" minlength="6"
                        v-model="user.password"></label>
                <button class="login__btn" type="submit">Войти</button>
            </form>
        </div>
    </div>
</template>