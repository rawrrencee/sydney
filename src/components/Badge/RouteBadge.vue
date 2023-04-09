<script setup lang="ts">
defineProps({
  gradeInt: Number,
  gradeString: String,
  gradeCount: Number
});
</script>

<template>
  <div
    class="flex flex-row gap-1 rounded align-middle text-xs font-medium min-w-fit"
    :class="[
      [-1, 0, 1].includes(gradeInt!) && 'bg-emerald-100 text-emerald-800',
      [2, 3].includes(gradeInt!) && 'bg-sky-100 text-sky-800',
      [4, 5, 6].includes(gradeInt!) && 'bg-purple-100 text-purple-800',
      [7, 8, 9].includes(gradeInt!) && 'bg-orange-100 text-orange-800',
      gradeInt! > 9 && 'bg-red-100 text-red-800'
    ]"
  >
    <span class="py-0.5" :class="[!gradeCount ? 'px-1.5' : 'pl-1']">{{ gradeString }}</span>
    <span
      v-if="gradeCount"
      class="pl-1 py-0.5 pr-1 rounded"
      :class="[
        [-1, 0, 1].includes(gradeInt!) && 'bg-emerald-50',
        [2, 3].includes(gradeInt!) && 'bg-sky-50',
        [4, 5, 6].includes(gradeInt!) && 'bg-purple-50',
        [7, 8, 9].includes(gradeInt!) && 'bg-orange-50',
        gradeInt! > 9 && 'bg-red-50'
      ]"
      >{{ gradeCount }}</span
    >
  </div>
</template>
