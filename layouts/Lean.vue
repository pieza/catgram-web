<script setup>
import RoundedCard from '../components/common/containers/RoundedCard.vue';
</script>

<template>
  <div class="h-screen flex flex-col justify-end items-center">
    <RoundedCard class="min-h-3/5 max-w-2xl">
      <div class="h-full flex flex-col justify-start px-6 pb-4 pt-12">
        <slot></slot>
      </div>
    </RoundedCard>
  </div>
</template>
