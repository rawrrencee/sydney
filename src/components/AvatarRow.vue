<script setup lang="ts">
import { peopleList } from '@/constants/people';
</script>

<template>
  <div class="flex -space-x-1 justify-center">
    <template v-for="p in peopleList" :key="p.handle">
      <img class="inline-block h-5 w-h-5 rounded-full ring-1 ring-neutral-200" :src="p.image" />
    </template>
  </div>
</template>
