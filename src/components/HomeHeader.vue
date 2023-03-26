<script setup lang="ts">
import AvatarRow from './AvatarRow.vue';

defineProps({
  currentPath: String
});
</script>

<template>
  <div
    v-if="currentPath === '/'"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
  >
    <AvatarRow />
    <p class="mt-1 text-xs font-semibold leading-8 text-neutral-200">15 - 22 Apr 2023</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl focus:animate-spin">
      Sydney 🇦🇺
    </h1>
  </div>
</template>
