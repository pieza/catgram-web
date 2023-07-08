<script setup>
import TextField from '../../common/fields/TextField.vue';
import Button from '../../common/buttons/Button.vue';
import { useAppStore } from '@/store';

const config = useRuntimeConfig();
const app = useAppStore();

const user = reactive({
  username: '',
  password: ''
})

const isValid = computed(() => user.username.length > 2 && user.password.length > 2)

const submit = async () => {
  app.setLoading(true);
  try {
    const result = await $fetch(`${config.public.apiUrl}/auth/login`, {
      method: 'POST',
      body: user
    });

    if (result) {
      console.log(result)
      app.showAlert('success', 'Success', 'User created successfuly');
    }
  } catch (error) {
    app.showAlert('error', "Error", error.data.message || error.message);
  } finally {
    app.setLoading(false);
  }
}
</script>

<template>
  <h1 class="text-4xl font-bold mb-12">Welcome Back!</h1>
  <form @submit.prevent="submit">
    <TextField class="w-full mb-5" placeholder="Username" :value="user.username"
      @input="(e) => user.username = e.target.value" />
    <TextField class="w-full mb-5" placeholder="Password" secret :value="user.password"
      @input="(e) => user.password = e.target.value" />
    <h3 class="text-xl text-center mb-12">
      Doesn't have an account?
      <NuxtLink to="/signup" class="cursor-pointer font-bold text-amber-500">SIGN UP
      </NuxtLink>
    </h3>
    <Button type="submit" class="w-full" :disabled="!isValid">LOGIN</Button>
  </form>
</template>
