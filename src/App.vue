<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
let token = window.localStorage.getItem("token")
let router = useRouter()
let route = useRoute()

if (!token) {
  router.push('/login')
}
</script>

<template>
  <RouterView />
</template>
