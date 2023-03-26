<script setup lang="ts">
import { ref } from 'vue';
import HomeHeader from '../components/HomeHeader.vue';
import HomeLinks from '../components/HomeLinks.vue';

const showRandomiser = ref(false);
</script>

<template>
  <main class="relative isolate min-h-full">
    <img
      src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div class="mx-auto max-w-7xl px-6 py-14 text-center lg:px-8">
      <HomeHeader />
      <HomeLinks v-model:show-randomiser="showRandomiser" />
    </div>
  </main>
</template>
