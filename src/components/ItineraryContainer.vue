<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue';

defineProps({
  shouldShow: Boolean
});
</script>

<template>
  <TransitionRoot
    enter="transition duration-300 ease-in-out"
    enter-from="transform scale-95 opacity-0"
    enter-to="transform scale-100 opacity-100"
    leave="transition duration-300 ease-in-out"
    leave-from="transform scale-100 opacity-100"
    leave-to="transform scale-95 opacity-0"
    class="flex flex-col gap-2"
    :show="shouldShow"
  >
    <slot />
  </TransitionRoot>
</template>
