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
    class="relative cursor-pointer rounded-lg bg-white pb-1 shadow-md"
  >
    <div
      class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80"
    >
      <template v-if="imageSrc != null">
        <img :src="imageSrc" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </template>
      <template v-else>
        <QuestionMarkCircleIcon
          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </template>
    </div>
    <div class="p-4">
      <slot name="footer"></slot>
    </div>
    <div class="flex flex-1 flex-col space-y-2 px-4 pb-2">
      <h3 class="text-sm font-medium text-neutral-900">
        <a :href="href" class="hover:text-indigo-400" @click.prevent="onClick ? onClick() : null">
          <span aria-hidden="true" class="absolute inset-0" />
          {{ title }}
        </a>
      </h3>
      <p class="line-clamp-2 text-sm text-neutral-500">{{ subtitle }}</p>
    </div>
  </div>
</template>
