<script setup>
import Modal from './Modal.vue';
import Loading from '../utils/Loading.vue';

const { isVisible } = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <Modal :isVisible="isVisible" class="text-center">
    <Loading class="mx-auto" />
  </Modal>
</template>
