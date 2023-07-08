<script setup>
import Modal from './Modal.vue';
import Card from '../containers/Card.vue';
import Button from '../buttons/Button.vue';

const icons = {
  info: 'img/info.png',
  error: 'img/error.png',
  warning: 'img/warning.png',
  success: 'img/success.png'
}
const { isVisible, setVisible, title, type } = defineProps({
  isVisible: {
    required: true,
    type: Boolean,
    default: false
  },
  setVisible: {
    required: true
  },
  title: {
    default: ''
  },
  type: {
    default: 'info'
  },
  message: {
    default: ''
  }
});
</script>

<template>
  <Modal :isVisible="isVisible">
    <Card class="w-2/3 h-1/2 flex flex-col text-center justify-center px-12">
      <div class="flex flex-row justify-center mb-10">
        <img :src="icons[type]" class="w-28 h-28">
      </div>
      <h1 class="text-4xl font-bold mb-6">{{ title }}</h1>
      <p class="text-lg mb-12">{{ message }}</p>
      <div class="flex flex-row justify-center">
        <Button class="justify-self-end w-28" @click="setVisible(false)">Ok</Button>
      </div>
    </Card>
  </Modal>
</template>
