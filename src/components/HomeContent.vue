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
    class="flex-1 flex flex-col overflow-y-scroll"
    :class="styleClass ?? []"
  >
    <slot></slot>
  </div>
</template>
