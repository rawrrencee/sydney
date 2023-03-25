<script setup lang="ts"></script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="200"
  >
    <p class="text-base font-semibold leading-8 text-white">Sydney 🌱</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">15 - 22 Apr 2022</h1>
    <p class="mt-2 text-base text-white/70 sm:mt-6">Welcome.</p>
  </div>
</template>
