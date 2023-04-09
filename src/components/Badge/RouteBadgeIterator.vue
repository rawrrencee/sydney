<script setup lang="ts">
import RouteBadge from './RouteBadge.vue';

const props = defineProps({
  gradeCounts: Array<any>
});
console.log(props.gradeCounts);
</script>

<template>
  <template v-for="(gradeCount, i) in gradeCounts" :key="gradeCount.grade">
    <RouteBadge
      v-if="i <= 5"
      :grade-int="gradeCount.gradeInt"
      :grade-count="gradeCount.count"
      :grade-string="gradeCount.grade"
    />
  </template>
  <span
    class="text-xs font-medium px-1.5 py-0.5 rounded bg-neutral-100"
    v-if="gradeCounts && gradeCounts.length > 6"
    >+ {{ gradeCounts.length - 6 }}</span
  >
</template>
