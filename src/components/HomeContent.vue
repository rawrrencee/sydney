<script setup lang="ts">
defineProps({
  styleClass: Array<String>
});
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    class="flex-1 flex flex-col"
    :class="styleClass ?? []"
  >
    <slot></slot>
  </div>
</template>
