<script setup lang="ts">
import RouteBadge from './RouteBadge.vue';

defineProps({
  gradeCounts: Array<any>
});
</script>

<template>
  <template v-for="(gradeCount, i) in gradeCounts" :key="gradeCount.grade">
    <RouteBadge
      v-if="i <= 7"
      :grade-int="gradeCount.gradeInt"
      :grade-count="gradeCount.count"
      :grade-string="gradeCount.grade"
    />
  </template>
  <span
    class="text-xs font-medium px-1.5 py-0.5 rounded bg-neutral-100"
    v-if="gradeCounts && gradeCounts.length > 8"
    >+ {{ gradeCounts.length - 8 }}</span
  >
</template>
