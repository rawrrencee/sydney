<script setup lang="ts">
import { aaronsends } from '@/assets/images/aaronsends';
import { champanzee } from '@/assets/images/champanzeee';
import { confusednicole } from '@/assets/images/confusednicole';
import { iamgandalf98 } from '@/assets/images/iamgandalf98';
import { locksclimbinglog } from '@/assets/images/locksclimbinglog';
import { notnicetohold } from '@/assets/images/notnicetohold';
import { rawrrclimbs } from '@/assets/images/rawrrclimbs';
import { soniayetsofarr } from '@/assets/images/soniayetsofarr';
const people = [
  aaronsends,
  champanzee,
  confusednicole,
  iamgandalf98,
  locksclimbinglog,
  notnicetohold,
  rawrrclimbs,
  soniayetsofarr
];
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
  >
    <div class="flex -space-x-1 justify-center">
      <template v-for="p in people" :key="p.handle">
        <img class="inline-block h-5 w-h-5 rounded-full ring-1 ring-neutral-200" :src="p.image" />
      </template>
    </div>
    <p class="mt-1 text-xs font-semibold leading-8 text-neutral-200">15 - 22 Apr 2023</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">Sydney 🌱</h1>
  </div>
</template>
