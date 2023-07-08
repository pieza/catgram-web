<script setup>
import TextField from '../../common/fields/TextField.vue';
import Button from '../../common/buttons/Button.vue';
import { useAppStore } from '@/store';

const config = useRuntimeConfig();
const app = useAppStore();

const user = reactive({
  username: '',
  name: '',
  password: '',
  confirmPassword: ''
})

const isValid = computed(() => user.username.length > 2
  && user.name.length > 2
  && user.password.length > 2
  && user.password == user.confirmPassword)

const submit = async () => {
  app.setLoading(true);
  try {
    const result = await $fetch(`${config.public.apiUrl}/auth/signup`, {
      method: 'POST',
      body: user
    });

    if (result) {
      app.showAlert('success', 'Success', 'User created successfuly');
      navigateTo('/login')
    }
  } catch (error) {
    app.showAlert('error', "Error", error.data.message || error.message);
  } finally {
    app.setLoading(false);
  }
}
</script>

<template>
  <h1 class="text-4xl font-bold mb-12">Create Account</h1>
  <form @submit.prevent="submit">
    <TextField class="w-full mb-5" placeholder="Username" :value="user.username"
      @input="(e) => user.username = e.target.value" />
    <TextField class="w-full mb-5" placeholder="Name" :value="user.name" @input="(e) => user.name = e.target.value" />
    <TextField class="w-full mb-5" placeholder="Password" secret :value="user.password"
      @input="(e) => user.password = e.target.value" />
    <TextField class="w-full mb-5" placeholder="Confirm Password" secret :value="user.confirmPassword"
      @input="(e) => user.confirmPassword = e.target.value" />
    <h3 class="text-xl text-center mb-12">
      Already have an account?
      <NuxtLink to="/login" class="cursor-pointer font-bold text-amber-500">LOGIN
      </NuxtLink>
    </h3>
    <Button type="submit" class="w-full" :disabled="!isValid">SIGN UP</Button>
  </form>
</template>
