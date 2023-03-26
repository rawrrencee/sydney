<script setup lang="ts">
defineProps({
  href: String,
  onClick: Function
});
</script>

<template>
  <a
    :href="href ?? '#'"
    class="cursor-pointer text-xs font-semibold leading-7 text-neutral-900 bg-neutral-50 rounded-md px-2 py-3 shadow-lg basis-1/3 md:basis-1/5 lg:basis-1/6 transition duration-200 hover:md:translate-y-1 hover:md:translate-x-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    @click.prevent="onClick ? onClick() : null"
  >
    <slot></slot>
  </a>
</template>
