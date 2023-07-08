<script setup>
const { placeholder, secret } = defineProps({
  placeholder: {
    default: ""
  },
  secret: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <input class="h-12 px-5 border-2 focus:border-yellow-500 rounded-3xl" :type="secret ? 'password' : 'text'"
    :placeholder="placeholder" />
</template>
