<script setup lang="ts">
defineProps({
  href: String,
  onClick: Function
});
</script>

<template>
  <a
    :href="href ?? '#'"
    class="cursor-pointer rounded-md bg-neutral-50 px-2 py-3 text-sm font-semibold leading-7 text-neutral-900 shadow-lg transition duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 hover:md:translate-x-0 hover:md:translate-y-1"
    @click.prevent="onClick ? onClick() : null"
  >
    <slot></slot>
  </a>
</template>
