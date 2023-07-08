<script setup>
import SignupForm from '../components/auth/signup/SignupForm.vue';  
</script>

<template>
  <NuxtLayout name="lean" class="bg-cover bg-center" :style="{ backgroundImage: `url('img/bg-auth.jpg')` }">
    <SignupForm />
  </NuxtLayout>
</template>
