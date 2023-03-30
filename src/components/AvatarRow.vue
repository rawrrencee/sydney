<script setup lang="ts">
import { peopleList } from '@/constants/people';
</script>

<template>
  <div class="flex justify-center -space-x-1">
    <template v-for="p in peopleList" :key="p.handle">
      <img class="w-h-5 inline-block h-5 rounded-full ring-1 ring-neutral-200" :src="p.image" />
    </template>
  </div>
</template>
