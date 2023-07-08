<script setup>
import LoginForm from '../components/auth/login/LoginForm.vue';  
</script>

<template>
  <NuxtLayout name="lean" class="bg-cover bg-center" :style="{ backgroundImage: `url('img/bg-auth.jpg')` }">
    <LoginForm />
  </NuxtLayout>
</template>
