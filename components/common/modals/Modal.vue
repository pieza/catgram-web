<script setup>
const { isVisible } = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div v-if="isVisible" class="h-screen w-screen fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <slot></slot>
  </div>
</template>
