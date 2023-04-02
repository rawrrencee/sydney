<script setup lang="ts">
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';

defineProps({
  imageSrc: String,
  href: String,
  onClick: Function,
  title: String,
  subtitle: String
});
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1 }"
    class="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md"
  >
    <div class="aspect-h-4 aspect-w-3 sm:aspect-none max-h-72 group-hover:opacity-75 sm:h-96">
      <template v-if="!!imageSrc">
        <img :src="imageSrc" class="h-full w-full object-cover object-center" />
      </template>
      <template v-else>
        <QuestionMarkCircleIcon class="h-full w-full object-cover object-center" />
      </template>
    </div>
    <div class="flex flex-1 flex-col space-y-2 p-4">
      <h3 class="text-sm font-medium text-neutral-900">
        <a :href="href" @click.prevent="onClick ? onClick() : null">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ title }}
        </a>
      </h3>
      <p class="line-clamp-2 text-sm text-neutral-500">{{ subtitle }}</p>
    </div>
  </div>
</template>
