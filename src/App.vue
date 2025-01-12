<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
let router = useRouter()
let route = useRoute()
router.push("/")

if (route.path == "/") {
  router.push('general')
}
</script>

<template>
  <RouterView />
</template>
