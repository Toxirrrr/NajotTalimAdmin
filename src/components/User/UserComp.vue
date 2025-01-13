<script setup>
import { getByid } from '@/Services/ManagerService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { components } from '..';
const route = useRoute()
const userId = route.params.id
let user = ref({})
onMounted(async () => {
  await getByid(userId);
  user.value = components.getById;
});


</script>

<template>
    <h1>{{ user.name }}</h1>
</template>