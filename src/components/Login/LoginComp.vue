<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { login } from '../../Services/UserService'
import "./Login.css";

let router = useRouter()
let user = reactive({
    username: '',
    password: ''
})

async function loginUser(evt) {
    evt.preventDefault()
    let ok = await login(user)

    if (ok) {
        router.push("/general")
    }

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