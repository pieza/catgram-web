<script setup>
const { outline } = defineProps({
  outline: {
    default: true
  }
});
</script>

<template>
  <button class="h-12 px-5 rounded-3xl bg-amber-500 disabled:bg-zinc-500 text-white text-xl font-bold">
    <slot></slot>
  </button>
</template>
