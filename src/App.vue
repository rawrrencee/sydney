<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView :currentPath="$route.path" />
</template>
