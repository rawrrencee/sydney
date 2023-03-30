<script setup lang="ts">
defineProps({
  onClick: Function
});
</script>

<template>
  <button
    text-neutral-600
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    type="button"
    class="inline-flex items-center gap-x-1.5 rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
    @click="onClick ? onClick() : null"
  >
    <slot />
  </button>
</template>
