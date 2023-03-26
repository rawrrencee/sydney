<script setup lang="ts">
defineProps({
  onClick: Function
});
</script>

<template>
  <button
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    type="button"
    class="inline-flex items-center gap-x-1.5 rounded bg-emerald-50 py-1 px-2 text-xs font-semibold text-emerald-600 shadow-sm hover:bg-emerald-100"
    @click="onClick ? onClick() : null"
  >
    <slot />
  </button>
</template>
