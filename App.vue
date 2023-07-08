<script setup>
import LoadingModal from './components/common/modals/LoadingModal.vue';
import AlertModal from './components/common/modals/AlertModal.vue';
import { useAppStore } from '@/store';

const app = useAppStore();
</script>

<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage />
        <LoadingModal :isVisible="app.isLoading" />
        <AlertModal :isVisible="app.isAlertVisible" :setVisible="app.setAlertVisible" :title="app.alertData.title"
          :message="app.alertData.message" :type="app.alertData.type" />
      </div>
    </NuxtLayout>
  </div>
</template>
