<script setup lang="ts">
defineProps({
  onClick: Function
});
</script>

<template>
  <a
    href="href ?? '#'"
    class="cursor-pointer transition duration-200 hover:translate-x-1 hover:md:translate-y-1 hover:md:translate-x-0 text-xs font-semibold basis-1/3 md:basis-1/5 lg:basis-1/6 leading-7 text-neutral-900 bg-neutral-50 rounded-md px-2 py-3 shadow-md hover:bg-gray-200"
    @click.prevent="onClick ? onClick() : null"
  >
    <slot></slot>
  </a>
</template>
